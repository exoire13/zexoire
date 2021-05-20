const db = require('quick.db')

module.exports = {
  name: "afk",

  run: async (client, message, args) => {
     {
      message.channel.send(`I have set you as AFK`)
  message.member.setNickname(`[AFK] ${message.author.username}`)

db.set(message.author.id + '.afk','true')
db.set(message.author.id + '.messageafk', message.content.split(' ').slice(2))

    }
  }
}