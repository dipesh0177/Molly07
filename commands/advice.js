const api = require("srod-v2");
const Discord = require("discord.js");

module.exports = {
  name: "advice",
  aliases: [],
  category: "Fun",
  description: "Return A Random Advice!",
  usage: "Advice",
  execute: async (client, message, args) => {
    
    const Data = await api.GetAdvice({ Color: "YELLOW" });
    return message.channel.send(Data);
  }
};