var current_users = [
    "monkeydluffy",
    "alizafar123",
    "alphaokorem",
    "salmanakbar43",
    "decentdescent"
];
var new_users = [
    "alizafar123",
    "mcraftun222",
    "decentdescent",
    "shahzaibkhan257",
    "mrpythagoras",
    "Alphaokorem",
    "ALPHAOKOREM"
];
new_users.forEach(function (user) {
    if (user.toLowerCase() === current_users[0] ||
        user.toLowerCase() === current_users[1] ||
        user.toLowerCase() === current_users[2] ||
        user.toLowerCase() === current_users[3] ||
        user.toLowerCase() === current_users[4]) {
        console.log("Username entered,", user + ".");
        console.log("This username is not available. Please try a different one.\n");
    }
    else {
        console.log("Username entered,", user + ".");
        console.log("This username is available.\n");
    }
});
