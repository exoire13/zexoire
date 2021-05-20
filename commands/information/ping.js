const discord = require("discord.js");

module.exports = {
  name: "ping",
  category: "info",
  description: "Returns the current ping",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setDescription(`Pong - ${client.ws.ping}ms`)
    .setColor("RANDOM")
    .setFooter(`Requested by ${message.author.username}`)
    
    message.channel.send(embed)
  }
}