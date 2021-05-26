const Discord = require('discord.js');
const Levels = require('discord-xp');

module.exports = {
    name: "lb",
    aliases: ['lb'],
    cooldown: 1000 * 5,
    description: "..",

    async run(bot, message, args) {
        const rawLeaderboard = await Levels.fetchLeaderboard(message.guild.id, 10); 

        if (rawLeaderboard.length < 1) return message.reply("Nobody's in leaderboard yet.");

        const leaderboard = await Levels.computeLeaderboard(bot, rawLeaderboard, true); 

        const lb = leaderboard.map(e => `${e.position}. ${e.username}#${e.discriminator}\nLevel: ${e.level}`); 

        const embed =  new Discord.MessageEmbed()
        .setColor("GREEN")
        .setTitle("XP SISTEM")
        .setDescription(lb.join("\n\n"))

        message.channel.send(embed);
    }
}
