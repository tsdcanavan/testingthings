var id;
var loginSuccess;

function addUser(loginName) {
    // login user and get the users key

    database.ref().on('value', function (snapshot) {
        if (userName === loginName) {
            id = snapshot.key;
            loginSuccess = true;
            return
        }

    });
    if (id === "") {
        loginSuccess = false;
    }
}