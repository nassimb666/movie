// import results from './movies.json' assert { type: 'json' };
// console.log(results.results[2]);


fetch('./movies.json')
    .then((response) => response.json())
    .then((movies) => {
        for (const movie of movies.results) {
            document.querySelector('#infos').innerHTML += `
                <p> ${ movie.title }</p >
                <p><i>${movie.release_date}</i></p>
                <img src="https://image.tmdb.org/t/p/original/${movie.poster_path}" alt="${movie.title}" />
            `
            console.log(movies.results);

        }
    })

