var builder = require('botbuilder');

module.exports = [

    function (session) {
        builder.Prompts.choice(
            session,
            'Is your solution sold to:-',
            ['Business', 'Consumer'],
            {
                maxRetries: 3,
                retryPrompt: 'Not a valid option',
                listStyle: builder.ListStyle.button
            }
        );
    },

    function (session, results){
        session.dialogData.category = results.response.entity;
        session.send('You choose %s', session.dialogData.category);

    }

];

