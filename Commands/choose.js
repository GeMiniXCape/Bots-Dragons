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
						title: "Map of Apocalyptic US:",
						description: "Select your start location. Just Type the City in chat to log it!",
						image: {
							url: "https://geology.com/world/the-united-states-of-america-map.gif"
						},
						timestamp: new Date(),
						footer: {
							icon_url: client.user.avatarURL,
							text: "Zombot"
						}
					}
                }).then(msg => {msg.delete(10000)});;
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
                }).then(msg => {
                    message.channel.send({embed: {
                        color: 3447003,
                        author: {
                            name: client.user.username,
                            icon_url: client.user.avatarURL
                        },
                            title: "Map of Apocalyptic US:",
                            description: "What country/province/state is this city in?",
                            image: {
                                url: "https://mcfarlinumc.org/wp-content/uploads/2018/08/question-mark-scribble-animation-doodle-cartoon-4k_bdi1p4a_e_thumbnail-full01.png"
                            },
                            timestamp: new Date(),
                            footer: {
                                icon_url: client.user.avatarURL,
                                text: "Zombot"
                            }
                        }
                    }).then(msg => {msg.delete(10000)});;
                message.channel.awaitMessages(filter, {
                    max: 1
                }).then(collected => {
                    playerData[message.author.id] = {
                        StarterLocation: playerData[message.author.id].StarterLocation,
                        Area: collected.first().content
                };	
                fs.writeFile('./playerData.json', JSON.stringify(playerData, null, 4), err => {
                if (err) throw err;
                    });
                    message.channel.sendMessage("Creating Character Sheet...");

                })
            })

					/*let startLocation = message.content;
					message.channel.send(message.content);
						playerstats[message.author.username] = {
							PlaceOfOrigin: startLocation
					};	
					
				  fs.writeFile('./playerstats.json', JSON.stringify(playerstats, null, 4), err => {
					if (err) throw err;
						collector.off('collect');
                    });
                    
			console.log(message.author.username);
        })
        */
}