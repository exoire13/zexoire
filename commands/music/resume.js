module.exports = {
    name: "resume",
    description: "resumes te paused song from the current song from the playlist",
    usage: " ",
    category: "music (will add more :))",

    async run  (client, message, args) {
        if(!message.member.voice.channel) return message.channel.send("please join a voice channel to function  - `resume`");

       client.player.resume(message);
        message.channel.send("Lets go we back on");

    }
}