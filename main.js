const options = {
    method: 'GET',
    headers: {
    }
};

const APIKEY = "live_PzBU9rP2xydLAXhiyGEsY1xRotmIwRM12MyWYV0OxYf0OAWw6y5PKAt5X6XHhsjQ";
// const APIKEY = "live_PzBU9rP2xydLAXhiyGEsY1xRotmIwRM12MyWYV0OxYf0OAWw6y5PKAt5X6XHhsjQ";
const CATAPI = "https://api.thecatapi.com/v1/images/search?limit=10&has_breeds=1&api_key=";


fetch(CATAPI, {
    headers: {
        'x-api-key': APIKEY
    }
})
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        const cat = data;
        const container = document.getElementById('containerCats');
        // let color="bg-success";
        // let textColor="text-white";
        // let puntuacion;
                    // <img src="${cat.url} " class="card-img-top" alt="${cat.id}" >

        cat.forEach(cat => {

            // window.alert(puntuacion+" "+movie.vote_average+" "+color+" "+textColor);
            const card = document.createElement('div');
            card.className = 'card col-md-3';
            card.style.width = '25rem';
            card.style.height = '40rem';

            card.innerHTML = `
                
                <div class="imgcontainer" style="background-image: url(${cat.url})">
                    
                </div>
                 <div class="card-body">
                    <h2 class="card-title">${cat.breeds[0].name}</h2>
                    <p class="card-text">${cat.breeds[0].description}</p>

                </div>
     

            `;

            container.appendChild(card);
        });
    })
    .catch(err => console.error(err));
