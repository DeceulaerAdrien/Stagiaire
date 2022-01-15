const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`roll`)
    .setDescription("Roll a dice")
    .addIntegerOption((option) =>
      option
        .setName("number_of_dice")
        .setDescription("Number of dice you want rolled")
    ),

  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "roll") {
    }
  },
};
