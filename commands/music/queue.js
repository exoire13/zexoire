const { MessageEmbed } = require("discord.js")
module.exports = {
  name: "queue",
  aliases: ["q"],
  usage: " ",
  category:"music (will add more :))",
  description: "you can check the queue",

  async run (client, message, args) {

    if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function `queue`")

  let queue = client.player.getQueue(message);
      const embed = new MessageEmbed()
      
      .setTitle("Current Play Queue")
      .setColor("GREEN")
        .setDescription(''+ queue.songs.map((song, id) =>
            `**${id+1}**. | \`${song.name}\` | \`${song.url}\` - \`${song.formattedDuration}\`\n`));
        message.channel.send(embed)

  }
}