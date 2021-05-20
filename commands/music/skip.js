module.exports = {
    name: "skip",
    description: "Skips the queue",
        category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function - `skip`");

        client.player.skip(message);

        message.channel.send("I have skipped the music")
    }
}