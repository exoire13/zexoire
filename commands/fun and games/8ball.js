const Discord = require('discord.js');// require discord

// bot answers 
const answers = [
    'Maybe.',
    'Certainly not.',
    'I hope so.',
    'Not in your wildest dreams.',
    'There is a good chance.',
    'Quite likely.',
    'I think so.',
    'I hope not.',
    'I hope so.',
    'Never!',
    'Forget about it.',
    'Ahaha! Really?!?',
    'Pfft.',
    'Sorry, bucko.',
    'Hell, yes.',
    'Hell to the no.',
    'The future is bleak.',
    'The future is uncertain.',
    'I would rather not say.',
    'Who cares?',
    'Possibly.',
    'Never, ever, ever.',
    'There is a small chance.',
    'Yes!'
]; 

// bot answers


// export module
module.exports = {
    name: "8ball",

    run: async (client, message, args) => {
//-----^ for new users please learn basic js
//-----^ if ur event msg.js is execute use execute else ()
        let yq = args.join(' ') 
// Member question
// if ends whit ? then
            const embed = new Discord.MessageEmbed()
// create embed
        .setAuthor(`🎱 ${message.author.username} Asks Me?`, message.author.displayAvatarURL({ dynamic: true }))
        .setDescription(`**Your question:** \n ${yq} \n**My Answer:** \n ${answers[Math.floor(Math.random() * answers.length)]}`)
// math the answers and get the answer
        .setColor("RANDOM");
//get a random color for embed
        message.channel.send(embed)
// send embed
    }
}