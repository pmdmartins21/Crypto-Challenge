const fs = require('fs');
const fastcsv = require('fast-csv');

let stream = fs.createReadStream("Binance_BTCUSDT_1h.csv");
let csvData = [];
let csvStream = fastcsv
  .parse()
  .on("data", function(data) {
    csvData.push(data);
  })
  .on("end", function() {
    // remove the first line: header
    csvData.shift();

    // connect to the PostgreSQL database
    // save csvData
  });

stream.pipe(csvStream);