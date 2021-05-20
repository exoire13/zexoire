const { MessageEmbed } = require("discord.js");
const db = require("quick.db");

module.exports = {
  name: "report",
  category: "info",
  usage: "report <@mention> <reason>",
  description: "report anyone who doesnt follow rules",
  run: async (client, message, args) => {

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send(
        "Please Mention the person to who you want to report - report @mention <reason>"
      );
    }

    if (message.author.id === user.id) {
      return message.channel.send("You can not report yourself");
    }

    if (user.id === message.guild.owner.id) {
      return message.channel.send(
        "you cant report the owner tho "
      );
    }

    const reason = args.slice(1).join(" ");

    if (!reason) {
      return message.channel.send(
        "Please provide reason to report - report @mention <reason>"
      );
    }

   await message.channel.send(`Thanks you for helping stop the bandit`);
      
      message.delete

                  let channel = db.fetch(`report_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Reports`, message.guild.iconURL())
            .addField("**User Reported**", `${
          message.mentions.users.first().username
        }`)
            .addField("**Reported By**", `<@${message.author.id}>`)
            .addField("**Reason**", `${
          reason
        }`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
     }
   }