var express = require ("express");
 
var app = express ();

app.get("/api", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
   });

app.listen (3000, () => { 
    console.log ("Serveur fonctionnant sur le port 3000"); 
});

