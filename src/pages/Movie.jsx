import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Row from "../components/Row";

const Movie = () => {
  const IMG_URL = "https://image.tmdb.org/t/p/original";
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [similar, setSimilar] = useState([]);
  const [providers, setProviders] = useState(null);
  const similarURL = `https://api.themoviedb.org/3/movie/${id}/similar?api_key=19b4c9f555ef2d92c85144e24978b57e`;

  useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=19b4c9f555ef2d92c85144e24978b57e`
      )
      .then((response) => {
        setMovie(response.data);
      });
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${id}/watch/providers?api_key=19b4c9f555ef2d92c85144e24978b57e`
      )
      .then((response) => {
        setProviders(response.data.results.AR.flatrate);
      });

    // console.log(movie);
    return () => setMovie(null);
  }, [id]);

  console.log(providers);

  return (
    <>
      {movie ? (
        <div className="w-full h-screen">
          <div className="absolute w-full h-full bg-gradient-to-r from-[#19191a] to-[#19191a]/30"></div>
          <div className="absolute w-full min-h-screen bg-gradient-to-t from-[#19191a]"></div>
          <img
            className="md:h-full w-full h-full object-cover"
            src={`${IMG_URL}${movie?.backdrop_path}`}
          />
          <div className="absolute top-36 left-5 md:top-32 md:left-20 flex gap-5 md:gap-10 md:w-1/2 flex-col-reverse md:flex-row">
            <img
              className="max-h-[280px] max-w-[200px] rounded border-white border-2 relative left-20 md:left-0"
              src={`${IMG_URL}${movie?.poster_path}`}
            />
            <div className="flex flex-col gap-5">
              <h1 className="text-white font-bold text-5xl uppercase">
                {movie?.title}
              </h1>
              <p className="text-white ">{movie?.overview}</p>
            </div>
          </div>

          <div className="absolute bottom-12 left-8 md:left-20">
            {providers && providers.length ? (
              <>
                <h2 className="text-white font-bold text-xl">See now</h2>
                <div className="flex gap-8 mt-5">
                  {providers?.map((provider, i) => (
                    <div
                      key={i}
                      className="w-[120px] flex flex-col items-center justify-center gap-2"
                    >
                      <img
                        className="max-w-16 max-h-16 rounded"
                        src={`${IMG_URL}${provider?.logo_path}`}
                      />
                      <h3 className="text-white text-xs">
                        {provider?.provider_name}
                      </h3>
                    </div>
                  ))}
                </div>
              </>
            ) : null}
          </div>

          <Row title="Similar" fetchURL={similarURL} />
        </div>
      ) : (
        <h1>Cargando...</h1>
      )}
    </>
  );
};

export default Movie;
