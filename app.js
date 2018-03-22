var restify = require('restify');
var builder = require('botbuilder');
var questions = require('./questions/questions');

// Setup Restify Server
var server = restify.createServer();
server.listen(process.env.port || process.env.PORT || 3978, function () {
    console.log('%s listening to %s', server.name, server.url);
});

// Create chat connector for communicating with the Bot Framework Service
var connector = new builder.ChatConnector({
    appId: process.env.MicrosoftAppId,
    appPassword: process.env.MicrosoftAppPassword
});

// Listen for messages from users 
server.post('/api/messages', connector.listen());

// Receive messages from the user and respond by echoing each message back (prefixed with 'You said:')
var bot = new builder.UniversalBot(connector, [
    function (session) {
        if (session.message.text === 'start_dialog') {
            return session.beginDialog('market');
        }

        var card = createHeroCard(session);
        // attach the card to the reply message
        var msg = new builder.Message(session).addAttachment(card);
        session.send(msg);

    }
]);

function createHeroCard(session) {
    return new builder.HeroCard(session)
        .title('Innovation Questionnaire')
        .subtitle('Every great business started with an idea')
        .text('To help better understand the potential of your idea, we\'ve developed a simple questionnaire.')
        .images([
            builder.CardImage.create(session, 'https://fexco.com/wp-content/uploads/2018/03/fexco-300x300.jpg')
        ])
        .buttons([
            builder.CardAction.postBack(session, 'start_dialog', 'Get Started')
        ]);
}

bot.dialog('market', questions.market);