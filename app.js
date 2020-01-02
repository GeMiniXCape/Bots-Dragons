const Discord = require('discord.js');
const client = new Discord.Client();
const token = require('./settings.json').token;
const hook = new Discord.WebhookClient('webhook id', 'webhook token');
const fs = require("fs");
const mysql = require("mysql");
let gameHost = 213466096718708737;
const playerstats = require('./playerstats.json');
const createmode = require('./createmode.json');
const joinedList = require('./JoinedList.json');
const Enmap = require("enmap");
const settings = require('./settings.json');
client.settings = settings;



const mysqldatabase = mysql.createConnection({
	host: "localhost",
	
})

fs.readdir("./events/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    const event = require(`./events/${file}`);
    let eventName = file.split(".")[0];
    client.on(eventName, event.bind(null, client));
  });
});



client.commands = new Enmap();

fs.readdir("./commands/", (err, files) => {
  if (err) return console.error(err);
  files.forEach(file => {
    if (!file.endsWith(".js")) return;
    let props = require(`./commands/${file}`);
    let commandName = file.split(".")[0];
    console.log(`Attempting to load command ${commandName}`);
    client.commands.set(commandName, props);
  });
});
client.login(token);
/*		
		if (command === 'catch') {
			var myID = client.user.id;
			// Create collector and wait for 5 seconds (overkill but you never know with bad internet/lots of traffic)
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === myID, { time: 5000 });
			collector.on('collect', message => {
					console.log(message.content);
					collector.stop(message.content);
			});
		}
    
    if (command === 'start') {
			var Outbreaksource = Math.floor((Math.random() * 2) + 1);
			var pickPhase = true;
		}

		if (command === 'join') {
			var pickPhase = true;
			
 			gameMembers.push(message.member.id);
			joinedList = {
				MembersinGame: gameMembers
		};	
		fs.writeFile('./joinedList.json', JSON.stringify(joinedList, null, 4), err => {
		if (err) throw err;
		});

		}


		if (command === 'choose') {
				let startLocation = null;
				message.channel.send({embed: {
					color: 3447003,
					author: {
						name: client.user.username,
						icon_url: client.user.avatarURL
					},
						title: "Map of Apocalyptic US:",
						description: "Select your start location. Just Type the City in chat to log it! You have 5 seconds to type a city...",
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
			const collector = new Discord.MessageCollector(message.channel, m => m.author.id === message.author.id, { time: 5000 });
			collector.on('collect', message => {
					let startLocation = message.content;
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
	}

		if (command === 'host') {
				gameHost = message.mentions.users.first().id
				gameHostNonId = message.mentions.users.first()
				if (args[1] != message.mentions.members.first()) {
					message.channel.send("You must mention a user to make the host of the game!");
				}
				else {
				 message.channel.sendMessage("Congrats! " + message.mentions.members.first() + " is now Game Master!");
				 client.users.get(gameHost).sendMessage("Hello " + gameHostNonId + "! You now have complete control of the Zombie Survival... ENJOY!");
				}
				}

		if(command === 'create') {
			let startLocation = "none";
			let occupation = "none";
			let disability = "none";
			message.channel.send({embed: {
				color: 3447003,
				author: {
					name: client.user.username,
					icon_url: client.user.avatarURL
				},
					title: "Map of Apocalyptic US:",
					description: "Select your start location. Just Type the City in chat to log it! You have 5 seconds to type a city...",
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

			const filter = message => message.author.id === message.author.id;
			message.reply("I am now recording your answer. Just type it below...").then(r => r.delete(10000));
			message.channel.awaitMessages({max: 5, time: 10000}).then(collected => {
				if(collected.first().content === "cancel") {
					return message.reply("You want me to stop listening, so now I am. Happy?")
				}

			 startLocation = collected.first().content; 

			}).catch(err => {
				message.reply("I couldn't hear you. Try saying that again.");
			});
				let thePlayerList = new playerList();
				thePlayerList.addANewPlayer(new playerStat(message.member.id, startLocation, occupation, disability));
				console.log(thePlayerList);
				joinedList = {
					MembersinGame: thePlayerList
			};	
			fs.writeFile('./joinedList.json', JSON.stringify(joinedList, null, 4), err => {
			if (err) throw err;
			});
		}
});

class Server {	
	constructor(serverID, guildName, numberOfPlayers) {
		this.serverId = serverID;
		this.guildName = guildName;
		this.numberofPlayers = numberofPlayers;
	}
}

class playerList {
	constructor() {
		this.gameMembers = [];
	}
	addANewPlayer(newPlayer) {
		this.gameMembers.push(newPlayer);
	}
}

class playerStat {	
	constructor(playerID, startLocation, occupation, disability) {
		this.playerID = playerID;
		this.startLocation = startLocation;
		this.occupation = occupation;
		this.disability = disability;
	}
	getPlayerID() {
		return message.member.id;
	}
}

*/





