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
          "nom": "française",
          "cuisine": "Insuron"
        },
        {
          "nom": "gastronomique",
          "cuisine": "Geofarm"
        },
        {
          "nom": "corse",
          "cuisine": "Evidends"
        },
        {
          "nom": "américaine",
          "cuisine": "Artiq"
        },
        {
          "nom": "américaine",
          "cuisine": "Exozent"
        },
        {
          "nom": "américaine",
          "cuisine": "Trasola"
        },
        {
          "nom": "corse",
          "cuisine": "Radiantix"
        },
        {
          "nom": "bretonne",
          "cuisine": "Poochies"
        },
        {
          "nom": "française",
          "cuisine": "Quarmony"
        },
        {
          "nom": "italienne",
          "cuisine": "Exiand"
        },
        {
          "nom": "bretonne",
          "cuisine": "Concility"
        },
        {
          "nom": "bretonne",
          "cuisine": "Silodyne"
        },
        {
          "nom": "américaine",
          "cuisine": "Darwinium"
        },
        {
          "nom": "marocaine",
          "cuisine": "Eplosion"
        },
        {
          "nom": "italienne",
          "cuisine": "Kyagoro"
        },
        {
          "nom": "marocaine",
          "cuisine": "Ontagene"
        },
        {
          "nom": "espagnole",
          "cuisine": "Egypto"
        },
        {
          "nom": "niçoise",
          "cuisine": "Bizmatic"
        },
        {
          "nom": "mexicaine",
          "cuisine": "Tropolis"
        },
        {
          "nom": "gastronomique",
          "cuisine": "Xleen"
        },
        {
          "nom": "française",
          "cuisine": "Zomboid"
        },
        {
          "nom": "gastronomique",
          "cuisine": "Aquoavo"
        },
        {
          "nom": "niçoise",
          "cuisine": "Snips"
        },
        {
          "nom": "niçoise",
          "cuisine": "Bitrex"
        },
        {
          "nom": "corse",
          "cuisine": "Otherside"
        },
        {
          "nom": "corse",
          "cuisine": "Bitendrex"
        },
        {
          "nom": "mexicaine",
          "cuisine": "Bunga"
        },
        {
          "nom": "espagnole",
          "cuisine": "Waab"
        },
        {
          "nom": "bretonne",
          "cuisine": "Geekol"
        },
        {
          "nom": "gastronomique",
          "cuisine": "Izzby"
        },
        {
          "nom": "niçoise",
          "cuisine": "Isotronic"
        },
        {
          "nom": "américaine",
          "cuisine": "Eclipto"
        },
        {
          "nom": "française",
          "cuisine": "Assistia"
        },
        {
          "nom": "américaine",
          "cuisine": "Dadabase"
        },
        {
          "nom": "mexicaine",
          "cuisine": "Telpod"
        },
        {
          "nom": "bretonne",
          "cuisine": "Prismatic"
        },
        {
          "nom": "française",
          "cuisine": "Portaline"
        },
        {
          "nom": "espagnole",
          "cuisine": "Cujo"
        },
        {
          "nom": "niçoise",
          "cuisine": "Techmania"
        }
);

// routage
    
app.get("/api/restaurants", (req, res, next) => { //retrieve all restaurants
    console.log("[GET] restaurants");
    res.json(restaurants);
});

app.post("/api/restaurant", (req,res) => { //create a restaurant
    try{
        var r_nom = req.body.nom;
        var r_cuisine = req.body.cuisine;
        if(typeof r_nom != "undefined" && r_cuisine != "undefined"){
            restaurants.push(
                {
                    nom: r_nom,
                    cuisine: r_cuisine
                }
            );
            console.log("[POST-CREATE] restaurant : "+r_nom+" "+r_cuisine);
            res.end("OK");
        }
        else{
            res.end("ERROR : undefined values into body");
        }
            
    }
    catch(e){
        res.end("ERROR "+e);
    }
});

app.put("/api/restaurant/:id",(req,res) => {
    var id = req.params.id;

    if(id>=0 && id <restaurants.length){
        var restaurant_selected = restaurants[id];
        var r_nom = req.body.nom;
        var r_cuisine = req.body.cuisine;
        var log = "";

        if(typeof r_nom !== "undefined"){
            restaurant_selected.nom = r_nom;
            log = log + " nom updated, new value : "+r_nom;
        }
        if(typeof r_nom !== "undefined"){
            restaurant_selected.cuisine = r_cuisine;
            log = log + " cuisine updated, new value : "+r_cuisine;
        }
        else if(r_nom !== "undefined" && r_cuisine !== "undefined"){
            res.end("ERROR : undefined values into body");
        }
        console.log("[PUT-UPDATE] restaurant id "+id+" -> "+log);
        res.end("OK");
    }
    else{
        res.end("ERROR : ID not valid : must be between "+restaurants.length);
    }
});

app.delete("/api/restaurant/:id",(req,res) => {
    var id = req.params.id;
    if(id>=0 && id <restaurants.length){
        var restaurant_selected = restaurants[id];
        restaurants.splice(id,1);
        console.log("[DELETE] restaurant id "+id);
        res.end("OK");
    }
    else{
        res.end("ERROR : ID not valid : must be between "+restaurants.length);
    }

});


// start server
app.listen (port, () => { 
    console.log ("Serveur fonctionnant sur le port "+port); 
});

