const discord = require('discord.js')

module.exports = {
    name: "gayrate",
    description: "Checks the gayrate of a user",
    aliases: [],
    execute: async(client, message, args) => {

        let user = message.mentions.members.first()
        let RN = Math.floor(Math.random() * 100) + 1

        if(!user) return message.channel.send('Please mention a user to check gay rate')
        if(user === message.author) return message.channel.send('Please mention someone and not yourself')

        const GayrateEmbed = new discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Gay Rate Machine')
        .setDescription(`${user} is ${RN}% gay`)

        message.channel.send(GayrateEmbed)

    }}