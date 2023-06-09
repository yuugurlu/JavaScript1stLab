console.log("I'm ready!");
// Iteration 1: Names and Input
// 1.1
let hacker1 = "Nisay";
// 1.2
console.log("The driver's name is", hacker1);
// 1.3
let hacker2 = "Yasin";
// 1.4
console.log("The navigator's name is", hacker2);

// Iteration 2: Conditionals
// 2.1
if (hacker1.length > hacker2.length) {
  console.log("The driver has the longest name, it has", hacker1.length, "characters.");
} else if (hacker2.length > hacker1.length) {
  console.log("It seems that the navigator has the longest name, it has", hacker2.length, "characters.");
} else {
  console.log("Wow, you both have equally long names,", hacker1.length, "characters!");
}

// Iteration 3
// 3.1
let driverName = "";
for (let i = 0; i < hacker1.length; i++) {
  driverName += hacker1[i].toUpperCase() + " ";
}
console.log(driverName.trim());

// 3.2
let navigatorName = "";
for (let i = hacker2.length - 1; i >= 0; i--) {
  navigatorName += hacker2[i];
}
console.log(navigatorName);

// 3.3
if (hacker1 < hacker2) {
  console.log("The driver's name goes first.");
} else if (hacker2 < hacker1) {
  console.log("Yo, the navigator goes first, definitely.");
} else {
  console.log("What?! You both have the same name?");
}

