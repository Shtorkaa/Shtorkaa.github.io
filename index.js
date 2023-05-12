const cheerio = require('cheerio');
const axios = require('axios');


const url = 'https://uaviak.ru/pages/raspisanie-/#tab3'; // Replace with your desired URL

function startsWithNumber(str) {
    return /^\d/.test(str);
}
  
function splitByTab(str) {
    Arr = str.split('\t')
    return Arr 
}

axios.get(url)
  .then(response => {
    const html = response.data;
    const $ = cheerio.load(html);


    const divBody = $('div.body').children('p');
    
    divBody.each((i, div) => {
        var line = $(div).text()
        if (startsWithNumber(line)){
            console.log(splitByTab(line))
        }
        
    });
    
  })
  .catch(error => {
    console.log(error);
  });
