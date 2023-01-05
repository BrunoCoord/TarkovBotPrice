require("dotenv").config();
const TOKEN = process.env.TOKEN;
require("./register-commands");
const findItem = require("./actions/find-item");

const { Client, GatewayIntentBits} = require("discord.js");

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("", (message) => console.log(message));

client.on("interactionCreate", async (interaction) => {
  const command = interaction.commandName;

  if (command === "price") {
    const itemName = interaction?.options?.data[0]?.value;

    if (!itemName) {
      await interaction.reply("itemName not provided.");
      return;
    }

    const item = await findItem(itemName);

    if (item === null) {
      await interaction.reply("item not found");
    }

    await interaction.reply(
      `name - ${item.name} \n price - ${item.price} \n base price - ${item.basePrice} \n ${item.imgBig}`
    );

    return;
  }

  await interaction.reply("Ok");
});

client.login(TOKEN);