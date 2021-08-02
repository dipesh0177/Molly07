module.exports = {
    name: 'info',
    description: "Information about us!",
    execute(message, args, Discord) {
        const newEmbed = new Discord.MessageEmbed()
        .setColor('#6CF411')
        .setTitle('')
        .setURL('https://discord.gg/xqYUZcfKSK')
        .setDescription('**INFORMATION ABOUT US.**')
        .addFields(
            {name: 'Owner', value: 'DIPESH#0007'},
            {name: 'Description', value: 'A discord bot which is specially made for friends group, a whole community , gaming groups etc. , Add this discord bot to your server now and have fun.'},
            {name: 'About us', value: 'We have created Molly bot so, that it will be easy to manage your server with a single bot. Because you all know that kick , ban , mute , economy , ticket , reaction roles , etc.. commands will probably not be in only a single bot. But, we are trying to provid this all commands and many more commands in just a single bot.'},
            {name: 'Our aim', value: 'Our aim is to provide you and everybody more better facilities with Molly bot'},
            {name: 'Support server - ', value: 'https://discord.gg/xqYUZcfKSK Join our support server for any help.'},
        )
        .setImage('https://media.tenor.com/images/993e52b01a633f9c44868340d92243fe/tenor.gif')
        .setFooter('Thanks for executing this command.');
    
        message.channel.send(newEmbed);
    }


}