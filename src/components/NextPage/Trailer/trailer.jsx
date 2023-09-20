import React, { useEffect, useState } from 'react'
import './trailer.css'
import axios from 'axios'
import { API_KEY ,baseUrl} from '../../../constants/const'
import Youtube from 'react-youtube'

function Trailer(props) {
  const [vdourl, setvdoUrl] = useState ([])
useEffect(() => {
  axios.get(`${baseUrl}/movie/${props.movieId}/videos?language=en-US&api_key=${API_KEY}`).then((Response)=>{
    console.log(Response.data)
    setvdoUrl(Response.data.results)
  })

  
}, [props.movieId])
const opts = {
  height: '350',
  width: '500',
  ursor: 'pointer',
 
  playerVars: {
    // https://developers.google.com/youtube/player_parameters
    autoplay: 0,
  },
};



  return (
    <div>
        <div className="youtube-container">
            <h1> Videos  | <span> {props.movieData.title}</span></h1>
            <div className="trailers">
              {vdourl.slice(0,4).map((Url,index)=>(
                <div className='vdo-row'>
                <Youtube key={index} className='youtube' opts={opts}  videoId={Url.key}/>
                <p>{ Url ? Url.name :''}</p>
                </div>
              ))}
              
             
              
            

            </div>
        </div>

    </div>
  )
}

export default Trailer