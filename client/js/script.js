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
                this.getRestaurants();
        },
        methods: {
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
