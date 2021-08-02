const {MessageEmbed} = require('discord.js');
const {MessageButton} = require('discord-buttons')

module.exports = {
  name: "ticket",
  decreption: "ticket",
  aliases: []
}

module.exports.execute = async function(client, message, args) {



  let btn1 = new MessageButton()
    .setStyle('red')
    .setEmoji("🎫")
    .setID('1')
    
  message.channel.send(`react here to open a ticket`, btn1).then(msg=>message.delete({timeout:"2000"}))

		
	
  client.on('clickButton', async (button) => {
    await button.defer();
    if (button.id === "1") {
      let btn2 = new MessageButton()
        .setLabel('close')
        .setStyle('red')
        .setEmoji("❌")
        .setID('2')
      button.guild.channels.create(`${button.clicker.user.username} ticket`, {
        permissionOverwrites: [
          {
            id: button.guild.roles.everyone,
            deny: ['VIEW_CHANNEL'],
          },
          {
            id: button.clicker.user.id,
            allow: ['VIEW_CHANNEL'],
          },
        ],
      }).then(channel => {
        let supportmessage = new MessageEmbed()
          .setColor("#FF1493")
          .setDescription("**please wait for our support team \n react with the emoji to close the ticket**")
        channel.send(`<@${button.clicker.user.id}>`)
        channel.send({ embed: supportmessage, component: btn2 })
        let logs = button.guild.channels.cache.find(ch => ch.name == "ticket-logs")
        let logembed = new MessageEmbed()
          .setColor("#00FF00")
          .setTitle(`action: **open ticket**`)
          .setThumbnail(button.clicker.user.displayAvatarURL())
          .setDescription(`ticket <#${channel.id}> openned by <@${button.clicker.user.id}>\n from <#${button.channel.id}>`)
          .setTimestamp()
        logs.send(logembed)

      })

    }
    if (button.id === "2") {
      let logs = button.guild.channels.cache.find(ch => ch.name == "ticket-logs")
      let closeembed = new MessageEmbed()
        .setColor("#FF0000")
        .setTitle("action: close ticket")
        .setThumbnail(button.clicker.user.displayAvatarURL())
        .setDescription(`ticket ${button.channel.name} closed by  <@${button.clicker.user.id}>`)
        .setTimestamp()
      logs.send(closeembed)
      button.channel.send("deleting after 5 seconds")
      setTimeout(function() {
        button.channel.delete();
      }, 5000)
    }
  })

}