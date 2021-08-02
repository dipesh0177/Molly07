const Math = require('mathjs');

module.exports = {
    name: 'punch',
    description: "Punch anyone",
    async execute(message, args, Discord){
        images = [
            "https://media.tenor.co/videos/032f9a76b34930aa8358e325b5463989/mp4",
            "https://images-ext-1.discordapp.net/external/S7GdRvEeqiIYglPTKKxlL3O0HY1e0sZseyctkid6JAI/%3Fitemid%3D4902917/https/media1.tenor.com/images/df8af24e5756ecf4a4e8af0c9ea6499b/tenor.gif",
            "https://images-ext-1.discordapp.net/external/tMSxh-T4s5pUGkckyEbsKs-TRALPvsWRSKq6i3sBZP4/%3Fitemid%3D3597337/https/media1.tenor.com/images/551f02f0fd4c4aee07365e7fced3a1b6/tenor.gif",
            "https://media.tenor.co/videos/f8af17fd951e5c457c9f8bc34a61ab04/mp4",
            "https://media.tenor.co/videos/b1320f16d8a455c687bca68436d70b66/mp4",
            "https://media1.tenor.com/images/965fabbfcdc09ee0eb4d697e25509f34/tenor.gif?itemid=7380310"
        ]

        personPunched = message.mentions.users.first()
        if (personPunched){
        let punchembed = new Discord.MessageEmbed()
            .setColor('#76F20D')
            .setTitle(`You have succesfully punched ${personPunched.username} :punch:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(punchembed)
    }
    else{
        message.channel.send('**That person is not in this server**')
    }
    }
}