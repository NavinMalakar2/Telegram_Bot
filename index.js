const TelegramBot = require('node-telegram-bot-api')
const dotenv =require('dotenv')
const axios = require('axios');
dotenv.config();
//  console.log("Telegram token ",process.env.TELEGRAM_TOKEN);

 const bot = new TelegramBot(process.env.TELEGRAM_TOKEN,{polling: true});
 

 bot.on('message',(option)=>{
    if (!option.text.startsWith('/')) {
    console.log("Message received on the bot ", option);
    bot.sendMessage(option.chat.id, "Hello, i am bot. i am here to help you with your queries. please type /help to more about me.");
    
 }
 });

//  joke 

bot.onText(/\/joke/, async(option)=>{
    const response = await axios.get('https://hindi-jokes-api.onrender.com/jokes?api_key=c70afb601fc2921ad8627dba9a16')
    console.log(response.data);
    const jokeContent = response.data.jokeContent;
    // const punchline = response.data.punchline;
    bot.sendMessage(option.chat.id, jokeContent);
});


