module.exports = {
    name: 'rules',
    description: "Embeds!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#1aebd9')
        .setTitle('Rules')
        .setURL('https://discord.gg/UA9jMfeVVG')
        .setDescription('**This is our server rules**')
        .addFields(
            {name: 'Rule 1', value: '1. Dont break discord terms of Service and Discord guidelines in any channel. '},
            {name: 'Rule 2', value: '2. Respect each and every member in our server. '},
            {name: 'Rule 3', value: '3. Dont abuse any discord member , moderator and our bot. This may result in ban from our server. '},
            {name: 'Rule 4', value: '4. English is the primary language of this server. Use other language in their respective channel.'},
            {name: 'Rule 5', value: '5. Do not discuss, exploit or share vulnerabilities / bugs that can be used to exploit / abuse functionality of Molly.'},
            {name: 'Rule 6', value: '6. Do not beg about any in-game item or money in any chat or dm.'},
            {name: 'Rule 7', value: '7. Do not antagonize or encourage users to violate the rules , or purposefully try to get a specific user punished.'}
        )
        .setImage('https://images4.alphacoders.com/969/thumb-1920-969352.jpg')
        .setFooter('Make sure to check out the rules channel');
    
        message.channel.send(newEmbed);
    }


} 