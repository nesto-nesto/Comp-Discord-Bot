const { MessageFlags } = require("discord.js");
const Discord = require('discord.js')

module.exports = {
    name: "pub",
    desciption: "annoucment command",

    async run (client, message, args) {
        let msg;
        let textChannel = message.mentions.channels.first()
        const member = message.author.username
        if(!message.member.hasPermission('MANAGE_SERVER')) return message.channel.send('No permissions')
        message.delete()

        if(textChannel){
            msg = args.slice(1).join(" ");

            const say = new Discord.MessageEmbed()
            .setTitle(':loudspeaker: COMP,Imate novo obavestenje!')
            .setDescription(msg)
            .setColor('RANDOM')
            .setFooter(`Posted by:${member} | Comp™`)
            
            textChannel.send("@everyone imate novo obavjestenje!",say)
        } else {
            msg = args.join(" ");
            const say = new Discord.MessageEmbed()
            .setTitle(':loudspeaker: OBAVESTENJE ZA CLANOVE SERVERA')
            .setDescription(msg)
            .setColor('RANDOM')
            .setFooter(`Posted by:${member} | Comp™`)
            message.channel.send('@everyone,imate novo obavestenje!',say)
        }
    }
}