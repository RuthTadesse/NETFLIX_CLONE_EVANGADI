const API_key = "0f735b81689448fa840e85a3223185cc";
// const API_KEY=import.meta.em.vite.API_KEY;
//
// const API_key = process.env.REACT_APP_API_KEY; but i dont know for vite.....i'll figure it out

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_key}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_key}&with_networks=213`,
    fetchTopRatedMovies: `/movie/top_rated?api_key=${API_key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_key}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_key}&with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_key}&with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_key}&with_genres=10749`,
    fetchDocumentaries: `/discover/movie?api_key=${API_key}&with_genres=99`,
    fetchTvShow: `tv/popular?api_key=${API_key}&language=en-US&page=1`,
  };
  export default requests ;