exports.run = (client, message, args) => {
    var sendMsg = false;
    var msg = "Hi";
    var srv = "general";
    const filter = m => m.author.id === message.author.id;
        message.channel.sendMessage("What is your shout message?");
        message.channel.awaitMessages(filter, {
            max: 1
        }).then(collected => {
            msg = collected.first().content;
}).then(() => {
    message.channel.sendMessage("Whats the channel name?");
message.channel.awaitMessages(filter, {
    max: 1
}).then(collected => {
    srv = collected.first().content;
    client.guilds.forEach(element => {
        element.channels.find(channel => channel.name === srv).sendMessage(msg);
    });
}); 
});    
}