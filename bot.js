const Discord = require('discord.js');
const client = new Discord.Client();
const { readdirSync } = require('fs');
const { join } = require('path');
const mongoose = require('mongoose')
const moment = require('moment');
const { type } = require('os'); 
const Levels = require('discord-xp')
const DisTube = require('distube')

client.commands= new Discord.Collection();

Levels.setURL("VAS_MONGODB_URL")

mongoose.connect("VAS_MONGODB_URL", { useNewUrlParser: true, useUnifiedTopology: true, })
mongoose.set('useFindAndModify', false);

const commandFiles = readdirSync(join(__dirname, "commands")).filter(file => file.endsWith(".js"));



for (const file of commandFiles) {
    const command = require(join(__dirname, "commands", `${file}`));
    client.commands.set(command.name, command);
}

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Pusta se: \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Dodata pesma: ${song.name} - \`${song.formattedDuration}\` od strane: ${song.user}`
    ))

client.distube = new DisTube(client, { searchSongs: false, emitNewSongOnly: true });
client.distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Pusta se: \`${song.name}\` - \`${song.formattedDuration}\`\nRequested by: ${song.user}`
	))
	.on("addSong", (message, queue, song) => message.channel.send(
        `Dodana pesma: ${song.name} - \`${song.formattedDuration}\` od strane: ${song.user}`
    ))

client.on("error", console.error);

	
 client.on('ready', () => {
    console.log('Bot preman za upotrebu!');
    client.user.setActivity(`OBA|$help`, {type:'WATCHING'})
});

let stats = {
    serverID: '<ID>',
    total: "<ID>",
    member: "<ID>",
    bots: "<ID>"
}




client.on('message', async message =>{
    if(message.content === '$help'){
        const helpembed1 = new Discord.MessageEmbed()
        .setColor('GREEN')
        .addFields(
            { name: 'Dobrodosli na OBA SERVICE(BETA VERZIJA)', value: 'Ukucajte $botinfo da vidite informacije o botu! :)' },
            { name: 'MODERATION', value: 'Ukucajte `$moderation` da bi ste videli mod komande!', inline: true },
            { name: 'WARNING SYSTEM', value: 'Ukucajte `$warning` da bi ste videli warning komande!', inline: true },
            { name: 'LEVELING(BETA)', value: 'Ukucajte `$leveling` da bi ste videli leveling komande!', inline: true },
            { name: 'FUN', value: 'Ukucajte `$fun` da bi ste videli fun komande!', inline: true },
            { name: 'LOVE', value: 'Ukucajte `$love` da bi ste videli love komande!', inline: true },
            { name: 'USER INFO', value: 'Ukucajte `$user [member]` da vidite informacije o memberu!', inline: true },
            { name: 'REPORT', value: 'Ukucajte `$report [member] [reason]` da reportate membera!', inline: true },
            { name: 'MUSIC', value: 'Ukucajte `$music` da vidite music komande!', inline: true },
            { name: 'AVATAR', value: 'Ukucajte `$avatar [member]` da vidite avatara membera!', inline: true },
        )
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} | `)
        message.channel.send(helpembed1)
    }
})


client.on('message', async message =>{
    if(message.content === '$moderation'){
        const moderationhelp = new Discord.MessageEmbed()
        .setTitle('MODERATION COMMANDS')
        .setDescription('**BAN** - Ukucajte `$ban [member] [reason]` da banujete membera!\n **KICK** - Ukucajte `$kick [member] [reason]` da kickujete membera!\n **MUTE** -ukucajte `$mute [member] [time] [reason]` da mute-ate membera!\n **UNMUTE** -ukucajte `$unmute [member] [reason]` da unmute-ate membera\n**POLL**- ukucajte `$poll [kanal] [text]` da postavite pitanje!')
        .setColor('GREEN')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} | `)
        message.channel.send(moderationhelp)
    }
})

client.on('message', async message =>{
    if(message.content === '$music'){
        const moderationhelp = new Discord.MessageEmbed()
        .setTitle('MUSIC COMMANDS')
        .setDescription('**PLAY** - Ukucajte `$play [song]` da pustite pesmu!\n **SKIP** - Ukucajte `$skip` da skipujete pesmu!\n **STOP** -ukucajte `$stop [member]` da bot izadje iz voice-a!')
        .setColor('GREEN')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username} | `)
        message.channel.send(moderationhelp)
    }
})

client.on('message', async message =>{
    if(message.content === '$warning'){
        const warninghelp = new Discord.MessageEmbed()
        .setTitle('WARNING COMMANDS (BETA)')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setDescription('**WARN** -ukucajte `$warn [member] [reason]` da warnujete membera!\n **WARNS** -$warnings [member]!')
        .setColor('GREEN')
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}|`)

        message.channel.send(warninghelp)
    }
})
client.on('message', async message =>{
    if(message.content === '$leveling'){
        const levelinghelp = new Discord.MessageEmbed()
        .setTitle('LEVELING COMMANDS (BETA)')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setDescription('**RANK** -ukucajte `$rank` da vidite svoj rank!\n **LEADERBOARD** -Ukucajte `$lb` da vidite leaderboard servera! \n **ADDXP** -comming soon...')
        .setTimestamp()
        .setColor('GREEN')
		.setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setFooter(`Requested by ${message.author.username}|`)

        message.channel.send(levelinghelp)
    }
})

client.on('message', async message =>{
    if(message.content === '$fun'){
        const funhelp = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setTitle('FUN COMMANDS')
        .setDescription('**8BALL** -ukucajte `$8ball [pitanje]` da postavite botu pitanje!\n **GAY** -ukucajte `$gay [member]` da vidite gay u %!\n **MEME** -ukucajte `$meme` da vidite meme sa reddita!\n **KILL** -ukucajte `$kill [member]` da killujete membera!\n **ROAST** -ukucajte `$roast [member]` da bot reasta membera!\n **PP** -ukucajte `$pp [member]` da vidite memberov pp!')
        .setTimestamp()
		.setImage('https://api.creavite.co/out/751d099a-13fd-425f-a670-bc49c166f5c3_standard.gif')
        .setFooter(`Requested by ${message.author.username}|`)   
        
        message.channel.send(funhelp)
    }
})

client.on('message', async message =>{
    if(message.content === '$love'){
        const lovehelp = new Discord.MessageEmbed()
        .setColor('GREEN')
        .setTitle('LOVE COMMANDS')
        .setDescription('**KISS** -ukucajte `$kiss [member]` da poljubite membera!\n **SHIP** -ukucajte `$ship [member]` da shipujete sebe sa drugim memberom!\n **HUG** -ukucajte `$hug [member]` da zagrlite membera!\n **SLAP** -ukucajte `$slap [member]` da udarite membera!')
        .setImage(`https://api.creavite.co/out/3ffe5fc0-dd4c-4983-a6b8-898a26282eaa_standard.gif`)
        .setTimestamp()
        .setFooter(`Requested by ${message.author.username}|`)

        message.channel.send(lovehelp)
    }
})
client.on("message", async message => {
    if (!message.guild) return;
    if (message.author.bot) return;


    const randomXp = Math.floor(Math.random() * 9) + 1; //Random amont of XP until the number you want + 1
    const hasLeveledUp = await Levels.appendXp(message.author.id, message.guild.id, randomXp);
    if (hasLeveledUp) {
        const user = await Levels.fetch(message.author.id, message.guild.id);
        message.channel.send(`${message.author},dostigao si level: ${user.level}! Nastavi tako!`);
    }
      
    //Leaderboard
    if(message.content === "c!leaderboard" || message.content === "c!lb") {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 5);
        if (rawLeaderboard.length < 1) return reply("Nobody's in leaderboard yet.");

        const leaderboard = Levels.computeLeaderboard(client, rawLeaderboard); 

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}\nXP: ${e.xp.toLocaleString()}`);

        message.channel.send(`${lb.join("\n\n")}}`)
    }
})

client.on("message", async message =>{
    if (message.content === "$warn") {
        let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
        if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("You can't use that command!")
        if (!dUser) return message.channel.send("Can't find user!")
        let dMessage = args.join(" ").slice(22);
        if (dMessage.length < 1) return message.reply('what is the reason???')
    
        dUser.send(`${dUser}, You have been warned for doing ${dMessage} in the server ${message.guild.name}`)
    
        message.channel.send(`${dUser} has been warned for doing ${dMessage} :thumbsdown:`)

    }

})

client.on("message", async message => {
    const prefixfile = require('./prefix')
    const prefix = (prefixfile.prefix)
    if(message.content.startsWith(prefix)) {
        const args = message.content.slice(prefix.length).trim().split(/ +/g);
        const command = args.shift().toLowerCase();
        if(!client.commands.has(command)) return
        try {
            client.commands.get(command).run(client, message, args);
        } catch (error){
            console.error(error);
        }
    }
})



client.on("message", async message =>{
    if(message.content ===`$botinfo`){
        const botinfo = new Discord.MessageEmbed()
        .setTitle(':robot: BOT INFORMATIONS')
        .addField('Bot Name:', 'OBA SERVICE')
        .addField('Bot Developer:', 'STEVICA')
        .addField('Prefix', '`$`')
        .addField('Bot Help Command:', '`c!help`')
        .addField('Bot Permissions', '`Administrator`')
        .addField('Bot Created At:','`20/5/2021`')
        .setColor('BLUE')
        .setFooter(`Requested by: ${message.author.username} || ${moment().format('MMMM Do YYYY, h:mm A')}`, message.author.displayAvatarURL())

        message.channel.send(botinfo)
    }

})




client.on("message", async message =>{
    if(message.content.startsWith('$user')){
        let user;
if (message.mentions.users.first()) {
    user = message.mentions.users.first();
} else {
    user = message.author;
}

const member = message.guild.member(user);

const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setThumbnail(user.displayAvatarURL())
    .setTimestamp()
    .addField(`MEMBER SERVERA:`, `${user}`, false)
    .addField("ID:", `${user.id}`, false)
    .addField("Nickname:", `${member.nickname !== null ? `${member.nickname}` : 'None'}`, false)
    .addField("Status:", `${user.presence.status}`, false)
    .addField("U serveru:", message.guild.name, false)
    .addField("Igra igru:", `${user.presence.game ? user.presence.game.name : 'None'}`, false)
    .addField("Da li je BOT?", `${user.bot}`, false)
    .addField("Usao na server:", `${moment.utc(member.joinedAt).format("dddd, MMMM Do YYYY")}`, false)
    .addField("Account napravljen:", `${moment.utc(user.createdAt).format("dddd, MMMM Do YYYY")}`, false) 
    .setFooter(`Requested by ${message.author.username}||`)
    message.channel.send(embed);
}

})



client.on("message", async message =>{
    if(message.content ===`c!gagi`){
        const user = message.mentions.users.first() || message.author;
        const botinfo = new Discord.MessageEmbed()
        .setThumbnail(member.displayAvatarURL())
        .setFooter(`Requested by: ${message.author.username} | ${moment().format('MMMM Do YYYY, h:mm A')}`, message.author.displayAvatarURL())

        message.channel.send(botinfo)
    }
})
client.on("message", async message =>{
if(message.content.startsWith('$avatar')|message.content.startsWith('$av')){
    
        
    if(message.mentions.users.size){
        let member=message.mentions.users.first()
    if(member){
        const emb=new Discord.MessageEmbed().setImage(member.displayAvatarURL()).setTitle(member.username)
        message.channel.send(emb)
        
    }
    else{
        message.channel.send("Ne mogu da pronadjem usera!")

    }
    }else{
        const emb=new Discord.MessageEmbed().setImage(message.author.displayAvatarURL()).setTitle(message.author.username)
        message.channel.send(emb)
    }
}

})



client.login('VAS_TOKEN');