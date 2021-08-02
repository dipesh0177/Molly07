const Math = require('mathjs');

module.exports = {
    name: 'kiss',
    description: "Kiss your friend",
    async execute(message, args, Discord){
        images = [
            "https://media1.tenor.com/images/d0cd64030f383d56e7edc54a484d4b8d/tenor.gif?itemid=17382422",
            "https://media.tenor.com/images/6702ca08b5375a74b6b9805382021f73/tenor.gif",
            "https://media1.tenor.com/images/58e8a1cc917ee23ccdeba0fd253a3ea3/tenor.gif?itemid=11792978",
            "https://media1.tenor.com/images/57e94f8aecfa6a7ee7e00b7ceb6d9df1/tenor.gif?itemid=18039109",
            "https://i.pinimg.com/originals/2b/52/71/2b5271e20fa65925e07d0338fa290135.gif"
        ]

        personKissed = message.mentions.users.first()
        if (personKissed){
        let kissembed = new Discord.MessageEmbed()
            .setColor('#F20D0D')
            .setTitle(`You have succesfully kissed ${personKissed.username} :heart:`)
            .setImage(images[Math. floor(Math. random()*images. length)])
            .setTimestamp()
        message.channel.send(kissembed)
    }
    else{
        message.channel.send('**That person is not in this server**')
    }
    }
}