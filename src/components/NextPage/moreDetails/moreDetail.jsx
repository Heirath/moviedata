
import "./moreDetail.css";
import MoreLike from "../moreLike/MoreLike";







function MoreDetail(props) {
  
  

  

  let GenresId;

  if (props.movieData && props.movieData.genres && props.movieData.genres.length > 0) {
    GenresId = props.movieData.genres[0].id;
  } else {
    // Handle the case where detailsData.genres doesn't exist or is empty
    GenresId = null; // or some other default value
  }
  

  return (
    <div>
      <div className="more-main">
        <h1>More Details</h1>
        <div className="more-container">
          <div className="one-sec">
            <div className="one">
              <p className="head-grey">Watch offline</p>
              <p className="normal-p">Available to download</p>
            </div>
            <div className="one">
              <p className="head-grey">Audio</p>

              {props.movieData.spoken_languages &&
                props.movieData.spoken_languages.map((languages, index) => (
                  <p key={index} className="normal-p">
                    {languages.english_name} - Audio Description,English
                    [Original],{languages.name}
                  </p>
                ))}
            </div>
          </div>
          <div className="one-sec">
            <div className="one">
              <p className="head-grey">Genres</p>
              {props.movieData.genres &&
                props.movieData.genres.map((genres, index) => (
                  <a className="more-a" key={index} href="">
                    {" "}
                    {genres.name}{" "}
                  </a>
                ))}
            </div>

            <div className="one">
            <p className="head-grey">Subtitles</p>
            {props.movieData.spoken_languages &&
            
            props.movieData.spoken_languages.map((languages, index) => (
              
              <p key={index} className="normal-p">{languages.english_name},{languages.name}</p>
              ))}
            </div>
           
          </div>
        
          <div className="one-sec">
            <div className="one">
              <p className="head-grey">This movie is...</p>
              
              <p  className="normal-p">{props.movieData.tagline ? props.movieData.tagline : props.movieData.title}</p>
            
            </div>
          </div>
        </div>
        
        <div className="second">
          <p className="head-grey">Cast</p>
          <div className="casts">
            <div className="casts1">
              {props.movieData2.cast &&
                props.movieData2.cast.slice(0, 9).map((actor, index) => (
                  <p key={index} className="normal-p">
                    {actor.name}
                  </p>
                ))}
            </div>
          </div>
        </div>
      </div>
 
      <MoreLike GenresId={GenresId}/>
      {console.log(`hai ${GenresId}`)}
  
    </div>
  );
}

export default MoreDetail;
