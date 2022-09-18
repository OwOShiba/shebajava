const { GCommands } = require("gcommands");
const Discord = require("discord.js");

const client = new Discord.Client();
var config = require('./config.json');
require('dotenv').config()

const MY_TOKEN = process.env.MY_TOKEN

client.on('ready', () => {
    const GCommandsClient = new GCommands(client, {
        cmdDir: "commands/",
        unkownCommandMessage: true, // true of false | send unkownCommand Message
        language: "english", //english, spanish, portuguese, russian, german, czech, turkish
        slash: {
           slash: 'both', //true = slash only, false = only normal, both = slash and normal
           prefix: config.prefix // for normal commands
        },
        defaultCooldown: 1
    })
    
    GCommandsClient.on("debug", (debug)=>{
        console.log(debug)
    })

    console.log("Connected as " + client.user.tag)
    client.user.setActivity("code", {type: "WATCHING"})
})

client.login(MY_TOKEN)