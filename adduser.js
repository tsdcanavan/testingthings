var id;

function initFirebase() {
    // initialize the firebase database
    console.log("init firebase");
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
function addUser() {
    // add user and get the users key
    console.log("add User");
    database.ref().push({
        userName: "my name",
        userEmail: "email@email.com",
        userPwd: "xxxyyy",
        userLocation: {
            city: "somerset",
            state: "NJ",
            zip: "08873"
        }
    });
}

function listUserKey() {
    database.ref().on('child_added', function(snapshot) {
        id = snapshot.key;
        if (snapshot.val().userEmail === "email@email.com") {
            console.log(id);
            console.log("found " + snapshot.val().userEmail);
        }
    });
}


initFirebase();
listUserKey();

