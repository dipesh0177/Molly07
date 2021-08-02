const guildNumber = new Map();
const guildAttempts = new Map();

function guildNumberMap(message) {
    const guildId = message.guild.id;

    var number = Math.floor(Math.random() * 50) + 1;
    // If there is no command running map for the guild, create one
    if (!guildNumber.get(guildId)) {
        guildNumber.set(guildId, number);
    }
}

function guildAttemptsMap(message) {
    const guildId = message.guild.id;
    // If there is no command running map for the guild, create one
    if (!guildAttempts.get(guildId)) {
        guildAttempts.set(guildId, { attempts: 1 });
    } else {
        guildAttempts.get(guildId).attempts++;
    }
}

module.exports = {
    name: "guess",
    aliases: ['guess', 'gtn'],
    permissions: ['SEND_MESSAGES'],
    cooldown: 0,
    category: "Fun",
    description: "Guess the number!",
    async execute(client, message, args, Discord) {
        const { member, channel, guild } = message;

        const provideaguess = new Discord.MessageEmbed()
            .setTitle("Error")
            .setColor('#F30B04')
            .setDescription(`**❌ Please provide a guess!**`)

        const pickinganumber = new Discord.MessageEmbed()
            .setTitle("Picking a number....")
            .setColor('#33F304')
            .setDescription('**Picking a number between 1 and 50**')



        await guildNumberMap(message);
        await guildAttemptsMap(message);

        let guess = args[0];
        if (!guess && guildAttempts.get(guild.id).attempts === 1) {
            return channel.send(pickinganumber)
        } else if (!guess) {
            return channel.send(provideaguess);
        }
        const ToHighForGuess = new Discord.MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} Is too high!`)
            .setColor('RED')

        const ToLowForGuess = new Discord.MessageEmbed()
            .setTitle("Nope!")
            .setDescription(`${guess} Is too low!`)
            .setColor('RED')

        const InvalidNumber = new Discord.MessageEmbed()
            .setTitle("Error")
            .setDescription("Invalid number please try again!")
            .setColor('RED')

        if (+guess === guildNumber.get(guild.id)) {
            let attempts = guildAttempts.get(guild.id);

            const guessedthenumber = new Discord.MessageEmbed()
                .setColor('#33F304')
                .setDescription(`✅ Perfect, <@${member.id}> the number was ${guildNumber.get(guild.id)}, it only took you ${attempts.attempts} attempts!`)

            channel.send(guessedthenumber);
            guildNumber.delete(guild.id);
            guildAttempts.delete(guild.id);


            return;
        } else if (+ guess < guildNumber.get(guild.id)) {
            return message.reply(ToLowForGuess);
        } else if (+guess > guildNumber.get(guild.id)) {
            return message.reply(ToHighForGuess);
        } else {
            return message.reply(InvalidNumber);
        }
    },
};