module.exports = {
    name: "coinflip",
    description: "Flips a coin!",
    execute: async(client, message, args, Discord) => {
        const choices= ["heads", "tails"];
        const choice = choices[Math.floor(Math.random() * choices.length)];
        let embed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Coinflip!")
        .setDescription(`You just flipped a coin and get **${choice}**!`)
        .setThumbnail(message.author.displayAvatarURL({dynamic: true}))
        message.channel.send(embed)
    }
}