import { useEffect, useState } from "react";

import "./Row.css";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import React from 'react'

export default function Row({ title, fetchUrl, isLargeRow }) {
    const [movies, setMovie] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
  
    const base_url = "https://image.tmdb.org/t/p/original";
  
    useEffect(() => {
      (async () => {
        try {
          const request = await axios.get(fetchUrl);
          setMovie(request.data.results);
        } catch (error) {
          console.log("error", error);
        }
      })();
    }, [fetchUrl]);

    // each time when new fetchurl arrives it will update 






    const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
            (url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            }
          );
        }
      };
      const opts = {
        height: "390",
        width: "100%",
        playerVars: {
          autoplay: 1,
        },
      };
  return (
    <>
    <div className="row">
      <h1>{title}</h1>
      <div className="row__posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: "40px" }}>
        {/* //if there exists non null value or if only the trailerurl exists  the YouTube component will be rendered with the specified video ID and options. */}
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
      
    </>
  )
}

/* movie trailor returns url / youtube url of vedio */

  
 
//  movieTrailer is like library to search for the trailer based on the movie title.
//   It uses movieTrailer(movieTitleRef.current) to fetch the trailer URL for 
//   the movie title stored in movieTitleRef.current. sets it using setTrailerUrl, and then extracts
//    the video ID from the URL using URLSearchParams and sets it again using setTrailerUrl.
//     After defining the fetchTrailer function, a setTimeout is set to call fetchTrailer after
//      5000 milliseconds (5 seconds). This delay might be intended to give the component some time
//     to render before fetching the trailer.a cleanup function is returned from useEffect. 
//     This cleanup function clears the timeout set by setTimeout to prevent memory leaks or 
//     potential issues when the component unmounts or when the effect is re-triggered


/*
const handleClick = (movie) => {
        if (trailerUrl) {
          setTrailerUrl("");
        } else {
          movieTrailer(movie?.title || movie?.name || movie?.original_name).then(
            (url) => {
              const urlParams = new URLSearchParams(new URL(url).search);
              setTrailerUrl(urlParams.get("v"));
            }
          );
        }
      };
It checks if trailerUrl is truthy (i.e., it contains a value). If trailerUrl is truthy, 
it means that a trailer is currently being displayed. In that case, it resets trailerUrl
to an empty string, effectively closing the trailer.

If trailerUrl is not truthy (meaning no trailer is currently being displayed), 
it proceeds to the else block.This line uses the movieTrailer function to fetch the URL 
of a trailer for the given movie. It checks if the movie has a title (movie?.title), and if not, 
it checks if it has a name (movie?.name), and if that's not available either, it checks for the 
original name (movie?.original_name). It then uses the .then() method to handle the result of the 
asynchronous operation.This line creates a new URLSearchParams object by parsing the query string 
portion of the trailer URL retrieved in the previous step. This is done by first creating a new URL 
object with the trailer URL, and then accessing its search property, which contains the query string.
Finally, this line sets the trailerUrl state variable to the value of the "v" parameter in the query 
string. This typically represents the video ID of the trailer on platforms like YouTube. Setting this
 value will trigger a re-render of the component, causing the trailer to be displayed.




          
          
*/