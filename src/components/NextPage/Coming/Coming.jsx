import React, { useEffect } from "react";
import { useState } from "react";
import "./Coming.css";
import Fooooter from "../fooooter/fooooter";
import axios from "axios";
import { Drama, Actions } from "../../../constants/url";

function Coming() {
  const [coming, setComing] = useState([]);
  useEffect(() => {
    axios
      .get(Drama)
      .then((response) => {
        console.log(response.data.results);
        setComing(response.data.results);
        // Handle the successful response here
      })
      .catch((error) => {
        if (error.response.status === 404) {
          // Handle 404 error here
          console.log("Resource not found:", error.response.data);
        } else {
          // Handle other errors
          console.error("An error occurred:", error.message);
        }
      });
  }, [Drama]);

  return (
    <div>
      <div className="coming-main">
        <h1>Coming Soon</h1>
        <div className="coming-sec">
          { coming.slice(0,9).map((obj,index)=>(
            <div  key={index} className="contonts">
            <a href="">{obj.title}</a>
            <p className="contont-p">
            {obj.overview}
            </p>
          </div>

          ))}
         
        </div>
      </div>
      <Fooooter />
    </div>
  );
}

export default Coming;
