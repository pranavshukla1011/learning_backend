const fs = require('fs');
const chalk = require('chalk');

const validator = require('validator');

let obj = {
  pranav: { pranav: 'I am pranav' },
  shukla: {
    shukla: 'I am pranav shukla',
  },
};

fs.writeFileSync('notes.json', JSON.stringify(obj));

obj = { ...obj, home: '2764' };

fs.writeFileSync('notes.json', JSON.stringify(obj));

const miles = 18;
const calculateFeet = (miles) => miles * 5280;

console.log(chalk`
	There are {bold 5280 feet} in a mile.
	In {bold ${miles} miles}, there are {bold.green ${calculateFeet(miles)} feet}.
`);
