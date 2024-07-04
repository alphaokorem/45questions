function sandwitch (...items: string[]) {
  console.log(`Order: Sandwhich.\nThe following items are requested.\n`);
  for(let i of items) {
    console.log(i);
  } 
  console.log("\n")
  console.log("Thank you for ordering. Please wait while the sandwhich is being prepared.\n\n");
};


sandwitch("Chicken", "Ketchup");
sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf");
sandwitch("Meatballs", "Eggs", "Mayonese", "Mint leaf", "Pepper", "Cheese");

// Done by the help of Syeda Shanzay, https://youtu.be/c2uIDOlxSNM?si=iZ6n23loGB-8GeAc