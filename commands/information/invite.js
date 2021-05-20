const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "Invite us !!",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Here is the invite link`)
    .setDescription(`**Invite Zexoire**\n[Click Me](https://discord.com/api/oauth2/authorize?client_id=836419347484246026&permissions=1409150198&scope=bot)\n**Support server**\n[Click Me](https://discord.gg/sjaMdtbUVN)\n**Website**\n[Click Me](https://zexoire.heyexo.repl.co)`)
    .setColor("RANDOM")
    .setFooter(`It was made by xxxxx`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}