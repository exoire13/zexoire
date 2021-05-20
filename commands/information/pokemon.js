const phin = require('phin')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: 'pokemon',
run: async(client, message, args) => {

const pokemon = args.join(' ')
if(!pokemon) return message.channel.send('Give pokie name!')

const data = await phin({ 
url: `https://some-random-api.ml/pokedex?pokemon=${pokemon}`,
parse: 'json',
method: 'get'
})

.then(res => {
let img = res.body.sprites.normal
if(img === null) img = res.body.sprites.normal
    
let family = res.body.family.evolutionLine.join(', ')
if(!family) family = 'None'

const embed = new MessageEmbed()
.setAuthor(res.body.name.toUpperCase())
.setThumbnail(img)
.setDescription(res.body.description)
.addField('**Basic Information**', `ID: ${res.body.id}\nType: ${res.body.type.join(', ')}\nSpecies: ${res.body.species.join(', ')}\nHeight: ${res.body.height}\nWeight: ${res.body.weight}\nGender: ${res.body.gender.join(', ')}\nEgg Groups: ${res.body.egg_groups.join(', ')}`)

.addField('**Family**', `Evolution Stage: ${res.body.family.evolutionStage}\nEvolution Types: ${family}`)

.addField('**Stats**', `HP: ${res.body.stats.hp}\nDefence: ${res.body.stats.defense}\nSpeed: ${res.body.stats.speed}\nTotal: ${res.body.stats.total}`)
.setFooter(message.author.tag, message.author.displayAvatarURL({dynamic:true}))
.setColor('BLUE')
message.channel.send(embed)
})
}}
