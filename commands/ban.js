const Discord = require('discord.js')

module.exports = {
    name: "ban",
    description: "ban command",

    async run (bot, message, args) {
        if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("You cant use this command!")

        const mentionMember = message.mentions.members.first();
        let reason = args.slice(1).join(" "); //.ban <args(0) aka @member> | <args(1) aka reason>
        if (!reason) reason = "No reason given";

        const embed = new Discord.MessageEmbed()
        .setTitle(`Banovan si sa: **${message.guild.name}**`)
        .setDescription(`Razlog ${reason}`)
        .setColor("RANDOM")
        .setTimestamp()
        .setFooter(bot.user.tag, bot.user.displayAvatarURL())

        if (!args[0]) return message.channel.send("Morate da date membera kog zelite da banujete!");

        if(!mentionMember) return message.channel.send("Ovaj user nije na serveru ili niste stavili dobar mention!");

        if(!mentionMember.bannable) return message.channel.send("Ne mogu da banujem ovog korisnika!");

        await mentionMember.send(embed);
        await mentionMember.ban({
            reason: reason
        }).then(() => message.channel.send("Uspesno banovan: " + mentionMember.user.tag));
    }
}
