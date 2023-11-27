import { API_KEY } from '@env';

const CATEGORIES_NAMES = ['comedy', 'romances', 'documentaries'];
const CATEGORIES_IDS = [35, 10749, 99];

const getIdCategory = (category: string | typeof CATEGORIES_NAMES[number]): typeof CATEGORIES_IDS[number] => {
 let index = CATEGORIES_NAMES.indexOf(category)
 return CATEGORIES_IDS[index];
}

const API_IMG = 'https://image.tmdb.org/t/p/original';
const API_MOVIE = 'https://api.themoviedb.org/3/discover/tv';

const fetchJson = async (url: string ): Promise<any> => {
 try {
   let response = await fetch(url);
   return await response.json();
 } catch (error) {
   console.log('error fetchJson: ', error)
   throw error;
 }
};

type Movie = {
 id: number
 name: string
 poster_path: string
 backdrop_path: string
};

const getMovies = async ( category: string | typeof CATEGORIES_NAMES[number] ): Promise<Movie[]> => {
 let url = `${API_MOVIE}?api_key=${API_KEY}&with_genres=${getIdCategory(category)}`;
 let response = await fetchJson(url);
 return await response.results;
};

const getPosterURI = (movie:Movie): string => {
 return `${API_IMG}${movie.poster_path}`;
};

const getBackdropURI = (movie:Movie): string => {
 return `${API_IMG}${movie.backdrop_path}`;
};

export { Movie, getMovies, getBackdropURI, getPosterURI };
