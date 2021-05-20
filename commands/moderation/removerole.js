const { MessageEmbed } = require('discord.js')
const db = require("quick.db");

module.exports = {
  name: "removerole",
  aliases: ["rmrole", "-role"],
  category: "moderation",
  description: "Remove role from any user",
  usage: ">rmrole <@user> <role>",
  run: async (client, message, args) => {
              if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("**You Dont Have The Permissions To Add Roles To Users! - [MANAGE_ROLES]**");
              
    let target = message.mentions.members.first();
    
    if(!target) return message.reply(`I am unable to find the user`)
    
    let rrole = message.mentions.roles.first();
    
    if(!rrole) return message.reply(`I am unable to find the role`)
    
    let ticon = target.user.avatarURL({ dynamic: true, size: 2048 });
    let aicon = message.author.avatarURL({ dynamic: true, size: 2048 });
    
      const embed = new MessageEmbed()
      .setAuthor(target.user.username, ticon)
             .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
      .setColor("RANDOM")
      .setDescription(`${rrole} role removed from ${target}`)
      .setFooter(`Role removed by ${message.author.username}`, aicon)
      .setTimestamp()
      
      await message.channel.send(embed)
      
      target.roles.remove(rrole)

  }
}