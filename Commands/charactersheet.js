exports.run = (client, message, args) => {
let startLocation = null;
const Discord = require('discord.js');
const playerData = require('../playerData');
const fs = require("fs");
var gameHost = 213466096718708737;
message.channel.send({embed: {
    color: 3447003,
    author: {
      name: client.user.username,
      icon_url: client.user.avatarURL
    },
    title: "A Character Sheet",
    description: "For " + message.author + ":",
    timestamp: new Date(),
    fields: [
        {
            name: 'Location:',
            value: playerData[message.author.id].StarterLocation + ", " + playerData[message.author.id].Area,
            
        },
    ],
    footer: {
      icon_url: client.user.avatarURL,
      text: "Zombot"
    },
  }
}).catch(err =>{
    console.log(err);
})
}
