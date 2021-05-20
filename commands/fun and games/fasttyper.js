const koenie06games = require('koenie06-games')
const FastTyper = new koenie06games.FastTyper()

module.exports = {
    name: 'fast-typer',
    aliases: ['typer'],

    run: async(client, message, args) => {
        FastTyper.newGame(message)
    }
}