const { MessageEmbed } = require("discord.js");
const Random = require("srod-v2");

module.exports = {
  name: "joke",
  category: "fun",
  noalias: [""],
  description: "Sending random joke",
  usage: "[text]",
  execute: async (client, message, args) => {
    let Joke = await Random.GetJoke("BLUE");
    message.channel.send(Joke);
  },
};