const Discord = require('discord.js')
const Hypixel = require('hypixel-api-reborn')
require('dotenv').config()
const MY_API_KEY = process.env.MY_API_KEY

const HyAPI = new Hypixel.Client(MY_API_KEY)

module.exports = {
    name: 'profile',
    description: 'List all commands or info about a specific command',
    usage: '[username]',
    args: true,
    owner: false,
    run: async({message}, args) => {
        if (!args[0]) {
            message.send('Please provide a username!')
        } else {
            const player = args[0].toLowerCase();
            const uuid = HyAPI.getPlayer(player).then(playerr => playerr.uuid)
            const level = HyAPI.getPlayer(player).then(playerr => playerr.level)
            const rank = HyAPI.getPlayer(player).then(playerr => playerr.rank)
            const displayName = HyAPI.getPlayer(player).then(playerr => playerr.nickname)
            const karma = HyAPI.getPlayer(player).then(playerr => playerr.karma)
            const online = getOnline(player)
            const firstLogin = HyAPI.getPlayer(player).then(playerr => playerr.firstLogin)
            const lastLogin = HyAPI.getPlayer(player).then(playerr => playerr.lastLogout)

            const avatar = 'https://www.mc-heads.net/avatar/' + player + '.png'
            

            message.channel.send('Loading...')

            setTimeout(function(){
                console.log(' ');
            }, 3000);
            const embed = new Discord.MessageEmbed()
            .setTitle('** **')
            .setDescription('** **')
            .setColor(0x9e63cf)
            .setAuthor(rank + ' ' + displayName)
            .setThumbnail(avatar)
            .addField('UUID', uuid, true)
            .addField('Level', level, true)
            .addField('Karma', karma, true)
            .addField('Status', online, true)
            .addField('First Seen', firstLogin, true)
            .addField('Last Seen', lastLogin, true)
            .setFooter(getTime())

            message.edit(embed)
        }
    },
};







//functions
function getOnline(player) {
    const online = HyAPI.getPlayer(player).then(playerr => playerr.isOnline)

    if (online == true){
        const onlinee = "Online"
        return onlinee
    }else if (online == false){
        const onlinee = "Offline"
        return onlinee
    }
}

function getTime() {
    let current = new Date();
    let cDate = (current.getMonth() + 1) + '/' + current.getDate() + '/' + current.getFullYear()
    let dateTime = cDate
    

    return dateTime
}

function doNothing() {
    //
}