const { MessageEmbed } = require("discord.js");
const ButtonPages = require('discord-button-pages');

module.exports = {
    name: "button-pages",
    /**
     * @param {Client} client
     * @param {Message} message
     * @param {String[]} args
     */
    execute: async (client, message, args) => {
        const embed1 = new MessageEmbed()
            .setTitle(`Number 1`);

        const embed2 = new MessageEmbed()
            .setTitle(`Number 2`);

        const embed3 = new MessageEmbed()
            .setTitle(`Number 3`);

        const embed4 = new MessageEmbed()
            .setTitle(`Number 4`);

        const embed5 = new MessageEmbed()
            .setTitle(`Number 5`);

        const embedPages = [
            embed1,
            embed2,
            embed3,
            embed4,
            embed5
        ]
        ButtonPages.createPages(client, message, embedPages, 60 * 1000, "green", "👉", "👈", "❌");

    }
}