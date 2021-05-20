module.exports = {
    name: "play",
    description: "Play a song from YouTube",
    usage: "play <song>",
    category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("You need to join a voice channel to function - `>play`");

        let search = args.join(" ");

        if(!search) return message.channel.send('Please provide a search query. `Ex: >play <song name>`');

        client.player.play(message, search)
    }
}