// npm i genshin
const genshin = require('genshin');
// npm i discord.js
const Discord = require('discord.js');

module.exports = {
    name: 'genshin',
    description: 'Provides some information about genshin characters',
    guildOnly: true,
    group: 'search',
    credit: [
      {
       name: 'Genshin Impact',
       url: 'https://genshin.mihoyo.com/en',
       reason: 'Original "Genshin Impact" Game'
      }  
    ],
  clientPermissions: ['EMBED_LINKS'],
    details: 'Here are the available characters:\nAmber, Ayaka, Baizhu, Barbara, Beidou, Bennett, Childe, Chongyun, Cyno, Dainsleif, Diluc, Fischl, Ganyu, Jean, Kaeya, Keqing, Klee, Lisa, Mona, Ningguang, Noelle, Qiqi, Razor, Sucrose, Venti, Xiangling, Xiao, Xingqiu and Zhongli',
    examples: ['genshin xiao', 'genshin zhongli'],
    parameters: ['Genshin Character'],
    execute: async (client, message, args) => {
        try {
       let character = args[0];
        if(!character) return message.reply('Who is the genshin character you wish to search?')
        const gichar = await genshin.characters(character.toLowerCase())
        const giEmbed = new Discord.MessageEmbed()
        .setAuthor(`${gichar.name}`, 'https://cdn.discordapp.com/attachments/808693946255540265/811567825008721950/So91qs_eRRralMxUzt_tkj4aBXvVSYqWiEJrzrk_LBd5071mSMv_gBKslyulIOrPsiQ.png', gichar.url)
        .setDescription(gichar.description)
        .addField("CV", gichar.cv, true)
        .setImage(gichar.image)
        .addField("City", gichar.city, true)
        .addField("Weapon", gichar.weapon, true)
        .addField("Rating", gichar.rating, true)
        .setFooter(gichar.quote)
        .setColor(client.color);
            return message.channel.send(giEmbed)
        } catch(error) {
            return message.channel.send('Character not found...')
        }
    }
}