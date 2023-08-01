const readline = require("readline").createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question(
  "Write down numbers in an array and end by pressing enter key:  \n",
  (array) => {
    try {
      array = JSON.parse(array);
    } catch (e) {
      console.log(`\nInvalid array. Please try again!\n`);
      readline.close();
      return;
    }
    if (!Array.isArray(array)) {
      console.log(`\nInvalid array. Please try again!\n`);
      readline.close();
      return;
    }
    let sum = 0;
    array.forEach((ele) => {
      sum += isNaN(ele) ? 0 : Number(ele);
    });
    console.log(`\nArray of numbers is ${array} and its sum is ${sum}\n`);
    readline.close();
  }
);
