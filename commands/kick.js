const Discord = require('discord.js');

const moment = require('moment')

module.exports = {
    name: "kick",
    description: "Kicks a member from the server",

    async run (client, message, args) {

        if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send(':no_entry_sign: Nemate permisiju za koristenje komande. Potrebna permisija je `KICK_MEMBERS`')
        if(!message.guild.me.hasPermission("KICK_MEMBERS")) return message.channel.send('')

        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);

        if(!args[0]) return message.channel.send('');

        if(!member) return message.channel.send('MENTIONAJTE MEMBERA');
        if(!member.kickable) return message.channel.send(':no_entry_sign: ');

        if(member.id === message.author.id) return message.channel.send('');

        let reason = args.slice(1).join(" ");

        if(!reason) reason = 'Unspecified';
    


        member.kick(reason)
        .catch(err => {
            if(err) return message.channel.send('')
        })

        const kickembed = new Discord.MessageEmbed()
        .setTitle('Member je uspesno kickovan!')
        .setThumbnail(member.user.displayAvatarURL())
        .addField('Member:', member)
        .addField('Admin/Mod', message.author)
        .addField('Razlog:', reason)
        .setFooter(`Comp™|${moment().format('MMMM Do YYYY, h:mm A')}`)
        .setTimestamp()

        message.channel.send(kickembed);

    }
}