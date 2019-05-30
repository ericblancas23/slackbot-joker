const SlackBot = require('slackbots');
const axios = require('axios');

const bot = new SlackBot({
    token: 'xoxb-650065951861-651926971239-Jw1fGdOBHC4HF4zwKUKiwhlo',
    name: 'jokebot'
});

//start handler

bot.on('start', () => {
    const params = {
        icon_emoji: ":smiley:"
    }
    bot.postMessageToChannel('general', 'gett ready to laugh with @Jokebot', params);
});