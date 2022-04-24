import axios from "axios";

const url = "https://api.themoviedb.org/3";
const apiKey = "6a851542563066722e1623de3aea7044";
const searchUrl = `${url}/search/movie`
const movieUrl = `${url}/movie/`;
const genreUrl = `${url}/genre/movie/list`;
const moviesUrl = `${url}/discover/movie`;

export const fetchSearchMovies = async (searchValue) => {
    
    try {
        const { data } = await axios.get(searchUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1,
                query: searchValue
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((movie) => ({
            id: movie['id'],
            backPoster: posterUrl + movie['backdrop_path'],
            genre: movie['genre_ids'],
            popularity: movie['popularith'],
            title: movie['title'],
            poster: posterUrl + movie['poster_path'],
            overview: movie['overview'],
            rating: movie['vote_average'],
        }))

        return modifiedData;
    } catch (error) { console.log("search err"); }
}

// get movie list
export const fetchMovies = async (genre_id, currentPage) => {
    try {
        const { data } = await axios.get(moviesUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: currentPage >= 0 ? currentPage : 1,
                with_genres: genre_id
            }
        })
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const pages = data.total_pages;
        const modifiedData = data['results'].map((movie) => ({
            id: movie['id'],
            backPoster: posterUrl + movie['backdrop_path'],
            genre: movie['genre_ids'],
            popularity: movie['popularith'],
            title: movie['title'],
            poster: posterUrl + movie['poster_path'],
            overview: movie['overview'],
            rating: movie['vote_average'],
            pages
        }))
        return modifiedData;
    } catch (error) { return "ERROR 422" }
}

// get movies genres
export const fetchGenre = async () => {
    try {
        const { data } = await axios.get(genreUrl, {
            params: {
                api_key: apiKey,
                language: 'en_US',
                page: 1
            }
        })
        const modifiedData = data['genres'].map((genre) => ({
            id: genre['id'],
            name: genre['name']
        }))
        return modifiedData;
    } catch (error) { }
}

// get movie details 
export const fetchMovieDetails = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        return data;
    } catch (error) { }
}

//get movie cast
export const fetchCast = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/credits`, {
            params: {
                api_key: apiKey,
            }
        });
        const modifiedData = data['cast'].map((cast) => ({
            id: cast['cast_id'],
            character: cast['character'],
            name: cast['name'],
            img: 'https://image.tmdb.org/t/p/w200' + cast['profile_path'],
        }))

        return modifiedData;
    } catch (error) { }
}

// get similar movies
export const fetchSimilarMovies = async (id) => {
    try {
        const { data } = await axios.get(`${movieUrl}/${id}/similar`, {
            params: {
                api_key: apiKey,
                language: 'en_US'
            }
        });
        const posterUrl = 'https://image.tmdb.org/t/p/original/';
        const modifiedData = data['results'].map((movie) => ({
            id: movie['id'],
            backPoster: posterUrl + movie['backdrop_path'],
            popularity: movie['popularith'],
            title: movie['title'],
            poster: posterUrl + movie['poster_path'],
            overview: movie['overview'],
            rating: movie['vote_average'],
        }))

        return modifiedData;
    } catch (error) { }
}