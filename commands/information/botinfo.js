const db = require("quick.db");
const Discord = require ("discord.js")
const { version } = require('../../package.json');
const ms = require('pretty-ms');
const { version: discordjsVersion } = require('discord.js');
module.exports = {

  name: "botinfo",

  category: "info",
    aliases: ['binfo', 'botstats', 'stats', 'zexinfo'],
    description: 'Check\'s bot\'s status',
  run: async (client, message, args, del, member) => {
   message.delete();
      message.channel.send(new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setTitle(`Zexoire information`)
            .setThumbnail(client.user.displayAvatarURL({ dynamic: true }))
            .addField('				**➣ Uptime:**', `${ms(client.uptime)}`, true)
            .addField('				**➣ WebSocket Ping:**', `${client.ws.ping}ms`, true)
            .addField('				**➣ Guild Count:**', `${client.guilds.cache.size} guilds`, true)
            .addField(`				**➣ User Count:**`, `${client.users.cache.size} users`, true)
            .addField('				**➣ Commands:**', `${client.commands.size} cmds`,true)
            .addField('	**➣ Bot Owner:**', `xxxxx#0294`,true)
            .addField('	**➣ Bot Name:**', `${client.user.username}`,true)      
            .addField('	**➣ Bot ID:**', `836419347484246026`,true)                  
            .setTimestamp()
        );
    }
}
