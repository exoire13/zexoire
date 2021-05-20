const discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require("discord.js")

module.exports = {
  name: "ban",
  category: "moderation",
  description: "Ban anyone if you have perms",
  usage: "ban <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You don't have enough powers to ban someone`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`I can't ban them because I dont have permission`)
    
    if(!args[0]) return message.reply(`Please mention someone to ban`)
    
    if(!target) return message.reply(`I can't find that member`)
    
    
    if(target.id === message.author.id) return message.reply(`I can't ban you as you are the Boss`)
    
    if(target.bannable) {
message.channel.send(`Banned \`${target}\` for \`${reason || "No Reason Provided"}\``)
      
      
      target.ban()
      
      message.delete()

            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**User Banned**", `${
          message.mentions.users.first().username
        }`)
            .addField("**Moderator**", `<@${message.author.id}>`)
            .addField("**Reason**", `${
          reason
        }`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
      
    } else {
      return message.reply(`I can't ban them, make sure that my role is above of theirs`)
    }
    return undefined
  }
};