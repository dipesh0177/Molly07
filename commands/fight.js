const Discord = require("discord.js")
const { Snake }  = require("weky")

module.exports = {
        name: 'fight',
        description: '',
        aliases: ["fight"],
        usage: '',
        accessableby: "",

    execute: async (client, message, args) => {
        const oppenent = message.mentions.users.first();
if (!oppenent) return message.channel.send(`Please mention who you want to fight`);
const { fight } = require('weky')
const x = new fight({
    client: client,
    message: message,
    acceptMessage: 'Click to fight with <@' + message.author + '>', //message sent to see if opponent accepts
    challenger: message.author, //NOT CHANGEABLE
    opponent: message.mentions.users.first(),  //NOT CHANGEABLE
    hitButtonText: 'HIT', //Hit button text (Custom)
    hitButtonColor: 'red', //Hit button color (Custom)
    healButtonText: 'HEAL', //Heal button text (Custom)
    healButtonColor:  'green', //Heal button color (Custom)
    cancelButtonText: 'CANCEL', //Cancel button text (Custom)
    cancelButtonColor: 'blurple', //Cancel button color (Custom)
})
x.start()

    }}