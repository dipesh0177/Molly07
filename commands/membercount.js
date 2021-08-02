const discord = require("discord.js");

module.exports = {
        name: "membercount",
        description: "Show members in the servers",
        usage: "z!membercount",
        aliases: ["membercount","mc"],

  execute: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setAuthor(
    `Member Count`)
    .setDescription(`${message.guild.memberCount}`)
    .setColor("RANDOM")
    .setTimestamp(message.timestamp = Date.now())
    
    
    message.channel.send(embed)
  }
}