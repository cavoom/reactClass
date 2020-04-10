console.log('App.js is running!');

// JSX - JavaScript XML
// Running watch will automatically change this in scripts
// which is the converted code from Babel
var template = (
    <div>
        
        <h1>Indecision App</h1>
        <ol>
        <li>Some word stuff here</li>
        <li>Some more word stuff here</li>
        </ol>
    </div>
);

var template2 = (
<div>
    <h1>David Haas</h1>
    <p>Age: 54</p>
    <p>Location: Southern Shores, NC</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template2, appRoot);
