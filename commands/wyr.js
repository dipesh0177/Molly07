const { WouldYouRather } = require('weky')

module.exports = {
        name: 'wyr',
        aliases: ['wouldyourather'],
        description: 'Would you Rather? Hmm..',

    execute: async (client, message, args) => {

        await WouldYouRather(message);
    }
}