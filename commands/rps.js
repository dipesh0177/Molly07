const { RPS } = require('rayzdev')
module.exports = {
    name: 'rps',
    description: '',
    aliases: ["rps"],
    usage: '',
    accessableby: "",

execute: async (client, message, args) => {

const opponent = message.mentions.users.first();
if(!opponent) return message.channel.send(`Please mention who you want to fight`);
const game = new RPS({
    message: message,
    opponent: opponent, // NOT CHANGEABLE
    challenger: message.author, // NOT CHANGEABLE
    acceptMessage: "Click to fight with <@" + message.author + '>', // message sent to see if opponent accepts
})
game.start() // start the game
}};