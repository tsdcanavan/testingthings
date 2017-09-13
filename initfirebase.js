var database;

function initFirebase() {
    // initialize the firebase database
    var config = {
        apiKey: "AIzaSyAcRiiCDBcNgsBJA-ZQYa3jCNWh9u1YbNY",
        authDomain: "sellyourstuff-d04db.firebaseapp.com",
        databaseURL: "https://sellyourstuff-d04db.firebaseio.com",
        projectId: "sellyourstuff-d04db",
        storageBucket: "sellyourstuff-d04db.appspot.com",
        messagingSenderId: "37415365376"
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    database = firebase.database();
}