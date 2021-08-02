const Math = require('mathjs');

module.exports = {
    name: 'hug',
    description: "Hug your friend",
    async execute(message, args, Discord){
        images = [
            "https://i.gifer.com/2QEa.gif",
            "https://i.imgur.com/nrdYNtL.gif",
            "https://thumbs.gfycat.com/BlueDecimalAardwolf-max-1mb.gif",
            "https://media.tenor.com/images/778282e02d511fbc061e1439a5105c6f/tenor.gif",
            "https://acegif.com/wp-content/gif/anime-hug-38.gif"
        ]

        personHugged = message.mentions.users.first()
        if (personHugged){
        let hugembed = new Discord.MessageEmbed()
            .setColor('#76F20D')
            .setTitle(`You have succesfully hugged ${personHugged.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(hugembed)
    }
    else{
        message.channel.send('**That person is not in this server**')
    }
    }
}