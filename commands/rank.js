const canvacord = require('canvacord')
const Discord = require('discord.js')
const Levels = require('discord-xp')

module.exports = {
    name:"rank",

    async run(client, message, args){

        const target =  message.author 
        
        const user = await Levels.fetch(target.id, message.guild.id);

        const neededXp = Levels.xpFor(parseInt(user.level) + 1)

        if(!user) return message.channel.send('Nemate XP, posaljite par poruka!')

        const rank = new canvacord.Rank()
        .setAvatar(message.author.displayAvatarURL({dynamic:false, format:'png'}))
        .setCurrentXP(user.xp)
        .setRequiredXP(neededXp)
        .setLevel(user.level)
        .setBackground('IMAGE', 'https://img.freepik.com/free-vector/blue-copy-space-digital-background_23-2148821698.jpg?size=626&ext=jpg&ga=GA1.2.2125224140.1621036800')
        .setProgressBar('GREEN', 'COLOR')
        .setUsername(message.author.username)
        .setDiscriminator(message.author.discriminator)
    rank.build()
    .then(data => {
        const atacment = new Discord.MessageAttachment(data, 'rank.png')
        message.channel.send(atacment)
    })
    }
}