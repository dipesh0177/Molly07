client.on('clickMenu', async(menu) => {

    if(menu.values[0] === 'racon') {
      await menu.reply.defer({ ephemeral: true })
      await menu.channel.send(`RACONLXXXXXXXXXXXXXXXXXXXXXX`)
    }
  
    if(menu.values[0] === 'worn') {
      await menu.reply.defer({ ephemeral: true })
      await menu.channel.send(`WORN OFF KEYS`)
    }
  
    if(menu.values[0] === 'menudocs') {
      await menu.reply.defer()
      await menu.channel.send(`MENU DOCS`)
    }
  
    if(menu.values[0] === 'skid') {
      await menu.reply.defer({ ephemeral: true })
      await menu.channel.send(`SKID`)
    }
  })