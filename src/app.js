console.log('App.js is running!');

// JSX - JavaScript XML
// Running watch will automatically change this in scripts
// which is the converted code from Babel
var template = <h1>Indecision App</h1>;
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
