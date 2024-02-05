let button = document.getElementById('button');


//  apres que l'API est appelé, on va integrer les données vers notre HTML à partir de leur ID
let image = document.getElementById('image');
let pokeNumber = document.getElementById('number');
let pokeName = document.getElementById('name');

const changePokemon = async () => {
    //on va faire l'appel vers l'API

    //on va prendre un nombre aléatoire de POKEMON

    //on veut avoir un nombre entre [1;151[ donc on va multiplier le random avec le nombre le plus haut cad 150
    let randomNumber = Math.ceil(Math.random() * 150 ) +1; 

    //on va génerer dynamiquement l'URL vers laquelle on va faire la requete
    //puis on va génerer ce nombre aléatoire dans la requete
    
    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`;

    //avec JS on fait la requete avec FETCH et cette fonction FETCH va renvoyer la reponse
    let data = await fetch(requestString);

    //on va imprimer l'URL
    console.log(data);

    //sur la reponse sur F12 sur console, on va convertir le body en Json
    let response =await data.json();
    console.log(response);

    //image.src == l'attribut source va changer
    //on l'accede avec "response.sprites.front_default;" satri zai no hita tao amle console F12
    image.src = response.sprites.front_default;
    pokeNumber.textContent = `#${response.id}`;
    pokeName.textContent = response.name;
};
//on va appeler la fonction pour l'initialiser
changePokemon();
button.addEventListener('click',changePokemon);