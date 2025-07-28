const movies = [
    {
        title: "The Matrix",
        year: "1999",
        type: "movie",
        poster: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNjJkZi00ZDI0LTlhODItYTk0YjJkYzRjMTY3XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg"
    },
    {
        title: "Inception",
        year: "2010",
        type: "movie",
        poster: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg"
    },
    {
        title: "Interstellar",
        year: "2014",
        type: "movie",
        poster: "https://m.media-amazon.com/images/I/81K8U5wBxbL._AC_SL1500_.jpg"
    }
];

document.getElementById("searchBtn").addEventListener("click", () => {
    const query = document.getElementById('searchInput').value.trim().toLowerCase();
    const movieList = document.getElementById('movieList');
    movieList.innerHTML = "";

    if (!query) {
        alert("Please enter a movie");
        return;
    }

    const results = movies.filter(movie => movie.title.toLowerCase().includes(query));

    if (results.length === 0) {
        movieList.innerHTML = `<p>No results found for "${query}".</p>`;
        return;
    }

    results.forEach((movie) => {
        const card = document.createElement("div");
        card.className = "movie-card";
        card.innerHTML = `
        <img src="${movie.poster}" alt="${movie.title}">
    <div> 
    <h3>${movie.title}</h3>
    <p> Year: ${movie.year}</p>
    <p>Type: ${movie.type}</p>
    </div>
    `;
        movieList.appendChild(card);
    });
});