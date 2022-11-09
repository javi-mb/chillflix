import axios from "axios";
import { useEffect, useState } from "react";
import requests from "../Requests";
import { BsPlusCircleDotted } from "react-icons/bs";

const Main = () => {
  const [movies, setMovies] = useState([]);

  const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    axios.get(requests.requestPopular).then((response) => {
      setMovies(response.data.results);
    });
  }, []);

  //   console.log(movie);

  const truncateString = (str, num) => {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  };

  return (
    <div className="w-full h-[550px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[550px] bg-gradient-to-r from-[#19191a]"></div>
        <div className="absolute w-full h-[550px] bg-gradient-to-t from-[#19191a]"></div>
        <img
          className="w-full h-full object-cover object-top top-0"
          src={`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`}
          alt={movie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold ">{movie?.title}</h1>

          <div className="my-6 flex justify-start items-center">
            <button className="border bg-[#c9b977] text-black font-bold border-gray-300 py-1 px-12 rounded-full">
              PLAY
            </button>

            <BsPlusCircleDotted className="ml-4 cursor-pointer" size={35} />

            {/* <button className="border text-white border-white ml-4 px-2  text-4xl  rounded-full">
              +
            </button> */}
          </div>
          <p className="text-gray-400 text-sm">
            Released: {movie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {truncateString(movie?.overview, 170)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
