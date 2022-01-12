const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`r`)
    .setDescription("Replies with a number between 1 and 6"),
  async execute(interaction) {
    min = Math.ceil(1);
    max = Math.floor(6);
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    await interaction.reply(`${result}`);
  },
};
