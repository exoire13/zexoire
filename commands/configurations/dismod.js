const db = require("quick.db");
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "disablemodlogs",
  aliases: ["dms"],
  category: "configs",
  description: "Disables the server auto role",
  usage: "[role name ]",

  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**You Do Not Have The Required Permissions! - MANAGE_GUILD**"
      );

    try {
      let role = db.fetch(`modlog_${message.guild.id}`);

      if (!role) {
        return message.channel.send(
          "**There Is Channel To Disable**"
        );
      } else {
        let channel = message.guild.channels.cache.get(a);
        bot.guilds.cache
          .get(message.guild.id)
          .channels.cache.get(channel.id)
          .send("**Mod Logs Disabled!**");
        db.delete(`modlog_${message.guild.id}`);

        message.channel.send(
          `**Mod Logs Has Been Successfully Disabled**`
        );
      }
      return;
    } catch {
      return message.channel.send(
        "**Error - `Missing Permissions or Channel Doesnt exist`**"
      );
    }
  },
};