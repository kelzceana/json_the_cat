const request = require('request');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let searchBreed = process.argv.slice(2)[1];
let searchUrl = `${process.argv.slice(2)[0]}?q=${searchBreed}`;
request(searchUrl, (error, resp, body) => {
  const data = JSON.parse(body);
  try {
    console.log(data[0].description);
  } catch (err) {
    console.log(`No ${searchBreed} breed found`);
  }
});

rl.close();