const port = 3000;

var express = require ("express");
var bodyParser = require("body-parser");

var app = express();

//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// init restaurants datas
data = require('./restaurants.json');
var restaurants = data; 

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

