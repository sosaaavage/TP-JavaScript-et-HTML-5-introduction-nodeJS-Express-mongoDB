window.onload=init;

function init() {
    new Vue({
        el: "#app",
        data: {
            restaurants: [
                {
                    nom: 'café de Paris',
                    cuisine: 'Française'
                },
                {
                    nom: 'Sun City Café',
                    cuisine: 'Américaine'
                }
            ],
            nom: '',
            cuisine: ''
        },
        mounted(){
                console.log("zboub");
                this.getRestaurants();
        },
        methods: {
            modifierRestaurant: function (event) {
                var h3 = document.createElement("h3");
                var inputNom = document.createElement("input");
                document.body.appendChild(h3);
                h3.innerHTML ="Nom";
                h3.appendChild(inputNom);
                var br = document.createElement("br");
                h3.appendChild(br);
                h3.innerHTML +="Cuisine";
                var inputCuisine = document.createElement("input");
                h3.appendChild(inputCuisine);
                var buttonSubmit = document.createElement("button");
                buttonSubmit.innerHTML = "Valider";
                var br = document.createElement("br");
                h3.appendChild(br);
                h3.appendChild(buttonSubmit);
              },
            getRestaurants() {
                let url = "http://localhost:3000/api/restaurants";
                console.log("Je vais chercher les restaurants sur : " + url);
                fetch(url,{mode:"no-cors"})
                    .then((reponseJSON) => {
                        //console.log("reponse json");
                        return reponseJSON.json();
                    })
                    .then((reponseJS) => {
                        // ici on a une réponse en JS
                        this.restaurants = reponseJS.data;
                        //this.nbRestaurants = reponseJS.count;
                    })
                    .catch((err) => {
                        console.log("Une erreur est intervenue " + err);
                    })
            },
            supprimerRestaurant(index) {
                this.restaurants.splice(index, 1);
            },
            ajouterRestaurant(event) {
                // eviter le comportement par defaut
                event.preventDefault();

                this.restaurants.push(
                    {
                        nom: this.nom,
                        cuisine: this.cuisine
                    }
                );
                this.nom = "";
                this.cuisine = "";
            },
            getColor(index) {
                return (index % 2) ? 'lightBlue' : 'pink';
            }
        }
    })
}
