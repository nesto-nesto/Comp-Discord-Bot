const Discord = require('discord.js')// importuje discord.js modul
const moment = require('moment')// importuje moment modul

module.exports = { //exportuje modul
    name:"pp", //ova linija trigeruje komandu
    description:"% gay",// ovo obicna deskripcija, opisuje kao komandu

    async run(client, message, args){ //pokrece modul
        let member = message.mentions.members.first() || message.author || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(x => x.user.username === args.slice(0).join(" ") || x.user.username === args[0])//ovo omogucava da tagujemo ljude kad koristimo komandu

        let gay = [//ovo nam definise odgovore
            '8D',
            '8=D',
            '8==D',
            '8===D',
            '8====D',
            '8=====D',
            '8======D',
            '8=======D',
            '8========D',
            '8=========D',
            '8==========D'
        ];
        let odgovor = gay[Math.floor(Math.random() * gay.length - 1)];//linija koda koja omogucava random slanje nekog od gore navedegih postotaka
        const gaypostotak = new Discord.MessageEmbed()//pravi discord message embed
        .setTitle(`PP MASINA`)//naziv embeda
        .setDescription(`${member},pp:\n${odgovor}`)//opis embeda
        .setColor('RANDOM')//postavlja random boju za svaki embed

        message.channel.send(gaypostotak)//salje embed u kanal u koji je napisana komanda
    }
}