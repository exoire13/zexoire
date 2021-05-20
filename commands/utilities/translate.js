const discord = require("discord.js")
const translate = require("@iamtraction/google-translate")

module.exports = {
    name: 'translate',
    aliases: [],
    category: 'Utensils',

    run: async (client, message, args) => {

        let language = args[0]
        if(!language){ return message.channel.send(":x: - Please enter a **language code**! Example `fr` / `de` / `en` etc")}

        const query = args.slice(1).join(" ")
        if(!query){ return message.channel.send(`:x: - Please enter a **text to translate**! Example: \`translate fr hello world\``)}

        const translated = await translate(query, { to: `${language}` })
        
        const translateEmbed = new discord.MessageEmbed()
        .setAuthor(message.author.tag)
        .addFields(
            { name: `Input`, value: `\`\`\`${query}\`\`\`` },
            { name: `Output`, value: `\`\`\`${translated.text}\`\`\``}
        )
        .setColor("RED")
        .setTimestamp()
        message.channel.send(translateEmbed)
    },
};