const port = 3000;

var express = require ("express");
var bodyParser = require("body-parser");

var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// routage
    
app.get("/api", (req, res, next) => { //return all restaurants
    res.json(restaurants);
});

app.post("/api", (req,res) => {
    var r_nom = req.query.nom;
    var r_cuisine = req.query.cuisine;
    
    try{
        restaurants.push(
            {
                nom: r_nom,
                cuisine: r_cuisine
            }
        );
        res.end("OK");
    }
    catch(e){
        res.end("ERROR "+e);
    }
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

