module.exports = {
    name: 'radio',
    execute: async(client, message, args) => {
        
    const voiceChannel = message.member.voice.channel;
    if(!voiceChannel)
    return message.channel.send("You must be in a voice channel!"); 
    
    const permissions = voiceChannel.permissionsFor(message.client.user);
    if(!permissions.has('CONNECT') || !permissions.has('SPEAK')) return message.reply('I am missing permission!');    

    var connection = await voiceChannel.join();
    await connection.voice.setSelfDeaf(true);
    connection.play("https://streams.ilovemusic.de/iloveradio14.mp3").setVolumeLogarithmic(1);
}
}