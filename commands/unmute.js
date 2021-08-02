const { Message, MessageEmbed } = require('discord.js')

module.exports=  {
    name : 'unmute', 
    /**
     * @param {Message} message
     */
    execute : async(client, message, args) => {

      if(!message.member.hasPermission('MUTE_MEMBERS')) return message.channel.send(
        new MessageEmbed()
        .setDescription("❌ You do not have permission to use this command - `\MUTE_MEMBERS\`")
        .setColor("RED")
      );
        const Member = message.mentions.members.first() || message.guild.members.cache.get(args[0])
        const reason = args.slice(1).join(" ")

        if(!Member) return message.channel.send(
          new MessageEmbed()
          .setDescription('❌ Please specify a member')
          .setColor("RED")
        )

        const role = message.guild.roles.cache.find(r => r.name.toLowerCase() === 'muted');

        await Member.roles.remove(role)

        if(!reason) return message.channel.send(
          new MessageEmbed()
          .setDescription("❌ Please specify a reason")
        )

        message.channel.send(
            new MessageEmbed()
            .setDescription(`✅ ${Member.displayName} is now unmuted`)
            .setColor("GREEN")
          )
    }
}