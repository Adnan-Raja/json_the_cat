const request = require('request');
//const input = process.argv.slice(2);


const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, responses, body) => {
    const data = JSON.parse(body);
    if (error) {
      callback(error, null);
    } else if (data.length === 0) {
      callback("Error: Breed not found", null);
    } else {
      callback(null, data[0].description);
    }
  });
};
module.exports = { fetchBreedDescription };
  
// else if (data['message'] === `"message":"404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"`) {
// //     console.log(`Error: "404 - please consult the documentation for correct url to call. https://docs.thecatapi.com/"`);
// //   } else{
// //   //console.log(data);
// //   //console.log(typeof data);
// //   console.log(data[0].description);
// // //console.log(data[0].name);
// // //console.log("This is a:",typeof data)
// //   }
// });
