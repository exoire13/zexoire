const Discord = module.require("discord.js");

module.exports = {
   name: "lock",
   description: "Locks a Channel",
   usage: "lock <channel>",
  args: true,
 category: "moderation",
   run: async(client, message, args) => {
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
   const embed = new Discord.MessageEmbed()
   .setTitle("Locked Channel")
   .setDescription(`🔒 ${message.channel} has been Locked`)
   .setColor("RED");
   await message.channel.send(embed);
   message.delete();
}
}