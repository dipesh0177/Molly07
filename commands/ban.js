const { MessageEmbed } = require("discord.js");
const db = require('quick.db');

module.exports = {
        name: "ban",
        category: "moderation",
        description: "bans the user",
        accessableby: "Administrator",
        usage: "[name | nickname | mention | ID] <reason> (optional)",
        aliases: ["k"],

    execute: async (client, message, args) => {
        try {
            if (!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("**You Do Not Have Permissions To Ban Members! - [BAN_MEMBERS]**");
            if (!message.guild.me.hasPermission("BAN_MEMBERS")) return message.channel.send("**I Do Not Have Permissions To Ban Members! - [BAN_MEMBERS]**");

            if (!args[0]) return message.channel.send('**Enter A User To Ban!**')

            var banMember = message.mentions.members.first() || message.guild.members.cache.get(args[0]) || message.guild.members.cache.find(r => r.user.username.toLowerCase() === args[0].toLocaleLowerCase()) || message.guild.members.cache.find(ro => ro.displayName.toLowerCase() === args[0].toLocaleLowerCase());
            if (!banMember) return message.channel.send("**User Is Not In The Guild!**");

            if (banMember.id === message.member.id) return message.channel.send("**You Cannot Ban Yourself!**")

            if (!banMember.banable) return message.channel.send("**Cannot Ban This User! May be the user is a admin or a mod.**")
            if (banMember.user.bot) return message.channel.send("**Cannot Ban A Bot!**")

            var reason = args.slice(1).join(" ");
            try {
                const sembed2 = new MessageEmbed()
                    .setColor("RED")
                    .setDescription(`**Hello, You Have Been Banned From ${message.guild.name} for - ${reason || "No Reason!"}**`)
                    .setFooter(message.guild.name, message.guild.iconURL())
                banMember.send(sembed2).then(() =>
                    banMember.ban()).catch(() => null)
            } catch {
                banMember.ban()
            }
            if (reason) {
            var sembed = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been Banned for ${reason}`)
            message.channel.send(sembed);
            } else {
                var sembed2 = new MessageEmbed()
                .setColor("GREEN")
                .setAuthor(message.guild.name, message.guild.iconURL())
                .setDescription(`**${banMember.user.username}** has been banned`)
            message.channel.send(sembed2);
            }
            let channel = db.fetch(`modlog_${message.guild.id}`)
            if (!channel) return;

            const embed = new MessageEmbed()
                .setAuthor(`${message.guild.name} Modlogs`, message.guild.iconURL())
                .setColor("#ff0000")
                .setThumbnail(banMember.user.displayAvatarURL({ dynamic: true }))
                .setFooter(message.guild.name, message.guild.iconURL())
                .addField("**Moderation**", "ban")
                .addField("**User Banned**", banMember.user.username)
                .addField("**Banned By**", message.author.username)
                .addField("**Reason**", `${reason || "**No Reason**"}`)
                .addField("**Date**", message.createdAt.toLocaleString())
                .setTimestamp();

            var sChannel = message.guild.channels.cache.get(channel)
            if (!sChannel) return;
            sChannel.send(embed)
        } catch (e) {
            return message.channel.send(`**${e.message}**`)
        }
    }
}