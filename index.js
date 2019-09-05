const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

let prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Author GekkeGlenn", {type: "PLAYING"});
});

client.login(config.token);

client.on("message", async Message => {
  if(Message.author.bot) return;
  if(Message.channel.type 
  client.channels.get(welcomeChannelID).send(welkomEmbed);
  //client.channels.get(welcomeChannelID).send("Welkom bij de enige echte GekkeGlenn discord! <@" + member.user.id + ">");
});


fsdadsdfsaddfsadsa
// kick, ban, clear, leveling, welkom, welkomrol, meme, setup, logchannel, 
// mute, ?warn, help, settings, website, 