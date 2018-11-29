const port = 3000;

var express = require ("express");
 
var app = express ();

app.get("/api", (req, res, next) => {
    res.json([
        {
            nom: 'café de Paris',
            cuisine: 'Française'
        },
        {
            nom: 'Sun City Café',
            cuisine: 'Américaine'
        }
    ]);
   });

app.listen (port, () => { 
    console.log ("Serveur fonctionnant sur le port "+port); 
});

