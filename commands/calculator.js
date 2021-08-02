const { Calculator } = require('weky')
module.exports = {
    name: 'calculator',
    description: '',
    aliases: ["calculator"],
    usage: '',
    accessableby: "",

execute: async (client, message, args) => {

    await Calculator(message)
}}