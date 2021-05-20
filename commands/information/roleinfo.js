const Discord = require('discord.js');
const moment = require('moment');

module.exports = {
    name: "roleinfo",
    aliases: ["role"],


 run: async(client, message, args) => {

        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);

        if(!role)
        return message.reply(`Please provide a role!! Example: \`>Roleinfo [Role id or mention]\``)
const pos = (message.guild.roles.cache.size - role.position)
        const embed = new Discord.MessageEmbed()
        
        .setTitle(`Role Info For ${role.name}`)
        .addField('Name', role, true)
        .addField('ID', `\`${role.id}\``, true)
        .addField('Color', `\`${role.hexColor.toUpperCase()}\``, true)
        .addField('Users Having The Role', `\`${role.members.size}\` Users`, true)
        .addField('Position', `\`${pos}\``, true)
        .addField('Creation On', `\`${moment(role.createdAt).format('DD/MMM/YYYY')}\``, true)
        .setColor("ORANGE")

        message.channel.send(embed)

        
    }
}
