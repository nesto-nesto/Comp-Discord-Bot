const Discord = require('discord.js')
const moment = require('moment')
const ms = require('ms')

module.exports = {
    name:'mute',
    description:'tempmute a member',

    async run (client, message, args){

        if(message.member.hasPermission('MANAGE_ROLES')) {
            var member = message.guild.member(message.mentions.users.first() || message.guild.members.cache.get(args[0]));
            if(!member) return message.channel.send('Navedite osobu koju zelite mute!')


            let role = message.guild.roles.cache.find(r => r.name === "🔇・OBA | Muted");

            if(!role) return message.channel.send('Molimo napravite `🔇・OBA | Muted` role i stavite `SEND_MESSAGES` permisije na **false**')

            let time = args[1];

            if(!time) return message.channel.send(':clock10: Napisite vreme!')

            let reason = args.slice(2).join(" ");
            if(!reason) return message.channel.send('Napisite razlog!')


           

            member.roles.add(role);
            const tempmute = new Discord.MessageEmbed()
            .setTitle('Member Muteovan!')
            .addField('Member:', member)
            .addField('Admin/Mod:', message.author)
            .addField('Razlog:', reason)
            .addField('Vreme:', ms(ms(time)))
            .setColor('RED')
            .setFooter(`OBA™|${moment().format('MMMM Do YYYY, h:mm A')}`);
            message.channel.send(tempmute)

            setTimeout( function () {
                member.roles.remove(role);
                const tempmuteunmute = new Discord.MessageEmbed()
                .addField('Member Unmuted!', `${member} je uspesno unmuteovan!` )
                .addField('Admin/Mod:', message.author)
                .setFooter(`OBA™|${moment().format('MMMM Do YYYY, h:mm A')}`)
                .setColor('RANDOM');
                message.channel.send(tempmuteunmute)
            }, ms(time));

        } else {
            return message.channel.send('No permissions')
        }

    }
}