const request = require('request');
const input = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${input}`, (body) => {
//console.log(typeof body)
  const data = JSON.parse(body);
  if (data.length === 0) {
    console.log("Error: Breed not found");
  } else if (data['message'] === `"message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"`) {
    console.log(`Error: "404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"`);
  }
  //console.log(data);
  //console.log(typeof data);
  console.log(data[0].description);
//console.log(data[0].name);
//console.log("This is a:",typeof data)
});