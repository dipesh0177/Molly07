const Discord = require('discord.js');

require('@weky/inlinereply');

const client = new Discord.Client()

require('discord-buttons')(client);

const prefix = ',';

const fs = require('fs');


client.commands = new Discord.Collection();
client.events = new Discord.Collection();
client.snipes = []

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command)
}


client.once('ready', () =>{
    console.log('Molly is online!');

    client.user.setActivity('Type ,help to see all commands!', { type: 'LISTENING'});
});

client.on('message', message =>{
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'pong'){
        client.commands.get('pong').execute(message, args, Discord)

    } else if (command === 'genius'){
        client.commands.get('genius').execute(Client, message, args, prefix); 

    } else if (command === 'ping'){
        client.commands.get('ping').execute(client ,message, args);

    } else if(command === '8ball'){
        client.commands.get('8ball').execute(client, message, args);

    } else if(command === 'remind'){
        client.commands.get('remind').execute(message, args, client, Discord)

    } else if(command === 'slowmode'){
        client.commands.get('slowmode').execute(message, args)

    } else if(command === 'ticket'){
        client.commands.get('ticket').execute(client, message, args)

    } else if(command === 'info'){
        client.commands.get('info').execute(message, args, Discord)

    } else if(command === 'hug'){
        client.commands.get('hug').execute(message, args, Discord);

    } else if(command === 'kiss'){
        client.commands.get('kiss').execute(message, args, Discord);

    } else if(command === 'punch'){
        client.commands.get('punch').execute(message, args, Discord)

    } else if(command === 'npm'){
        client.commands.get('npm').execute(message, args, client, Discord)

    } else if(command === 'blacklist'){
        client.commands.get('blacklist').execute(client, message, args, prefix)

    } else if(command === 'anime'){
        client.commands.get('anime').execute(client, message, args)

    } else if(command === 'covid'){
        client.commands.get('covid').execute(client, message, args)

    } else if(command === 'bugreport'){
        client.commands.get('bugreport').execute(message, args, client, Discord)

    } else if(command === 'say'){
        client.commands.get('say').execute(client, message, args)

    } else if(command === 'coinflip'){
        client.commands.get('coinflip').execute(client, message, args, Discord)

    } else if(command === 'roles'){
        client.commands.get('roles').execute(client, message, args, Discord)

    } else if(command === 'purge'){
        client.commands.get('purge').execute(client, message, args)

    } else if(command === 'tweet'){
        client.commands.get('tweet').execute(client, message, args, Discord)

    } else if(command === 'message'){
        client.commands.get('message').execute(client, message, args)

    } else if(command === 'ttt'){
        client.commands.get('ttt').execute(client, message, args)
        
    } else if(command === 'avatar'){
        client.commands.get('avatar').execute(client, message, args)

    } else if(command === 'playstore'){
        client.commands.get('playstore').execute(client, message, args)

    } else if(command === 'rps'){
        client.commands.get('rps').execute(client, message, args)

    } else if(command === 'fight'){
        client.commands.get('fight').execute(client, message, args)

    } else if(command === 'poll'){
        client.commands.get('poll').execute(client, message, args, prefix)

    } else if(command === 'emojiinfo'){
        client.commands.get('emojiinfo').execute(client, message, args)

    } else if(command === 'servers'){
        client.commands.get('servers').execute(client, message, args)

    } else if(command === 'convert'){
        client.commands.get('convert').execute(client, message, args)

    } else if(command === 'ship'){
        client.commands.get('ship').execute(client, message, args)

    } else if(command === 'gayrate'){
        client.commands.get('gayrate').execute(client, message, args)

    } else if(command === 'marry'){
        client.commands.get('marry').execute(client, message, args)

    } else if(command === 'afk'){
        client.commands.get('afk').execute(client, message, args)

    } else if(command === 'hack'){
        client.commands.get('hack').execute(client, message, args, Discord)

    } else if(command === 'help'){
        client.commands.get('help').execute(message, args, Discord)

    } else if(command === 'calculate'){
        client.commands.get('calculate').execute(client, message, args)

    } else if(command === 'reply'){
        client.commands.get('reply').execute(client, message, args)

    } else if(command === 'whois'){
        client.commands.get('whois').execute(client, message, args)

    } else if(command === 'wyr'){
        client.commands.get('wyr').execute(client, message, args)

    } else if(command === 'imdb'){
        client.commands.get('imdb').execute(client, message, args)

    } else if(command === 'embed'){
        client.commands.get('embed').execute(client, message, args)

    } else if(command === 'spotifysearch'){
        client.commands.get('spotifysearch').execute(client, message, args)

    } else if(command === 'addemoji'){
        client.commands.get('addemoji').execute(client, message, args)

    } else if(command === 'removeemoji'){
        client.commands.get('removeemoji').execute(client, message, args)
         
    } else if(command === 'renameemoji'){
        client.commands.get('renameemoji').execute(client, message, args)

    } else if(command === 'advice'){
        client.commands.get('advice').execute(client, message, args)

    } else if(command === 'announce'){
        client.commands.get('announce').execute(client, message, args)

    } else if(command === 'membercount'){
        client.commands.get('membercount').execute(client, message, args)

    } else if(command === 'meme'){
        client.commands.get('meme').execute(client, message, args)

    } else if(command === 'serverinfo'){
        client.commands.get('serverinfo').execute(client, message, args)

    } else if(command === 'genshin'){
        client.commands.get('genshin').execute(client, message, args)

    } else if(command === 'truth'){
        client.commands.get('truth').execute(client, message, args)

    } else if(command === 'pokemon'){
        client.commands.get('pokemon').execute(client, message, args)

    } else if(command === 'love'){
        client.commands.get('love').execute(client, message, args)

    } else if(command === 'captcha'){
        client.commands.get('captcha').execute(client, message, args)

    } else if(command === 'setnick'){
        client.commands.get('setnick').execute(client, message, args)

    } else if(command === 'setmodlogchannel'){
        client.commands.get('setmodlogchannel').execute(client, message, args)

    } else if(command === 'warn'){
        client.commands.get('warn').execute(client, message, args)

    } else if(command === 'addrole'){
        client.commands.get('addrole').execute(client, message, args)

    } else if(command === 'disablemodlogchannel'){
        client.commands.get('disablemodlogchannel').execute(client, message, args)

    } else if(command === 'removerole'){
        client.commands.get('removerole').execute(client, message, args)

    } else if(command === 'kick'){
        client.commands.get('kick').execute(client, message, args)

    } else if(command === 'balance'){
        client.commands.get('balance').execute(client, message, args)

    } else if(command === 'buy'){
        client.commands.get('buy').execute(client, message, args)

    } else if(command === 'fact'){
        client.commands.get('fact').execute(client, message, args)

    } else if(command === 'joke'){
        client.commands.get('joke').execute(client, message, args)

    } else if(command === 'cat'){
        client.commands.get('cat').execute(client, message)

    } else if(command === 'dog'){
        client.commands.get('dog').execute(client, message)

    } else if(command === 'catfact'){
        client.commands.get('catfact').execute(client, message)

    } else if(command === 'dogfact'){
        client.commands.get('dogfact').execute(client, message)

    } else if(command === 'bear'){
        client.commands.get('bear').execute(client, message)

    } else if(command === 'panda'){
        client.commands.get('panda').execute(client, message)
        
    } else if(command === 'drop'){
        client.commands.get('drop').execute(client, message, args)

    } else if(command === 'radio'){
        client.commands.get('radio').execute(client, message, args)

    } else if(command === 'rps'){
        client.commands.get('rps').execute(client, message, args)

    } else if(command === 'akinator'){
        client.commands.get('akinator').execute(client, message, args)

    } else if(command === 'ban'){
        client.commands.get('ban').execute(client, message, args)

    } else if(command === 'snake'){
        client.commands.get('snake').execute(client, message, args)

    } else if(command === 'sus'){
        client.commands.get('sus').execute(client, message, args)

    } else if(command === 'mute'){
        client.commands.get('mute').execute(client, message, args)

    } else if(command === 'unmute'){
        client.commands.get('unmute').execute(client, message, args)

    } else if(command === 'calculator'){
        client.commands.get('calculator').execute(client, message, args)

    } else if(command === 'meinfo'){
        client.commands.get('meinfo').execute(client, message, args)
        
    } else if(command === 'choose'){
        client.commands.get('choose').execute(client, message, args)

    } else if(command === 'drake'){
        client.commands.get('drake').execute(client, message, args)

    } else if(command === 'pokemon'){
        client.commands.get('pokemon').execute(client, message, args)

    } else if(command === 'rr'){
        client.commands.get('rr').execute(client, message, args)

    } else if(command === 'wanted'){
        client.commands.get('wanted').execute(client, message, args)

    } else if(command === 'maps'){
        client.commands.get('maps').execute(client, message, args)

    } else if(command === 'freefire'){
        client.commands.get('freefire').execute(client, message, args)

    } else if(command === 'wikipedia'){
        client.commands.get('wikipedia').execute(message, args, client)

    } else if(command === 'fasttype'){
        client.commands.get('fasttype').execute(client, message, args)

    } else if(command === 'sudo'){
        client.commands.get('sudo').execute(client, message, args)

    } else if(command === 'dinochrome'){
        client.commands.get('dinochrome').execute(client, message, args)

    } else if(command === 'anti-raidmode'){
        client.commands.get('anti-raidmode').execute(client, message, args)

    } else if(command === 'button-pages'){
        client.commands.get('button-pages').execute(client, message, args)

    } else if(command === 'pikachu'){
        client.commands.get('pikachu').execute(client, message, args)
        
    } else if(command === 'setsuggestion'){
        client.commands.get('setsuggestion').execute(client, message, args)

    } else if(command === 'declinesuggestion'){
        client.commands.get('declinesuggestion').execute(client, message, args)

    } else if(command === 'acceptsuggestion'){
        client.commands.get('acceptsuggestion').execute(client, message, args)

    } else if(command === 'replysuggestion'){
        client.commands.get('replysuggestion').execute(client, message, args)

    } else if(command === 'suggest'){
        client.commands.get('suggest').execute(client, message, args)

    } else if(command === 'guess'){
        client.commands.get('guess').execute(client, message, args, Discord)

    } else if(command === 'help-menu'){
        client.commands.get('help-menu').execute(client, message, args, Discord)
    }
});

client.login('ODU1MzAxNDIxODg4OTYyNTcw.YMwfhQ.AJb5AMML9vptWgDwQEyQDMay_2Y')