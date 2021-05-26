module.exports = {
    name: "clear",
    description: "Clears messages",

    async run (client, message, args) {
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.channel.send(':no_entry_sign: Nemate permisiju za koristenje komande!');
        const member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
        const amount = args.join(" ");

        if(!amount) return message.reply(':x:`Napisite validan broj!`')

        if(amount > 1000) return message.reply(`:x:Ne mozete obrisati vise od 1000 poruka!`)

        if(amount < 1) return message.reply(`Obrisite 1 ili vise poruka!`)

        await message.channel.messages.fetch({limit: amount}).then(messages => {
            message.channel.bulkDelete(messages
    )});


    message.channel.send(`Uspesno obrisane: \`${amount}\` poruke!`)
    message.delete()

    }
}