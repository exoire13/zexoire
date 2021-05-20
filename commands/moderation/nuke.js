const Discord = require('discord.js');

module.exports = {
	name: 'nuke',
	description: 'nuke a channel',
	usage: 'nuke',
run: async (client, msg, args) => {
	if (!msg.member.hasPermission('MANAGE_CHANNELS')) return msg.channel.send('❌**Error:** You don\'t have the permission to do that! \n you require the `MANAGE CHANNELS` permission');

	const channel = msg.guild.channels.cache.get(msg.channel.id);
	const position = channel.position;

	const channel2 = await channel.clone();

	channel2.setPosition(position);
	channel.delete();
	const embed = new Discord.MessageEmbed()
		.setTitle('Channel Successfully Nuked!')
		.setDescription(`The channel was nuked by ${msg.author.username}`)
		.setImage('https://media1.tenor.com/images/b19fe8078c0ca25db66e20494d74fbee/tenor.gif?itemid=14282225')
		.setColor('RANDOM');
	channel2.send(embed);
}

};