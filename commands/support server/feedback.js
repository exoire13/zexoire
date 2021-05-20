const Discord = require("discord.js");
module.exports = {
    name: 'feedback',
    aliases: ['feed-back'],
    category: 'Bot reports',
    utilisation: '{prefix}feedback [your report here]. Thanks for your valuable feedback',
run: async(bot, message, args) => {
let feedback = args.join(" ").slice(0);
let user = message.author.username;
let uid = message.author.id;
let guild = message.guild.name;
let gid = message.guild.id;
let channel = bot.channels.cache.get("844248809277489215")
let embed = new Discord.MessageEmbed()
.setTitle(`A new feedback`)
.addField("Feedback", feedback)
.addField("Feedback By", user)
.addField("Feedback User ID", uid)
.addField("Feedback Guild Name ", guild)
.addField("Feedback Guild ID", gid)
.setColor("YELLOW")
.setTimestamp()
.setFooter("New Feedback Found")

message.reply("**Thank you for giving us some feedback**")
channel.send(embed)


}
};