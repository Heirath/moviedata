import { useParams } from "react-router-dom";
import React from "react";
import { useEffect, useState } from "react";
import "./about.css";
import axios from "axios";
import { API_KEY, baseUrl, imgUrl } from "../../../constants/const";
import MoreDetail from '../moreDetails/moreDetail'
import Trailer from "../Trailer/trailer";
function About() {
  const { movieId} = useParams();
  const [movieData, setMovieData] = useState({});
  const [movieData2, setMovieData2] = useState({});
  const language = "en-US";

  const apiUrl = `${baseUrl}/movie/${movieId} }?language=${language}&credits&api_key=${API_KEY}`;
  const apiUrl2 = `${baseUrl}/movie/${movieId}/credits?language=${language}&credits&api_key=${API_KEY}`;
  useEffect(() => {
    axios
      .get(apiUrl, apiUrl2)
      .then((response) => {
        setMovieData(response.data);
        console.log(movieData);
      })
      .catch((err) => {});
    axios
      .get(apiUrl2)
      .then((response) => {
        setMovieData2(response.data);
        console.log(response.data);
      })
      .catch((err) => {});
  }, [movieId]);

  return (
    <div>
      <div
        style={{ backgroundImage: `url(${imgUrl + movieData.backdrop_path})` }}
        className="hero-sec"
      >
        <div className="righ-div">
          <h1>{`${movieData ? movieData.title : ""}`}</h1>
          <p className="details">
            {`${movieData ? movieData.release_date : ""}`} | Maturity Rating:
            {`${movieData.runtime}`}| {`${movieData.runtime}`}|{" "}
            {movieData.genres && 
            movieData.genres.slice(0,1).map((obj,index)=>
            <a key={index} href=""> {`${obj.name}`}</a>
)}
          </p>
          <p className="about">{`${movieData ? movieData.overview : ""}`}</p>

          <p className="starring">
            Starring : 
            {movieData2.cast &&
              movieData2.cast.slice(0, 3).map((obj, index) => (
                <span key={index} className="star">
                   {obj.original_name} ,
                </span>
              ))}
          </p>
        </div>

        <div className="left-div"></div>

        <div className="shadow-main"></div>

        <div className="join-div">
          <div className="right">
            <h1>H <span>.</span></h1>
            <h4>Watch all you want.</h4>
          </div>

          <button>JOIN NOW</button>
        </div>
      </div>
      <center>
        <div className="line1"></div>
        <p>
          These short films were directed by noted filmmakers{" "}
          {movieData2.crew &&
          movieData2.crew.slice(0,4).map(( obj, index)=>(
            < span key={ index}>{obj.name}</span>
          ))}
          
        </p>
        <div className="line2"></div>
      </center>
      <Trailer movieId={movieId} movieData={movieData} />
      <MoreDetail movieData={movieData} movieData2={movieData2} />
    </div>
  );
}

export default About;
