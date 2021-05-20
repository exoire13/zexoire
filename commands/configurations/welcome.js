const Discord = require("discord.js")
const db = require("quick.db")

module.exports = {
  name: "setwelcome",
  category: "configs",
  usage: "setwelcome <#channel>",
  description: "Set the welcome channel",
  aliases: ["welcome"],
  run: (client, message, args) => {
     if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send("sorry you need permission to a");
    }
    let channel = message.mentions.channels.first()
    
    if(!channel) {
      return message.channel.send("Please Mention the channel first")
    }
    
    //Now we gonna use quick.db
    
    db.set(`welchannel_${message.guild.id}`, channel.id)
    
    message.channel.send(`Welcome Channel is setted as ${channel}`)
  }
}