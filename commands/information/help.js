const discord = require("discord.js");

module.exports = {
  name: "help",
  description:
    "Get list of all command and even get to know every command detials",
  usage: "help <command>",
  category: "info",
  run: async (client, message, args) => {
        let embed = new discord.MessageEmbed()
    .setTitle(`Link to all things needed :)`)
    .setDescription(`
    **Support And Invite**
    [Invite Zexoire](https://discord.com/oauth2/authorize?client_id=836419347484246026&permissions=1543368151&scope=bot)
    [Support Server](https://discord.gg/PWJU6RC5mX)\n\n **Information**
    [Commands List](https://zexoire.heyexo.repl.co/commands)
    [Website](https://zexoire.heyexo.repl.co/)
    [Documents](https://zexoire.gitbook.io/zexoire/)**`)
    .setColor("RED")
    .setFooter(`It was made by Exoire is dead#4502`)
    .setTimestamp(message.timestamp = Date.now())
    
    client.users.cache.get(message.author.id).send(embed);


  } 
};
