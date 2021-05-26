const Discord = require('discord.js')

module.exports = {
    name:"8ball",
    description:"Daje odgovore na pitanja",

    async run(client, message, args){
        let pitanje = args.join(" ")
        let odgovori = [
            '`DA`',
            '`NE`',
            '`MOZDA`',
            '`NE VERUJEM`',
            '`NEMA SANSE`',
            '`????`',
        ];
        let odgovor = odgovori[Math.floor(Math.random() * odgovori.length - 1)];
        const ball = new Discord.MessageEmbed()
        .addField('Pitanje', pitanje)
        .addField('Odgovor', odgovor)
        .setColor('RANDOM')
        
        message.channel.send(ball)

    }
}