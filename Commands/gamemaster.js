exports.run = (client, message, args) => {
    const target = message.mentions.users.first();
    guild = message.guild;
    if(!message.mentions.users.size) {
        message.channel.sendMessage("You Must Mention a user to make them a gamemaster!")
    } else {
    
    }
    
}