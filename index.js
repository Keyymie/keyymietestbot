const Discord = require('discord.js')
const bot = new Discord.Client()

// bot.on() permet de récupérer un événement.
// L'event "ready" réagis quand le bot est prêt.
// L'event "message" permet de récupérer un message qui à été envoyé.


bot.on('ready', () => {
    console.log('Connecté!') // La console dira "Connecté" comme vous l'avez vu!
})

bot.on('message', message =>{ //Réagis quand un message est envoyé
if(message.content.startsWith('!ping')){ // Si le début de votre message commence par !ping
    message.channel.send('pong!') //Le bot répondra pong!
};

})
bot.login(process.env.BOT_TOKEN)
