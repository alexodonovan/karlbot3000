var builder = require('botbuilder');

module.exports = {
    choiceDefaults: {
        maxRetries: 3,
        retryPrompt: 'Not a valid option',
        listStyle: builder.ListStyle.button
    }

};