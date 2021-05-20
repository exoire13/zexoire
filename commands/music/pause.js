module.exports = {
    name: "pause",
    description: "pauses the current song from the playlist",
    usage: " ",
    category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function - `pause`");

       client.player.pause(message);
        message.channel.send("Queue has been put on pause");

    }
}