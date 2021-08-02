module.exports = {
    name: "purge",
    aliases: ["clean"],
    description: "Deletes an amount of messages in a channel!",
    authorPermission: "MANAGE_MESSAGES",
    execute: async(client, message, args) => {
        const amount = args[0]
        if(!amount) return message.reply("Please give a number to delete!")
        if(isNaN(amount)) return message.reply("This has to be a number!")
        if(parseInt(amount) >99) return message.reply("You can only delete a maximum of 99 messages at a time!")
        await message.channel.bulkDelete(parseInt (amount)+1)
        message.channel.send(`**Deleted ${amount} messages!**`)
        .then(m => m.delete({timeout: 5000}))
    }
}