const Discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name:"skip",

    async run(client, message, args){
        if (!message.member.voice.channel) return message.channel.send('Morate biti u voice kanalu!');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
            client.distube.skip(message)
    
            const skipembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription('PESMA SKIPOVANA!')

            message.channel.send(skipembed)
        } else if (!queue) {
            return
        };
    }
    
}