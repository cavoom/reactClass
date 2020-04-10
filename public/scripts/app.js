'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
// Running watch will automatically change this in scripts
// which is the converted code from Babel
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'Indecision App'
    ),
    React.createElement(
        'ol',
        null,
        React.createElement(
            'li',
            null,
            'Some word stuff here'
        ),
        React.createElement(
            'li',
            null,
            'Some more word stuff here'
        )
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'David Haas'
    ),
    React.createElement(
        'p',
        null,
        'Age: 54'
    ),
    React.createElement(
        'p',
        null,
        'Location: Southern Shores, NC'
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
