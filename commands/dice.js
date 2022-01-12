const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`r`)
    .setDescription("Roll a dice")
    .addSubcommand((subcommand) =>
      subcommand.setName("d6").setDescription("Roll a d6")
    )
    .addSubcommand((subcommand) =>
      subcommand.setName("d20").setDescription("Roll a d20")
    ),
  async execute(interaction) {
    if (!interaction.isCommand()) return;

    if (interaction.commandName === "r") {
      if (interaction.options.getSubcommand() === "d6") {
        min = Math.ceil(1);
        max = Math.floor(6);
        result = Math.floor(Math.random() * (max - min + 1)) + min;
        await interaction.reply(`${result}`);
      } else if (interaction.options.getSubcommand() === "d20") {
        min = Math.ceil(1);
        max = Math.floor(20);
        result = Math.floor(Math.random() * (max - min + 1)) + min;
        await interaction.reply(`${result}`);
      }
    }
  },
};
