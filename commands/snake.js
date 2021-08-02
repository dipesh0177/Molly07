const Discord = require("discord.js")
const { Snake }  = require("weky")

module.exports = {
        name: 'snake',
        description: '',
        aliases: ["snake"],
        usage: '',
        accessableby: "",

    execute: async (client, message, args) => {
new Snake({
    message: message,
    embed: {
    title: 'Snake', //embed title
    color: "#gt4668", //embed color
    gameOverTitle: "Game Over", //game over embed title
    },
    emojis: {
      empty: '⬛', //zone emoji
      snakeBody: '🐍', //snake
      food: '🍒', //food emoji
      //control
      up: '⬆️', 
      right: '⬅️',
      down: '⬇️',
      left: '➡️',
      },
    }).start()
}}