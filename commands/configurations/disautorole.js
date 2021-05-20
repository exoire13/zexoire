const db = require("quick.db");
const { Client, Message, MessageEmbed } = require("discord.js");

module.exports = {
  name: "disableautorole",
  aliases: ["dar"],
  category: "configs",
  description: "Disables the server auto role",
  usage: "[role name ]",

  run: async (bot, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD"))
      return message.channel.send(
        "**You Do Not Have The Required Permissions! - MANAGE_GUILD**"
      );

    try {
      let role = db.fetch(`autorole-${message.guild.id}`);

      if (!role) {
        return message.channel.send(
          "**There Is No role to Disable!**"
        );
      }
      db.delete(`autorole-${message.guild.id}`);

        message.channel.send(
          `**Auto Role Has Been Successfully Disabled**`
        );
      } catch {
      return message.channel.send(
        "**Error - `Missing Permissions or Role Doesnt exist`**")
    }
    },
};