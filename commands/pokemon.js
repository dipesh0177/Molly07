const { MessageEmbed } = require("discord.js");
const { Spawn } = require("pokecord");

module.exports = {
  name: "pokemon",
  category: "games",
  description: "Guess the pokemon!",
  usage: ",pokemon",
  execute: async (client, message, args) => {

    const pokemon = await Spawn().catch(e => {});
    if (!pokemon) return message.channel.send("SORRY! But it feels like something went wrong!");
    const filter = m => m.author.id === message.author.id;

    const embed = new MessageEmbed()
        .setAuthor("Guess The Pokémon")
        .setColor("#E15D44")
        .setImage(pokemon.imageURL)
        .setFooter("©️ MOLLY")
    console.log(`${message.author.username} from ${message.guild.name} wants to guess ${pokemon.name}`)
    await message.channel.send(embed);

    message.channel.awaitMessages(filter, {
        max: 1,
        error: ["time"],
        time: 10000
    })
    .then(collected => {
        const m = collected.first();
        if (!m.content || m.content.toLowerCase() !== pokemon.name.toLowerCase()) return message.channel.send(`❌ Incorrect guess! The answer was **${pokemon.name}**.`);
        return message.channel.send(`✅ **CORRECT ANSWER!**`);
    })
    .catch(() => {
        message.channel.send(`❌ You did not answer in time. The pokemon name is **${pokemon.name}**!`);
    });

}
};