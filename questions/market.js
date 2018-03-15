var builder = require('botbuilder');
var options = require('./options');

module.exports = [

    function (session) {
        builder.Prompts.choice(
            session,
            'Is your solution sold to:-',
            ['Business (B2B)', 'Consumer (B2C)', 'Person-to-Person', 'Don\'t Know'],
            options.choiceDefaults
        );
    },

    function (session, results) {
        builder.Prompts.choice(
            session,
            'What product category does you idea sit in?',
            ['Payments', 'FX', 'Cryptocurrency', 'Money Transfer', 'Money Transfer', 'Retail', 'Mobile Service', 'Person-to-Person', 'Other'],
            options.choiceDefaults
        );
    },

    function (session, results) {
        builder.Prompts.choice(
            session,
            'Select the statement that best describes the size of your target market',
            ['Global Market', 'International Market', 'Local Market'],
            options.choiceDefaults
        );
    },

    function (session, results) {
        builder.Prompts.choice(
            session,
            'Is your target market growing?',
            ['Already growing fast today', 'About to take off', 'Growing steadily', 'Will be huge but doesn\'t exist yet', 'Stable', 'Don\'t know'],
            options.choiceDefaults
        );
    }

];

