const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "volume",
  description: "change the volume ",
  usage: "volume <1/100>%",
  aliases: ['vol'],
  category: "music (will add more :))",

  async run (client, message, args) {
    if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function - `volume`");


    client.player.setVolume(message, args[0]);

    const embed = new MessageEmbed()
    .setTitle("Volume Change")
    .setColor("GREEN")
    .setDescription(`${message.author.tag} has set the volume to ${args[0]}`)
    .setTimestamp()
    message.channel.send(embed)

  }
}