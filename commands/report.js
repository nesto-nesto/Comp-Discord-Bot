const Discord = require('discord.js');//importuje discord modul
const moment = require('moment');//importuje moment modul

module.exports = {
    name:"report",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])

        const rlogs = member.guild.channels.cache.find(ch => ch.name === '「⛔」ʀᴇᴘᴏʀᴛᴏᴠɪ');

        if(!rlogs) return message.channel.send('Molimo napravite `「⛔」ʀᴇᴘᴏʀᴛᴏᴠɪ` kanal!')

        const razlog = args.slice(1).join(" ");

        message.channel.send(`${member} uspesno reportovan staff teamu!`)

        const reportembed = new Discord.MessageEmbed()
        .setTitle('Member je uspesno reportovan!')
        .addField('Reportovan member:', member)
        .addField('Reporter', message.author)
        .addField('Report Razlog:', razlog)
        .addField('Vreme', moment().format('MMMM Do YYYY, h:mm A'))
        .setFooter('OBA™ ||')
        .setTimestamp()
        .setColor('RED')

        rlogs.send(reportembed)
    }
}