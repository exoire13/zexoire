const db = require('quick.db');

module.exports = {
    name: "setprefix",
    usage: "setprefix <new prefix>",
    category: "configs",
    aliases: ["prefix"],
    description: "Set a server's prefix",

    async run (client, message, args) {

          if(!message.member.hasPermission("MANAGE_GUILD")) return message.reply(`You don't have enough powers to set the prefix`)

        if(!args[0]) return message.channel.send('Please provide a new prefix');

        if(args[1]) return message.channel.send('The prefix can\'t have two spaces');

        db.set(`prefix_${message.guild.id}`, args[0])

        message.channel.send(`Succesffully set new prefix to **${args[0]}**`)
    }
}