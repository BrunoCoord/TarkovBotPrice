const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const { REST, Routes } = require("discord.js");

const commands = [
  {
    name: "ping",
    description: "Replies with Pong!",
  },
  {
    name: "loot",
    description: "Return loot in the inventory TARKOV",
  },
  {
    name: "price",
    description: "Return price item",
    options: [
      {
        name: "item",
        description: "item name",
        type: 3,
        required: true,
      },
    ],
  },
];

const rest = new REST({ version: "10" }).setToken(TOKEN);

(async () => {
  try {
    console.log("Started refreshing application (/) commands.");

    await rest.put(Routes.applicationCommands(CLIENT_ID), { body: commands });

    console.log("Successfully reloaded application (/) commands.");
  } catch (error) {
    console.error(error);
  }
})();