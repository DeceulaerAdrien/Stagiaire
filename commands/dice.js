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
  return `${resultArray} = ${sum}`;
};

module.exports = {
  data: new SlashCommandBuilder()
    .setName(`roll`)
    .setDescription("Roll a dice")
    .addIntegerOption((option) =>
      option
        .setName("number_of_dice")
        .setDescription("Number of dice you want rolled")
    )
    .addIntegerOption((option) =>
      option
        .setName("face_of_dice")
        .setDescription("face of dice you want rolled")
    ),

  async execute(interaction) {
    if (!interaction.isCommand()) return;

    numberOfDice = interaction.options.getInteger("number_of_dice");
    faceOfDice = interaction.options.getInteger("face_of_dice");

    if (numberOfDice < 1) {
      numberOfDice = 1;
    }

    if (faceOfDice < 6) {
      faceOfDice = 6;
    }

    if (interaction.commandName === "roll") {
      await interaction.reply(
        `the user ${
          interaction.user.tag
        } roll ${numberOfDice} dice ${faceOfDice} and obtained : ${dice(
          numberOfDice,
          faceOfDice
        )}`
      );
    }
  },
};
