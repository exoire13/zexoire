const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "mute",
  aliases: ["mutes", "muted"],
  category: "moderation",
  description: "mute someone if you have perms",
  usage: "mute <@user> <reason>",
  run: async (client, message, args) => {

    
    if (!message.member.hasPermission('MANAGE_MESSAGES')) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission('MANAGE_ROLES')) {
      return message.channel.send("I cannot mute them because there role is higher than mine");
    }
    

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("\```please mention the members for mute\```");
    }
    if (user.id === message.author.id) {
      return message.channel.send("I can't mute you because you are message author");
    }
    let reason = args.slice(1).join("");


    const vrole = user.roles.cache

    let muterole = message.guild.roles.cache.find(x => x.name === "Muted");

    if (!muterole) {
      return message.channel.send("Please make a role name \`Muted\`");
    }
  
    await user.roles.add(muterole);

    await message.channel.send(
      `you muted ${message.mentions.users.first().username} for ${reason}`
    );

    user.send(`You got muted in ${message.guild} for ${reason}`)

            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;
            const embed = new MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**User muted**", `${
          message.mentions.users.first().username
        }`)
            .addField("**Moderator**", `<@${message.author.id}>`)
            .addField("**Reason**", `${
          reason
        }`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
  }
};
