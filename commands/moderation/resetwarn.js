const db = require("quick.db");

module.exports = {
  name: "resetwarns",
  aliases: ["rwarns", "rsetwarns"],
  category: "moderation",
  usage: "rwarns <@user>",
  description: "Reset warnings of mentioned person",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_GUILD")) {
      return message.channel.send(
        "You should have `manage_guild` to use this command"
      );
    }

    const user = message.mentions.members.first();

    if (!user) {
      return message.channel.send("Please mention the person whose warning you want to reset");
    }

    if (message.mentions.users.first().bot) {
      return message.channel.send("Bot are not allowed to have warnings");
    }

    if (message.author.id === user.id) {
      return message.channel.send("You are not allowed to reset your warnings");
    }

    let warnings = db.get(`warnings_${message.guild.id}_${user.id}`);

    if (warnings === null) {
      return message.channel.send(`${message.mentions.users.first().username} do not have any warnings`);
    }

    db.delete(`warnings_${message.guild.id}_${user.id}`);
    user.send(
      `all your warnings are reseted by ${message.author.username} from ${message.guild.name}`
    );
    await message.channel.send(
      `Reseted all warnings of ${message.mentions.users.first().username}`)

                        let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
            .setColor('RED')
            .setTimestamp()
            .setFooter(message.guild.name, message.guild.iconURL())
                         .setThumbnail(rMember.user.displayAvatarURL({ dynamic: true }))
            .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
            .addField("**User reseted warns**", `${
          message.mentions.users.first().username
        }`)
            .addField("**Moderator**", `<@${message.author.id}>`)
            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)

  }
};
