const key = "19b4c9f555ef2d92c85144e24978b57e";

const requests = {
  // requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`,
  requestPopular: `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${key}`,
  requestTopRated: `https://api.themoviedb.org/3/movie/top_rated?api_key=${key}&language=en-US&page=1`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=2`,
  requestHorror: `https://api.themoviedb.org/3/search/movie?api_key=${key}&language=en-US&query=horror&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}&language=en-US&page=1`,
  requestOther: `https://api.themoviedb.org/3/discover/movie?with_genres=53&api_key=${key}`,
  requestAnimation: `https://api.themoviedb.org/3/discover/movie?with_genres=16&api_key=${key}`,
  requestComedy: `https://api.themoviedb.org/3/discover/movie?with_genres=35&api_key=${key}`,
};

export default requests;
