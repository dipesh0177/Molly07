module.exports = {
    name: 'help',
    description: "help command!",
    execute: async(message, args, Discord) => {
        const newEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle('Molly Help Centre ')
        .setDescription('`\`\`\Prefix: , \n\`\`\`\n[Invite me](https://google.com/)\n\n \`\`\n\n__**Commands**__')
        .addFields(
            {name: ' 🛡️ | Moderator commands', value: ' `purge` `set-channel` `mute` `unmute` `poll` `say` `slowmode` `emojis` `message` `roles` `whois` `addemoji` `removeemoji` `renameemoji` `announce` `setnick` `setmodlogchannel` `disablemodlogchannel` `warn` `addrole` `removerole` `kick` `ban`'},
            {name: ' 🙂 | Normal commands', value: ' `avatar` `convert` `gayrate` `npm` `suggest` `tweet` `ship` `playstore` `ping` `pokemon` `serverinfo` `membercount` '},
            {name: ' 😍 | Anime commands', value: '`anime` `kiss` `punch` `hug`'},
            {name: ' ⚔️ | Battle commands', value: '`fight` `ttt` `rps` `snake`'},
            {name: ' 🥇 | Fun commands', value: ' `` '},
            {name: ' 🤖 | Bot commands', value: '``'},
            {name: ' 🧐 | Informative commands', value: '``'},
        )
        .setImage('')
        .setFooter(`Requested by ${message.author.username}`,  message.author.displayAvatarURL({ dynamic: true }))
        .setTimestamp();
    
        message.channel.send(newEmbed);
        let m = await message.react('✅');
    }


}