// copied from Exercise 14

let guests : string[] = ["Muhammad Ali", "Khabib Nurmagomedov", "Salman Akbar"];
let invitation : string = ", you are invited to dinner at my house at 8 pm. Please arrive on time or the food will go cold.";
// old invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation, "\n");

console.log("'Salman Akbar' can not make it to the dinner.\n");

// modifying list
guests.pop();
guests.push("Roshan Khan");

// new invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation);

// Done.