const { MessageEmbed } = require(`discord.js`);


module.exports = {
    name: `servers`,
    usage: `servers`,
            category: "owner",
    description: `Shows my servers.`,
    ownerOnly: true,

    execute: async (client, message, args) => {

        //Start

        let description =
          `Total Servers - ${client.guilds.cache.size}\n\n` +
          client.guilds.cache
            .sort((a, b) => b.memberCount - a.memberCount)
            .map(r => r)
            .map((r, i) => `**${i + 1}** - ${r.name} | ${r.memberCount} Members\nID - ${r.id}`)
            .slice(0, 100)
            .join("\n");

        return message.channel.send("```" + description + "```", { split: { char: '\n' } })

        //End

    }
};