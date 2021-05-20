const { Client, Message, MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
    name: 'autorole',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    run: async(client, message, args) => {
        if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('You need \`MANAGE_GUILD\` permission to use this command!');
        const role = message.mentions.roles.first() || message.guild.roles.cache.get(args[0]);
        if(!role) return message.channel.send('Role is not valid!')

        await db.set(`autorole-${message.guild.id}`, role.id);
        message.reply(`\`${role.name}\` is the autorole!`)
    }
}