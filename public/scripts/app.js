'use strict';

console.log('App.js is running!');

// JSX - JavaScript XML
// Running watch will automatically change this in scripts
// which is the converted code from Babel

var userName = "David";
var userAge = 'Age: 54';
var userLocation = 'Location: Southern Shores, NC';

var userStuff = {
    name: "David Haas",
    age: 'Age : 54',
    location: "Location : Southern Shores, NC"
};
var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userStuff.name
    ),
    React.createElement(
        'p',
        null,
        userStuff.age
    ),
    React.createElement(
        'p',
        null,
        userStuff.location
    )
);

var template2 = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        userName.toUpperCase()
    ),
    React.createElement(
        'p',
        null,
        'Age: ',
        userAge
    ),
    React.createElement(
        'p',
        null,
        'Location: ',
        userLocation
    )
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
