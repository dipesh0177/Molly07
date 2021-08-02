const discord = require('discord.js')

module.exports = {
    name: "marry",
    description: "marry with any mentioned user",
    aliases: [],
    execute: async(client, message, args) => {

        let user = message.mentions.members.first()

        if(!user) return message.channel.send('Please mention a user to marry')
        if(user === message.author) return message.channel.send('Please mention someone and not yourself')

        const MarryEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Marry!')
        .setDescription(`You and ${user} are married now :heart:.`)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))

        message.channel.send(MarryEmbed)

    }}