const Discord = require('discord.js');
const moment = require('moment')


module.exports = {
    name:"kiss",
    description:"",

    async run(client, message, args){
        let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])
        
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author} je poljubio ${member}`)
        .setImage('https://media1.giphy.com/media/lTQF0ODLLjhza/giphy.gif?cid=ecf05e47jlxn233mtn0icgl3nquoanfnn85999bmktka54mc&rid=giphy.gif&ct=g')

        message.channel.send(embed)
    }
}