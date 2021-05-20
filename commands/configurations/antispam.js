const db = require("quick.db")

module.exports = {
  name: "anti-spam",
  description: "turn anti spam on or off",

  run: async (client, message, args) => {
     if (!message.member.hasPermission("MANAGE_GUILD")) return message.channel.send(":x: - your do not have the **MANAGE_GUILD** permission")

    if(args[0] === "on") {
      await db.set(`antispam-${message.guild.id}`, true)
      message.channel.send("antispam event is now - enabled")
    } else if(args[0] === "off") {
      await db.delete(`antispam-${message.guild.id}`)
      message.channel.send("antispam event is now - disabled")
    }
  }
}