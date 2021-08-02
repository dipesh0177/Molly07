const { Client, Message, MessageEmbed } = require('discord.js');
const schema = require('../models/raidmode')

module.exports = {
    name: 'anti-raidmode',
    description: 'Enables anti-raidmode and won\'t allow new members to join.',
    timeout: 5000,
    usage: 'enable/disable',
    aliases: ['anti-raid'],
    /** 
     * @param {Client} client 
     * @param {Message} message 
     * @param {String[]} args 
     */
    execute: async(client, message, args) => {
        if(!message.member.hasPermission('ADMINISTRATOR')) return message.reply('You do not have the permission \`ADMINISTRATOR\`')
        if(!message.guild.me.hasPermission('KICK_MEMBERS')) return message.reply('I do not have the permission \`KICK_MEMBERS\`')
        options = [
            'enable',
            'disable'
        ]

        if (!args.length) return message.reply("Please enter either **enable** or **disable**")
        const opt = args[0].toLowerCase();
        if (!opt) return message.reply('Please enter either **enable** or **disable**')


        if (!options.includes(opt)) return message.reply('Please enter either **enable** or **disable**')

        if(opt === 'enable') {
                schema.findOne({ Guild: message.guild.id }, async(err, data) => {
                    if(!data) {
                        data = new schema({
                            Guild: message.guild.id,
                        })
                        data.save()
                        message.reply(`Success! Anti-raidmode is enabled`)
                    } else{
                        message.reply(`Anti-raidmode is already enabled`)
                    }
                })
            
        }

        if(opt === 'disable') {
            schema.findOne({ Guild: message.guild.id}, async(err,data) =>{
            if(!data) return message.reply('The Anti-raidmode has already been disabled')
            data.delete()
            message.reply('Anti-raidmode has been disabled')
            
            })
            
        }
    }
}