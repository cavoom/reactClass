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
}
var template = (
    <div>
        <h1>{userStuff.name}</h1>
        <p>{userStuff.age}</p>
        <p>{userStuff.location}</p>
    </div>
);

var template2 = (
<div>
    <h1>{userName.toUpperCase()}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
    </div>
);
var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
