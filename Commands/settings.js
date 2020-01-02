exports.run = (client, message, args) => {
let setting = args[0];
const Discord = require('discord.js');
const playerData = require('../playerData');
const fs = require("fs");
switch(args[0]) {
    case 'start-location':
        message.channel.sendMessage('Now Awaiting Starting Location');
        const filter = m => m.author.id === message.author.id;
        message.channel.awaitMessages(filter, {
            max: 1
        }).then(collected => {
            playerData[message.author.id] = {
                StarterLocation: collected.first().content,
        };	
        fs.writeFile('./playerData.json', JSON.stringify(playerData, null, 4), err => {
        if (err) throw err;
            });
            message.channel.sendMessage("You have successfully chosen " + collected.first().content + " As your start location!");
        }).catch(err =>{
            console.log(err);
            message.channel.sendMessage("Didn't recieve message. Try again please!");
        })
    break;
    }
}