const Discord = require('discord.js')
const distube = require('distube')

module.exports = {
    name:"stop",

    async run(client, message, args){
        if (!message.member.voice.channel) return message.channel.send('MORATE BITI U VOICE KANALU!');

        let queue = await client.distube.getQueue(message);
    
        if(queue) {
            client.distube.stop(message)
    
            const stopembed = new Discord.MessageEmbed()
            .setColor('GREEN')
            .setDescription('STOPOVANO!')

            message.channel.send(stopembed)
        } else if (!queue) {
            return
        };
    }
}