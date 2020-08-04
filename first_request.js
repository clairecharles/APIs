// const request = require('request');
const rp = require('request-promise');

rp('http://www.google.com')
 .then((body) =>{
     const parsedData =JSON.parse(body)
    console.log(`${parsedData.name} lives in ${parsedData.address.city}`)
 })
 .catch((err) =>{
     console.log('error!', err)
 });
// });