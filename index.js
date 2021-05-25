const { default_prefix } = require('./config.json')
const { Collection } = require('discord.js')
const mongoose = require('mongoose')

mongoose.connect("mongo uri", {
   useUnifiedTopology: true,
   useNewUrlParser: true,
 }).then(console.log('connected to zexoire mongo'))
const fetch = require("node-fetch");
const db = require("quick.db");
const moment = require("moment");
const Schema = require('./models/reaction-roles.js');
const { emotes , emoji} =require("./config.json")
const discord = require('discord.js')


const client = new discord.Client({
  disableEveryone: true
});

const distube = require('distube');


//bot lists server count
const { connectBdlBot } = require('bdl.js');

const player = new distube(client);

client.queue = new Map();
client.vote = new Map();


client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
  });
  
client.on("message", async message => {

  let CustomPrefix = await db.fetch(`prefix_${message.guild.id}`);
  if (!CustomPrefix) CustomPrefix = `your prefix`;


  if (message.author.bot || !message.guild || message.webhookID) return;
  
  if (!message.content.startsWith(CustomPrefix)) return;

  let args = message.content.slice(CustomPrefix.length).trim().split(/ +/g);
  let cmd = args.shift().toLowerCase();

  let command = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd));



  

  if (command) {
    command.run(client, message, args);
  };
});





client.on("guildMemberAdd", async member => {

  let chx = db.get(`welchannel_${member.guild.id}`);

  if (chx === null) {

    return;

  }
 let data = await canva.welcome(member, { link: "welcome.jpg",blur: false }) 
   const attachment = new discord.MessageAttachment(

      data,

      "welcome.jpg"

    );
 client.channels.cache.get(chx).send("Welcome to our Server " + member.user.username, attachment);
     if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`I dont have any permission to talk in that channel`)

});

//auto role
client.on('guildMemberAdd', async (member) => {

  const check = await db.has(`autorole-${member.guild.id}`);
  if(check === true) {
        member.roles.add(await db.get(`autorole-${member.guild.id}`))
  }
})


client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
 
 const { GiveawaysManager } = require('discord-giveaways');

client.giveawaysManager = new GiveawaysManager(client, {
    storage: "./giveaways.json",
    updateCountdownEvery: 5000,
    default: {
        botsCanWin: false,
        exemptPermissions: ["MANAGE_MESSAGES", "ADMINISTRATOR"],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});

//music events
player.on('playSong', (message, queue, song) => {
  const play = new discord.MessageEmbed()
  .setTitle("Music Playing")
  .setColor("GREEN")
  .setDescription(`**Music Name**\n${song.name}\n**Time**\n${song.formattedDuration}\n**Volume**\n${queue.volume}/100 percent`) 
    message.channel.send(play)
})

const status = (queue) => `Volume: \`${queue.volume}%\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Server Queue" : "This Song" : "Off"}\` | Autoplay: \`${queue.autoplay ? "On" : "Off"}\``;
player.on("addSong", (message, queue, song) => message.channel.send(
    `Added \`${song.name}\` - \`${song.formattedDuration}\` to the queue by ${song.user}`
));


player.on("empty", message => message.channel.send("Channel status is currently `EMPTY` leaving now"))



client.player = player;




client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`prefix_${message.guild.id}`)
  if(prefix === null) prefix = default_prefix;
  
  if(!message.content.bot) return;
  if(!message.content.startsWith(prefix)) return;
 
})
//logs

client.on("channelDelete", function(channel){
    const mod = db.fetch(`modlog_${channel.guild.id}`)
if (!mod) return;

const embed = new discord.MessageEmbed()   
         .setColor("RED")
         .setTitle("Channel DELETED")
         .setDescription(`Channel NAME: \`${channel.name}\`\nChannel ID: \`${channel.id}\`\nChannel TYPE: \`${channel.type}\``
       )

       var sChannel = channel.guild.channels.cache.get(mod)
  if (!sChannel) return;
   sChannel.send(embed)
     })
         
    client.on("channelPinsUpdate", function(channel, time){
       
        const yeet = db.fetch(`modlog_${channel.guild.id}`)
       if (!yeet) return;


        const embed = new discord.MessageEmbed() 
         .setColor("YELLOW")
         .setTitle("Channel PINS UPDATE")
         .setDescription(`Channel NAME: \`${channel.name}\`\nChannel ID: \`${channel.id}\`\nPinned at \`${time}\``)
       
 var sChannel = channel.guild.channels.cache.get(yeet)
  if (!sChannel) return;
   sChannel.send(embed)
     })


client.on("messageDelete" , async message => {
const channel = db.fetch(`modlog_${message.guild.id}`)
if (!channel) return;

 const embed = new discord.MessageEmbed()
 .setTitle("Message Deleted |" + message.author.tag)
 .addField("Contains" ,  message)
 .addField("Deleted From" ,  message.channel)
 .setColor(`GREEN`)
 
 var sChannel = message.guild.channels.cache.get(channel)
  if (!sChannel) return;
   sChannel.send(embed)
})
client.on('guildCreate', guild => {
   const channel = guild.channels.cache.find(channel => channel.type === 'text' && channel.permissionsFor(guild.me).has('SEND_MESSAGES'))
   const embed = new discord.MessageEmbed()
   .setTitle(`I am Zexoire`)
   .addField('				**➣ My owner:**', `xxxxx#0294`, true)
   .addField('				**➣ My prefix:**', `>`, true)
   .addField('				**➣ My Support server:**', `https://discord.gg/Uh7R6tVa`, true)
   .setColor("GREEN")
   channel.send(embed)
})
client.on('guildCreate', guild => {
   console.log(`I just joined ${guild.name}`)
})
client.on('guildDelete', guild => {
   console.log(`I got kicked out of ${guild.name}`)
})
//role logs
client.on('roleCreate', async  role  => {
   // Get server settings
const moo = db.fetch(`modlog_${role.guild.id}`)
if (!moo) return;
  const embed = new discord.MessageEmbed()
           .setDescription(`
     **Role: ${role} (${role.name}) was created**`)
           .setColor("GREEN")
           .setFooter(`ID: ${role.id}`)
           .setTimestamp();
       // send message
 var sChannel = role.guild.channels.cache.get(moo)
  if (!sChannel) return;
   sChannel.send(embed)
   })
 client.on('roleDelete', async role  => {
   // Get server settings
const cool = db.fetch(`modlog_${role.guild.id}`)
if (!cool) return;
  const embed = new discord.MessageEmbed()
           .setDescription(`
     Role: (**${role.name}**) was deleted`)
           .setColor("GREEN")
           .setFooter(`ID: ${role.id}`)
           .setTimestamp();
       // send message
 var sChannel = role.guild.channels.cache.get(cool)
  if (!sChannel) return;
   sChannel.send(embed)
   })
 //others
client.on('messageUpdate', (oldMessage, newMessage) => {
   if(newMessage.author.id === client.user.id) return;
   logMessageEdit(oldMessage, newMessage);
});

function logMessageEdit(oldMessage, newMessage) {

   const update = db.fetch(`modlog_${oldMessage.guild.id}`)
if (!update) return;

   let embed = new discord.MessageEmbed()
       .setAuthor(newMessage.author.tag, newMessage.author.avatarURL)
       .setDescription(`message UPDATED | ${oldMessage.channel}.`)
       .addField("Before", " " + oldMessage.content)
       .addField("After", " " + newMessage.content)
       .setTimestamp()
       .setColor("GREEN");

 var sChannel = oldMessage.guild.channels.cache.get(update)
  if (!sChannel) return;
   sChannel.send(embed)

}
//credits to xxxxx



client.on("ready", () => {
  console.log("logged into zexoire")
})

//anti spam
const usersMap = new Map();
const LIMIT = 5;
const TIME = 7000;
const DIFF = 3000;

client.on('message', async(message) => {
    if(db.has(`antispam-${message.guild.id}`)=== false) return;
    if(message.author.bot) return;
    if(usersMap.has(message.author.id)) {
        const userData = usersMap.get(message.author.id);
        const { lastMessage, timer } = userData;
        const difference = message.createdTimestamp - lastMessage.createdTimestamp;
        let msgCount = userData.msgCount;
        console.log(difference);

        if(difference > DIFF) {
            clearTimeout(timer);
            console.log('Cleared Timeout');
            userData.msgCount = 1;
            userData.lastMessage = message;
            userData.timer = setTimeout(() => {
                usersMap.delete(message.author.id);
                console.log('Removed from map.')
            }, TIME);
            usersMap.set(message.author.id, userData)
        }
        else {
            ++msgCount;
            if(parseInt(msgCount) === LIMIT) {
                let muterole = message.guild.roles.cache.find(role => role.name === 'Muted');
                if(!muterole) {
                    try{
                        muterole = await message.guild.roles.create({
                            name : "Muted",
                            permissions: []
                        })
                        message.guild.channels.cache.forEach(async (channel, id) => {
                            await channel.createOverwrite(muterole, {
                                SEND_MESSAGES: false,
                                ADD_REACTIONS : false
                            })
                        })
                    }catch (e) {
                        console.log(e)
                    }
                }
                message.member.roles.add(muterole);
                message.channel.send('You have been muted for spamming');
                setTimeout(() => {
                    message.member.roles.remove(muterole);
                    message.channel.send('You have been unmuted. Be awary next time')
                }, TIME);
            } else {
                userData.msgCount = msgCount;
                usersMap.set(message.author.id, userData);
            }
        }
    }
    else {
        let fn = setTimeout(() => {
            usersMap.delete(message.author.id);
            console.log('Removed from map.')
        }, TIME);
        usersMap.set(message.author.id, {
            msgCount: 1,
            lastMessage : message,
            timer : fn
        });
    }
})


//reaction roles

client.on('messageReactionAdd', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({ Message: reaction.message.id }, async(err, data) => {
        if(!data) return;
        if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return;

        const [ roleid ] = data.Roles[reaction.emoji.name];
        reaction.message.guild.members.cache.get(user.id).roles.add(roleid)
    });
});

client.on('messageReactionRemove', async(reaction, user) => {
    if(reaction.message.partial) await reaction.message.fetch();
    if(reaction.partial) await reaction.fetch();
    if(user.bot) return;

    Schema.findOne({ Message: reaction.message.id }, async(err, data) => {
        if(!data) return;
        if(!Object.keys(data.Roles).includes(reaction.emoji.name)) return;

        const [ roleid ] = data.Roles[reaction.emoji.name];
        reaction.message.guild.members.cache.get(user.id).roles.remove(roleid)
    });
});

//afk
client.on('message', message => {
  if(message.author.bot) return;
    if(!message.guild) return;        
       if (!message.member) message.member = message.guild.fetchMember(message);
  
if(db.has(message.author.id + '.afk')){
message.channel.send(`Welcome back ${message.author} I removed your AFK.`)
  message.member.setNickname(`${message.author.username}`)
db.delete(message.author.id + '.afk')
db.delete(message.author.id + '.messageafk')
}
});

//afk mention
client.on('message', message =>{
message.mentions.users.forEach(user =>{
  if (message.author.bot) return false;

    if (message.content.includes("@here") || message.content.includes("@everyone")) return false;
if(db.has(user.id + '.afk')) message.channel.send(`${message.author}, the user you mentioned is currently AFK`)
})
})



client.on("message", async message => {
if (message.content === `<@${client.user.id}>` || message.content === `<@!${client.user.id}>`) {

const embed = new MessageEmbed()
        .setTitle('Hi, I\'m Zexoire') 
        
        .setDescription(`
        You can invite me 
         [here](https://dsc.gg/zexoiremulti)
        
        Join our support Server
         [here](https://dsc.gg/zexoiresupport)
        
        My normal Prefix is \`${default_prefix}\`
        
      
        `)
        .setFooter('Join Support Server To Talk To Owner')
      .setColor("RED");
      message.channel.send(embed);


}
});


const { BlacklistedWords } = require('./Collection');

//blacklist 
client.on('message', async (message) => {
	if (!message.guild || message.author.id === client.user.id) return;

	const spliteedMsgs = message.content.split(' ');

	let deleting = false;
	await Promise.all(
		spliteedMsgs.map((content) => {
			if (BlacklistedWords.get(message.guild.id)?.includes(content.toLowerCase()))
				deleting = true;
		})
	);

	if (deleting) return message.delete();
});

client.login("sUp-ErSec_retTokEN");

connectBdlBot("bdl uri", client)
