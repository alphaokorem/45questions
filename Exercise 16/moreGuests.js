// copied from Exercise 14 and 15
var guests = ["Muhammad Ali", "Khabib Nurmagomedov", "Salman Akbar"];
var invitation = ", you are invited to dinner at my house at 8 pm. Please arrive on time or the food will go cold.";
// old invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation, "\n");
console.log("'Salman Akbar' can not make it to the dinner.\n");
guests.pop();
guests.push("Roshan Khan");
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation + "\n");
console.log("I am very glad to inform you that I have found a bigger dinning table. To use this to our advantage, I will be inviting more guests to dine with us.\n");
// new guest in the begining of the array
guests.unshift("Anas Naeem");
// new guest in the middle of the array
guests.splice(2, 0, "Muhamad Usman");
// new guest in the end of the array
guests.push("Shehriyar Ali");
// new invites
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
console.log(guests[2] + invitation);
console.log(guests[3] + invitation);
console.log(guests[4] + invitation);
console.log(guests[5] + invitation);
// Done.
