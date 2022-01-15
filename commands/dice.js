const { SlashCommandBuilder } = require("@discordjs/builders");

dice = (numberOfDice, maxvalue) => {
  sum = 0;
  resultArray = [];
  min = Math.ceil(1);
  max = Math.floor(maxvalue);
  for (let i = 0; i < numberOfDice; i++) {
    result = Math.floor(Math.random() * (max - min + 1)) + min;
    resultArray.push(result);
  }

  for (let i = 0; i < resultArray.length; i++) {
    sum += resultArray[i];
  }
  console.log(sum);
  return `${resultArray} = ${sum}`;
};

console.log(dice(100, 100));

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
      await interaction.reply(dice(10, 6));
    }
  },
};
