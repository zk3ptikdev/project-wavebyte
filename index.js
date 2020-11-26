const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Prefix: w!'));

app.listen(port, () => console.log(`WaveByte listening at http://localhost:${port}`));

// ================= START BOT CODE ===================

require("dotenv").config();

const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

//Commands
//Ping message
client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong!');
  }  else if (msg.content === 'lets play') {
    msg.reply('nah im too busy to play a game with u im sowwy');
  }  else if (msg.content === 'hello wavebyte') {
    msg.reply('hewwo there');
  }  else if (msg.content === 'generate free robux') {
    msg.reply('nah, free robux are scams. Dont fall for em');
  }  else if (msg.content === 'cheer me up') {
    msg.reply('hey! You are very cool. You can do it! I believe in you! Lets gooooo!');
  }  else if (msg.content === 'w!rank') {
    msg.reply('did you just summon the wrong bot? LOL');
  }  else if (msg.content === 'pats wavebyte') {
      msg.reply('am I a good boi');
  }  else if (msg.content === 'w!help') {
    msg.reply('Click this link to check the commands. https://pastebin.com/g4RAdpb8');
  }  else if (msg.content === 'hugs wavebyte') {
    msg.reply('Aww, thanks for hugging me');
  }  else if (msg.content === 'sup wavebyte') {
    msg.reply('im fine! hbu?');
  }
});

//DISCORD_TOKEN
client.login(process.env.DISCORD_TOKEN)