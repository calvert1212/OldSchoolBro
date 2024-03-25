require('dotenv').config();
const { Client, IntentsBitField, Message } = require('discord.js')

const client = new Client({
    intents: [
        IntentsBitField.Flags.Guilds,
        IntentsBitField.Flags.GuildMembers,
        IntentsBitField.Flags.GuildMessages,
        IntentsBitField.Flags.MessageContent,
    ],
});

client.on('ready', (c) => {
    console.log("Geheisen, mein Kaiser!")
})

client.on('messageCreate', (msg) => {
    if (msg.author.bot){
    return;
    }

    if (msg.content === 'hello') {
        msg.reply('Guten Tag!');
    }
});

client.login(process.env.TOKEN);
