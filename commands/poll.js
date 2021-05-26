const { MessageEmbed } = require('discord.js')

module.exports = {
    name: "poll",
    description: "Glasanje",

    async run (bot, message, args) {
        let channelID = message.mentions.channels.first()
        let opis = args.slice(1).join(" ")



        if(!channelID) return message.reply(":x:`NAVEDITE KANAL`")
        if(!opis) return message.reply(":x:`NAVEDITE OPIS`")

        const embed = new MessageEmbed()
        .setColor("GREEN")
        .setTitle("GLASANJE")
        .setDescription(opis)
        .setFooter("Posted by. "+ message.author.username) 



        let msgEmbed = await channelID.send(embed)
        await msgEmbed.react('👍') 
        await msgEmbed.react('👎')
    }


}