const { Client, GatewayIntentBits } = require("discord.js");
 
const token "Your Bot Token";
 
const client = new Client({
    intents: GatewayIntentBits.Guilds
})
 
client.on('ready', async () => {
 
    var commands;
    var guild = null;
 
    if (guild) {
        commands = client.application.commands;
    } else {
        commands = client.application.commands;
    }
 
    console.log(`Im Online with: ${client.user.tag}`)
 
    commands.create({
        name: 'ping',
        description: 'respond pong!'
    });
 
})
 
client.on('interactionCreate', async (interaction) => {
    if (!interaction.isCommand()) return;
    if (interaction.commandName === 'ping') {
        interaction.reply({
            content: `Meu ping é: ${client.ws.ping} ms`,
            ephemeral: true
        })
    }
})
 
client.login(token)
