// copied from Exercise 14 and 15 and 16
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
console.log(guests[5] + invitation + "\n");
console.log("I am now very sorry to inform you that the table that I had arranged won't be arriving in time. So I will have to limit the invitations. I will review the list and send invites again.\n");
var apology = ", I am very sorry that I cannot invite you to dinner.";
var x = guests.pop();
console.log(x + apology);
x = guests.pop();
console.log(x + apology);
x = guests.pop();
console.log(x + apology);
x = guests.pop();
console.log(x + apology + "\n");
console.log(guests[0] + invitation);
console.log(guests[1] + invitation);
// Done.