const Discord = require('discord.js');
const config = require('./config.json');

const client = new Discord.Client();

let prefix = config.prefix;
jihdsflkj


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
  client.user.setActivity("Author GekkeGlenn", {type: "PLAYING"});
});

client.login(config.token);

client.on("message", async Message => {
  if(Message.author.bot) return;
  if(Message.channel.type === "dm") return;

  let messageArray = Message.content.split(" ");
  let command = messageArray[0];
  let args = messageArray.slice(1);

  if(command === `${prefix}hallo`) {
    return Message.channel.send("hallo");
  }
});

client.on('guildMemberAdd', (member) => {
  let guild = member.guild;
  let memberTag = member.user.tag;
  let roleID = "484697942742007818";
  let welcomeChannelID = "484688613590695937";
  const welkomEmbed = new Discord.RichEmbed()
  .setColor("#17a2b8")
  .setDescription("Welkom bij de officele GekkeGlenn Discord! Er zitten **" + member.guild.memberCount + " leden** in onze Discord.")
  .setAuthor("Welkom " + `${memberTag}`)
  .setTimestamp()
  .setFooter("Developer: GekkeGlenn#6529");

  member.addRole(guild.roles.find(role => role.id === roleID));
  client.channels.get(welcomeChannelID).send(welkomEmbed);
  //client.channels.get(welcomeChannelID).send("Welkom bij de enige echte GekkeGlenn discord! <@" + member.user.id + ">");
});



// kick, ban, clear, leveling, welkom, welkomrol, meme, setup, logchannel, 
// mute, ?warn, help, settings, website, 