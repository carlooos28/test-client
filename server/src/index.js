const express = require('express');
const hotels = require('./data/data.json');

const app = express();

// allow-cors
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(express.static(__dirname + '/public'));

app.get('/api/hotels', (req, res) => {
  res.json({
    hotels: hotels
  })
});

// localhost:3008/api/library/book?id=1
app.get('/api/hotel', (req, res, next) => {
  const {
    query: {
      id = 0
    }
  } = req;

  const selectedHotel = hotels.filter(hotel => hotel.id === id);

  res.json({
    response: selectedHotel
  });
});

app.listen(3008, function () {
  console.log('server on port 3008');
});