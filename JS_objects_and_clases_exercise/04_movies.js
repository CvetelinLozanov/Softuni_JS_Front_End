function solve(movies) {
    const moviesInfo = {}

    movies.forEach(movie => {
        if ( movie.includes('addMovie')) {
            const [_, name] = movie.split('addMovie ');
            moviesInfo[name] = { name };
        } else if ( movie.includes('directedBy')) {
            const [name, director] = movie.split(' directedBy ');
            if ( moviesInfo.hasOwnProperty(name) ) moviesInfo[name].director = director;
        } else if ( movie.includes('onDate') ) {
            const [name, date] = movie.split(' onDate ');
            if ( moviesInfo.hasOwnProperty(name) ) moviesInfo[name].date = date;
        }
    });

    for (const movie in moviesInfo) {
        if ( Object.keys(moviesInfo[movie]).length > 2 ) console.log(JSON.stringify(moviesInfo[movie]));
    }
}

solve([
        'addMovie The Avengers',
        'addMovie Superman',
        'The Avengers directedBy Anthony Russo',
        'The Avengers onDate 30.07.2010',
        'Captain America onDate 30.07.2010',
        'Captain America directedBy Joe Russo'
        ])