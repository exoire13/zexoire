module.exports = {
    name: "loop",
    description: "loops the current song from the playlist",
    usage: ">loop <0/1/2>",
    category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function - `loop`");

       let mode = client.player.setRepeatMode(message, parseInt(args[0]));
        mode = mode ? mode == 2 ? "Repeat queue" : "Repeat song" : "Off";
        message.channel.send("`to turn it off set the mode to 0` - Set repeat mode to `" + mode + "`");



    }
}