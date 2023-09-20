import React from "react";
import "./Row.css";
import axios from "../../constants/axios";
import { useEffect, useState } from "react";
import { imgUrl } from "../../constants/const";
import { Link } from "react-router-dom";

function Row(props) {
  const [movis, setMovis] = useState([]);
 
  
  


  useEffect(() => {
    axios
      .get(props.url)
      .then((Response) => {
        
        setMovis(Response.data.results);
      })
      .catch((err) => {
        
      });
  }, []);
  return (
    <div className="row-main">
      <div className="row">
        <h3> {props.name} </h3>
        <div className="img-col">
          { movis &&
          movis.map((obj,index) => (
            <div key={index} className="card">
              <Link to={`/about/${obj.id}`}> 
              <img  className={props.isSmall ? "small" : "normal"}
                src={`${movis ? imgUrl + obj.backdrop_path : ""}`}
                alt=""
                
              />
              </Link>
  
              <p>{`${movis ? obj.original_title : ""}`}</p>
            </div>
          ))}
        </div>
      </div>
     
    </div>
  );
}

export default Row;
