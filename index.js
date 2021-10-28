require("dotenv").config();
const Discord = require("discord.js");

const Client = new Discord.Client({
  intents: [Discord.Intents.FLAGS.GUILDS, Discord.Intents.FLAGS.GUILD_MESSAGES],
});

const Prefix = "!";

Client.on("ready", () => {
  console.log("Stagiaire au rapport");
});

Client.login(process.env.BOT_KEY);

Client.on("messageCreate", (message) => {
  if (message.author.bot) return;

  if (message.content === Prefix + "ping") {
    message.reply("Oui je suis la");
  }

  if (message.content === Prefix + "help") {
    const commandList = new Discord.MessageEmbed()
      .setColor("#ffffff")
      .setTitle("Liste des commandes")
      .setURL("https://discord.js.org")
      .setAuthor("Grise")
      .setDescription("Liste des commandes du stagiaire");
    message.channel.send({ embeds: [commandList] });
  }
});
