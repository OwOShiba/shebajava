const { MessageButton, MessageActionRow } = require("gcommands");
const botjs = require('../../bot.js')
module.exports = {
    name: 'button',
    description: 'Creates a message with a button',
    usage: '[command name]',
    args: false,
    owner: false,
    run: async({client, respond}) => {


        const button = new MessageButton()
        .setStyle("red")
        .setLabel("I am a button")
        .setID("redbutton")
        .setEmoji("<:shibasmile:771015927780343859>")
        .toJSON()


        const buttonRow = new MessageActionRow()
        .addComponent(button)

        respond({
            content: "This message has a button",
            components: buttonRow, // 1 button
        })
          
        client.on("clickButton", (button) => {
            button.edit({
              content: "It worked :D",
              components: buttonRow // 1 button
            })

})

    }}