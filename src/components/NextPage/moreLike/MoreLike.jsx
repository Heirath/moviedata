import { useEffect, useState } from "react";
import React from "react";
import "./MoreLike.css";
import axios from "axios";
import { API_KEY, baseUrl, imgUrl } from "../../../constants/const";
import Coming from "../Coming/Coming";
import { Link } from "react-router-dom";

function MoreLike(props) {
  {
    console.log(`hoooooooooooi ${props.GenresId}`);
  }
  const [likeData, setLikeData] = useState([]);
  const likeUrl = `${baseUrl}/discover/movie?include_adult=false&credits&include_video=false&language=en-US&page=1&sort_by=popularity.desc&without_genres=${props.GenresId}&api_key=${API_KEY}`;

  const handleImageClick = () => {
    

    // Scroll to the top of the page
    window.scrollTo(0, 0);
  };


  useEffect(() => {
    axios.get(likeUrl).then((response) => {
      setLikeData(response.data.results);
      console.log(response.data.results);
      console.log(likeData);
    });
  }, [props.GenresId]);

  return (
    <div>
      <div className="like-main">
        <h1>More Like This</h1>
        <div className="like-movis">
          {likeData.slice(0, 12).map((obj, index) => (
               <Link to={`/about/${obj.id}`} key={obj.id}>
              <img   onClick={handleImageClick } key={index} src={`${imgUrl + obj.backdrop_path}`} alt="" />
              </Link>
          ))}
        </div>
      </div>
      <Coming />
    </div>
  );
}

export default MoreLike;
