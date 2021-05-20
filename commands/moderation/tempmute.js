const {Message, MessageEmbed}= require('discord.js')
const db = require('quick.db');
const ms = require('ms')

module.exports = {
    name : 'tempmute',
    category: 'moderation',
    aliases: ["tm", "tmute"],
    description: 'This will tempmute a user for a valid amount of time',

 /**
     * @param {Message} message
     */
    run : async(client, message, args) => {


      let reason = args.slice(2).join("");

        if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permissions to use this command')
          
    

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const time = args[1]
        if(!Member) return message.channel.send('Member is not found.')
        if(!time) return message.channel.send('Please specify a time.')
        
        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        if(!role) {
            try {
                message.channel.send('Muted role is not found, attempting to create muted role.')

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send('Muted role has sucessfully been created.')
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(`${Member.displayName} has already been muted.`)
        await Member.roles.add(role2)
        message.channel.send(`${Member.displayName} is now muted.`)

        setTimeout(async () => {
            await Member.roles.remove(role2)
            message.channel.send(`${Member.displayName} is now unmuted`)
        }, ms(time))


        let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
            .setColor('BLUE')
            .setTimestamp()   
            .setFooter(message.guild.name, message.guild.iconURL())
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**User Muted**", `${
          message.mentions.users.first().username
        }`)
            .addField("**Time**", `${time}`)
            .addField("**Moderator**", `<@${message.author.id}>`)
            .addField("**Reason**", `${reason}`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
    }
}
