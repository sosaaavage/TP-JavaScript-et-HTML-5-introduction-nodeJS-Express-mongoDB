const port = 3000;

var express = require ("express");
 
var app = express ();

// routage
    
app.get("/api", (req, res, next) => { //return all restaurants
    res.json(restaurants);
   });

// init restaurants datas
var restaurants = [];
restaurants.push(
    {
        nom: 'Café de Paris',
        cuisine: 'Française'
    },
    {
        nom: 'Sun City Café',
        cuisine: 'Américaine'
    }
);

// start server
app.listen (port, () => { 
    console.log ("Serveur fonctionnant sur le port "+port); 
});

