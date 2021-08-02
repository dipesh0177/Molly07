const {Message, MessageEmbed}= require('discord.js')
const ms = require('ms')
const db = require('quick.db')

module.exports = {
    name : 'mute',
    /**
     * @param {Message} message
     */
    execute : async(client, message, args) => {
        if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(
          new MessageEmbed()
          .setDescription('❌ You do not have permissions to use this command - `\MUTE_MEMBERS\`')
          .setColor("RED")
        )

        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const reason = args.slice(1).join(" ")

        if(!Member) return message.channel.send(
          new MessageEmbed()
          .setDescription("❌ Please specify a member")
          .setColor("RED")
        )

            if(Member.id === message.author.id) return message.channel.send(
              new MessageEmbed()
              .setDescription("❌ You can't mute your self")
              .setColor("RED")
            );

                if(Member.id === client.user.id) return message.channel.send(
                  new MessageEmbed()
                  .setDescription("❌ You can't mute me")
                  .setColor("RED")
                );


        const role = message.guild.roles.cache.find(role => role.name.toLowerCase() === 'muted')
        



        if(!role) {
            try {
                message.channel.send(
                  new MessageEmbed()
                  .setDescription('❌ Muted role is not found, attempting to create muted role')
                  .setColor("RED")
                )

                let muterole = await message.guild.roles.create({
                    data : {
                        name : 'muted',
                        permissions: []
                    }
                });
                message.guild.channels.cache.filter(c => c.type === 'text').forEach(async (channel, id) => {
                    await channel.createOverwrite(muterole, {
                        SEND_MESSAGES: false,
                        ADD_REACTIONS: false
                    })
                });
                message.channel.send(
                  new MessageEmbed()
                  .setDescription('✅ Muted role has sucessfully been created')
                  .setColor("GREEN")
                )
            } catch (error) {
                console.log(error)
            }
        };
        let role2 = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted')
        if(Member.roles.cache.has(role2.id)) return message.channel.send(
          new MessageEmbed()
          .setDescription(`<❌ ${Member.displayName} has already been muted`)
          .setColor("RED")
        )
        if(Member.roles.highest.position >= message.member.roles.highest.position) return message.channel.send(
          new MessageEmbed()
          .setDescription("❌ I can't mute this user")
        );
        if(!reason) return message.channel.send(
          new MessageEmbed()
          .setDescription("❌ Please specify a reason")
          .setColor("RED")
        )
        await Member.roles.add(role2)
        message.channel.send(
          new MessageEmbed()
          .setDescription(`✅ ${Member.displayName} is now muted.`)
          .setColor("GREEN")
        )

    }
}