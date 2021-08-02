const { Client, Message, MessageEmbed } = require('discord.js');
const { MessageButton, MessageActionRow } = require('discord-buttons');

module.exports = {
    name: 'meinfo',
    aliases: [''],
    category: ' ',
    memberpermissions: [],
    cooldown: 5,
    description: '',
    usage: '',
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: async (client, message, args, prefix) => {

        const invite = new MessageButton()
            .setStyle('url')
            .setEmoji("👍")
            .setLabel(`Invite Now`)
            .setURL('https://google.com')

        const Support = new MessageButton()
            .setStyle('url')
            .setEmoji("✨")
            .setLabel(`Join Now`)
            .setURL('https://discord.gg/8bbwVytzNp')



        const allbtn = new MessageActionRow()
            .addComponent(invite).addComponent(Support)

        let allbuttons = [allbtn];

        let embed = new MessageEmbed()
            .setColor("RANDOM")
            .setDescription(` > ${client.user.username} Is OP Bot \n > ** Thanks For Inviting me ** \n > ** By Clicking on Links You can Vote me and You can Join my server also You can Vote me.. **`)
            .setFooter(`Coded By Dipesh`)

        message.channel.send({
            content: `Click on The Buttons to Invite and Join Our Support Server`,
            embed: embed,
            components: allbuttons
        });
    }
}