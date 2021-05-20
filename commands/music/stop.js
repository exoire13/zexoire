module.exports = {
    name: "stop",
    description: "Stops the queue",
        category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function - `stop`");

        client.player.stop(message); 

        message.channel.send("I have `STOPPED` and left the VC")
    }
}