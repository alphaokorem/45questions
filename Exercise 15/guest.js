// copied from Exercise 14
var guests = ["Muhammad Ali", "Khabib Nurmagomedov", "Salman Akbar"];
var invitation = ", you are invited to dinner at my house at 8 pm. Please arrive on time or the food will go cold.";
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation, "\n");
// now one of the guests need to be changed, and new invitations are to be sent
var x = guests.pop();
guests.push("Roshan Khan");
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation);
