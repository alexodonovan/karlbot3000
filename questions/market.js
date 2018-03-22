var builder = require('botbuilder');
var options = require('./options');

module.exports = [

    //question 1.1
    function (session) {
        builder.Prompts.text(session, 'What problem are you proposed to solve');
    },

    //question 1.2
    function (session) {
        builder.Prompts.text(session, 'For whom? Broad definition of the target users');
    },

    //question 1.3
    function (session) {
        builder.Prompts.text(session, 'How will you solve this problem?');
    },

    //question 1.4
    function (session) {
        builder.Prompts.text(session, 'How can FEXCO create a competitive advantage?');
    },

    //question 2
    function (session) {
        builder.Prompts.choice(
            session,
            'Is your solution sold to:-',
            ['Business (B2B)', 'Consumer (B2C)', 'Person-to-Person', 'Don\'t Know'],
            options.choiceDefaults
        );
    },

    //question 3
    function (session, results) {
        builder.Prompts.choice(
            session,
            'What product category does you idea sit in?',
            ['Payments', 'FX', 'Cryptocurrency', 'Money Transfer', 'Retail', 'Mobile Service', 'Person-to-Person', 'Other'],
            options.choiceDefaults
        );
    },

    //question 4
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Select the statement that best describes the size of your target market',
            ['Global Market', 'International Market', 'Local Market'],
            options.choiceDefaults
        );
    },

    //question 5
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Is your target market growing?',
            ['Already growing fast today', 'About to take off', 'Growing steadily', 'Will be huge but doesn\'t exist yet', 'Stable', 'Don\'t know'],
            options.choiceDefaults
        );
    },

    //question 5.5
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Which of the following best describes your idea?',
            ['It\'s totally new - nothing like it in the market', 'There are similar products but mine has a unique twist', 'There are similar ideas but FEXCO can execute better'],
            options.choiceDefaults
        );
    },

    //question 6
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Describe the level of competition in your target market',
            ['Highly competitive with lots of players', 'Small number of well established players', 'There is no competition yet'],
            options.choiceDefaults
        );
    },


    //question 7
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Is the market for your product regulated?',
            ['Yes', 'No'],
            options.choiceDefaults
        );
    },

    //question 8
    function (session, results) {
        builder.Prompts.choice(
            session,
            'What is the potential reach of your product?',
            ['Small number of high value customers', 'Large number of high value customers', 'Large number of low value customers', 'Small number of low value customers'],
            options.choiceDefaults
        );
    },

    //question 9
    function (session, results) {
        builder.Prompts.choice(
            session,
            'What is your level of confidence that this product can be built and can impact the target market?',
            ['High', 'Medium', 'Low'],
            options.choiceDefaults
        );
    },

    //question 10
    function (session, results) {
        builder.Prompts.choice(
            session,
            'What\'s your guess about how complex it will be to build your product?',
            ['Very complex', 'Quite complex', 'Not at all complex'],
            options.choiceDefaults
        );
    },

    //question 11
    function (session, results) {
        builder.Prompts.choice(
            session,
            'How easy would it be for your idea to be copied and launched by a competitor',
            ['Very easy', 'Quite easy', 'Not at all easy'],
            options.choiceDefaults
        );
    },

    //question 12
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Which one of these statements best describes the effect of your product?',
            ['It creates a totally new market or product category', 'It would radically change and existing market', 'It would improve and existing market'],
            options.choiceDefaults
        );
    },

    //question 13
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Would your solution be a significant improvement on current options available?',
            ['Definitely', 'To some degree', 'Not really'],
            options.choiceDefaults
        );
    },

    //question 14
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Is your product?',
            ['Faster to use', 'Cheaper to use', 'Easier to use', 'All three'],
            options.choiceDefaults
        );
    },

    //question 15
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Are customers in the market actively seeking a new and improved solution?',
            ['Yes', 'No'],
            options.choiceDefaults
        );
    },

    //question 16
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Do you personally have significant experience in this product area?',
            ['Yes', 'No'],
            options.choiceDefaults
        );
    },

    //question 17
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Does FEXCO have relevant technical or commercial skills?',
            ['Yes', 'No'],
            options.choiceDefaults
        );
    },

    //question 18
    function (session, results) {
        builder.Prompts.choice(
            session,
            'For FEXCO, would your solution deliver?',
            ['Access to a new market', 'A new revenue stream', 'Additional profit from an existing revenue stream', 'Higher efficiency/lower costs'],
            options.choiceDefaults
        );
    },

    //question 19
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Here is  a list of current treads in the market, please select all that are relevant to your idea',
            ['Sense of membership/community/belonging', 'on-demand services', 'creates increased trust', 'service personalisation', 'create new experiences', 'crowd-sourcing', 'combining physical and digital', 'simplification', 'transparency', 'increased control'],
            options.choiceDefaults
        );
    },

    //question 20
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Here is a list of business models, please select all that are relevant to your idea',
            ['ad supported', 'micro transactions', 'subscription', 'premium', 'bundled pricing (with other services', 'revenue share', 'licensing (e.g. licensing the solution to another business', 'add-on (upsell like on Ryanair website', 'peer-to-peer (helping people buy from other people'],
            options.choiceDefaults
        );
    },

    // question 21
    function (session, results) {
        builder.Prompts.choice(
            session,
            'Here is a list of technologies, please select any that may be relevant to your idea',
            ['micro payments', 'cloud', 'mobile', 'real time location', 'cryptocurrencies', 'IoT & sensors', 'blockchain', 'machine learning & AI', 'virtual reality & augmented reality', 'data visualisation'],
            options.choiceDefaults
        );
    },

    //wrap up
    function (session, results) {
        session.send('That\'s it! All the questions are answered');
        session.send(' Give us a second while we look at the data...');
    }



];

