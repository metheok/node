const fs = require("fs");

const fileName = "data.txt";
const reader = fs.readFileSync(fileName);
const length = reader.toString().trim().split(/\s+/).length;
console.log(
  `Total number of words in the text file ${fileName} ${
    length > 1 ? "are" : "is"
  } ${length}`
);
