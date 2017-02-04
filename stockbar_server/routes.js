var express = require('express');

// Get the router
var router = express.Router();

var Drink = require('./models/drink');

// Middleware for all this routers requests
router.use(function timeLog(req, res, next) {
  console.log('Request Received: ', dateDisplayed(Date.now()));
  next();
});

// Welcome message for a GET at http://localhost:8080/restapi
router.get('/', function(req, res) {
    res.json({ message: 'Welcome to the REST API' });
});

function restructure_drinks(drinks) {
  var categories = []
  for (var i = 0; i < drinks.length; i++) {
    if (categories.find((cat) => cat.type === drinks[i].type)) {
      var cat = categories.find((cat) => cat.type === drinks[i].type)
      cat.drinks.push(drinks[i])
    }
    else {
      categories.push({type: drinks[i].type, drinks: [drinks[i]]})
    }
  }
  return categories
}

router.route('/drinks')
  .get(function(req, res) {
    Drink.find(function(err, drinks) {
        if (err)
            res.send(err);
        res.json(restructure_drinks(drinks));
  });
});


module.exports = router;

function dateDisplayed(timestamp) {
    var date = new Date(timestamp);
    return (date.getMonth() + 1 + '/' + date.getDate() + '/' + date.getFullYear() + " " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds());
}
