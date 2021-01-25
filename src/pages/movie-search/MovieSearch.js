import React, {useState} from 'react'; 
import './style.css'; 

function MovieSearch() { 
    const [query, setQuery] = useState('')
    const [movies, setMovies] = useState([])

    const searchMovies = async (e) => {
        e.preventDefault();
        console.log("submitting");
        
        const query = "Jurassic Park";
        const url = `https://api.themoviedb.org/3/search/movie?api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMDdiYmEwOGY4M2E4ZjhiM2VlOTVjNmRjZDhkZjc5OCIsInN1YiI6IjVmYjZiNTc0Y2Y0YjhiMDA0MDg4ODM2YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mqg3FNOHT6LbiBsh9MPDbbxkzpIH7MjIlMnz5zBVxbU=${query}&page=1&include_adult=true`;       

        try {
            const res = await fetch(url);
            const data  = await res.json();
            setMovies(data.results);
        }catch(err){
            console.error(err);
        }
    }

    return(
        <section className="movie-search-wrapper lg:py-10 bg-green-100">
            <h3>This is a Movie Search App</h3>
            <div className="movie-search-main"> 
                <div className="movie-search-content"> 
                    <h2 className="p-2">Movie Seearch App</h2>

                    <form className="movie-search-form" onSubmit={searchMovies}>
                        <label htmlFor="query" className="label p-2">
                            Movie Name
                        </label>
                        <input 
                            type="text" 
                            placeholder="search here" 
                            name="query" 
                            className="p-1"
                            value={query} onChange={(e) => setQuery(e.target.value)}
                        />
                        <button 
                            className="movie-search-btn py-2 px-4 mx-2 bg-indigo-500 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75" 
                            type="submit">
                            Search
                        </button>
                    </form>
                    <div className="card-list">
                        {movies.filter(movie => movie.poster_path).map(movie => (
                            <div className="card" key={movie.id}>
                                <img className="card--image"
                                    src={`https://image.tmdb.org/t/p/w185_and_h278_bestv2/${movie.poster_path}`}
                                    alt={movie.title + ' poster'}
                                />
                                <div className="card--content">
                                    <h3 className="card--title">{movie.title}</h3>
                                    <p><small>RELEASE DATE: {movie.release_date}</small></p>
                                    <p><small>RATING: {movie.vote_average}</small></p>
                                    <p className="card--desc">{movie.overview}</p>
                                </div>
                            </div>
                        ))} 
                    </div> 
                </div>
            </div>
        </section>
    )
}

export default MovieSearch