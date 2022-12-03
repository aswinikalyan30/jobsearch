// const fetch = require("node-fetch")



const fetch = require("node-fetch"); // npm install node-fetch
let lattitude1, longitude1;

const a = async (address) => {
  const text = encodeURIComponent(address);
  const response = await fetch(
    `https://api.geoapify.com/v1/geocode/search?text=${text}&format=json&apiKey=eee48717b5304997ac9a1ef262456f49`
  );
  const data = await response.json();
  lattitude1 = data.results[0]?.bbox?.lat1;
  longitude1 = data.results[0]?.bbox?.lon1;
  return [lattitude1, longitude1];
};

module.exports = a;
