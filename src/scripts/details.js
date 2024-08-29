const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhMTIwYmQzNjM1YWVlNjg3OGIxMTJlNzliMDg3ZjU5ZCIsIm5iZiI6MTcyMTg0NDY3Mi4zOTczNjcsInN1YiI6IjY2YTE0MzE1OWU3NWZkZDBjOTI2M2VhZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7_dW4LVhTCc0DHQv9lhm0DH545jARGrjDVYCxnwmXwo'
    }
};
let imgURL = "https://image.tmdb.org/t/p/original/";
// fetch('https://api.themoviedb.org/3/authentication', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));



// fetch('https://api.themoviedb.org/3/movie/now_playing?language=es-ES&page=1&region=es', options)

// MejorPuntuadasES
// fetch('https://api.themoviedb.org/3/movie/top_rated?language=es-ES&page=1', options)

// ALLTRENDING
let id = 573435;
let type = "movie"
fetch('https://api.themoviedb.org/3/${type}/${id}?language=es-ES', options)
    
    .then(response => response.json())
    .then((data) => {
        const response = data.results;
        document.innerHTML = 


    })
    .catch(err => console.error(err));
