const Discord = require('discord.js');
const axios = require('axios') /// npm i axios

module.exports = {
    name: 'joke',
    description: 'Gives you a funny joke (maybe :/)',
    usage: 'joke',
    run: async (client, message, args) => {
        axios.get('https://official-joke-api.appspot.com/random_joke')
            .then(res => {

                const joke = res.data.setup;

                const answer = res.data.punchline;

                message.channel.send(new Discord.MessageEmbed()
                    .setTitle(`Here is a random joke`)
                    .setDescription(`${joke}\n\n\`${answer}\``)
                    .setColor('RANDOM')
                )
            })
    }
}