const port = 3000;

var express = require ("express");
var bodyParser = require("body-parser");

var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

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

// routage
    
app.get("/restaurants", (req, res, next) => { //retrieve all restaurants
    res.json(restaurants);
});

app.post("/restaurant", (req,res) => { //create a restaurant
    try{
        var r_nom = req.body.nom;
        var r_cuisine = req.body.cuisine;
            restaurants.push(
                {
                    nom: r_nom,
                    cuisine: r_cuisine
                }
            );
            console.log("[POST-CREATE] restaurant : "+r_nom+" "+r_cuisine);
            res.end("OK");
    }
    catch(e){
        res.end("ERROR "+e);
    }
});



// start server
app.listen (port, () => { 
    console.log ("Serveur fonctionnant sur le port "+port); 
});

