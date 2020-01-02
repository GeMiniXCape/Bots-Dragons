module.exports = (client, guild) => {
  console.log(guild.id);
  guild.createRole({ 
  name: 'Gamemaster', 
  permissions: [
  ] 
});
};