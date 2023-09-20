import React from "react";
import "./login.css";
import {Link } from 'react-router-dom'

function LoginPage() {
  

  return (
    <div>
      
        <header className="header">
          <div class="gray-top"></div>
          <div class="sec-1-1">
            <div class="logo-sec1">
              <div class="nav-img">
              <Link to={`/`}> 
          <h1 className=" heirath1">Heirath<span>.</span></h1>
         </Link> 
              </div>
            </div>

            <div class="nav-sec">
              <select name="" id="">
                <option class="fa-solid fa-globe" value="">
                  English
                </option>
              </select>
              <button class="sign-btn1">Sign In </button>
            </div>
          </div>
          <div id="sec-2">
            <h1>Laughter. Tears. Thrills. Find it all on Heirath.</h1>
            <p class="p1">
              Endless entertainment starts at just ₹ 149. Cancel anytime.{" "}
            </p>

            <p class="p2">
            
              Ready to watch? Enter your email to create or restart your
              membership.
            </p>
            <div class="search">
              <input class="input-1" type="text" placeholder="Email address" />
              <Link to={`/main`}>
              <button  class="search-btn"> Get Started </button>
              </Link>
            </div>
            
          </div>
        </header>
        <div class="line"></div>
        <section id="section2">
          <div class="text-sec">
            <h1>Enjoy on your TV</h1>
            <p>
              Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV,
              Blu-ray players and more.
            </p>
          </div>

          <div class="vdo-sec">
            <img src="https://gumlet.assettype.com/pratidintime%2F2023-08%2F3bdd366f-4538-4899-a86b-8abf7bfc80db%2Fbest_thriller_movies_on_netflix.png?format=auto" alt="vdo loading" />
          </div>

          <div id="gray"></div>
        </section>
        <div class="line"></div>
        <section id="section2">
          
         

          <div class="vdo-sec">
            <img src="https://images.ctfassets.net/4cd45et68cgf/5y7i4snzpqkr2oHRCRAkN4/732de95d358a2de9a0183becc8f0c79b/Android_Collage_1920x1080_EMEA_Poland_PL__1_.jpg" alt="vdo loading" />
          </div>
          <div class="text-sec">
            <h1>Download your shows to watch offline</h1>
            <p>
            Save your favourites easily and always have something to watch.
            </p>
          </div>

          <div id="gray"></div>
        </section>
        <div class="line"></div>
        <section id="section2">
          <div class="text-sec">
            <h1>Watch everywhere</h1>
            <p>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </p>
          </div>

          <div class="vdo-sec">
            <img src="https://images.ctfassets.net/4cd45et68cgf/5a0IreQXrb75yZWvogHLh4/f5d183204c31841695c4e562ed168813/Web-8464.jpg?w=2560" alt="vdo loading" />
          </div>

          <div id="gray"></div>
        </section>
        <div class="line"></div>
        <section id="section2">
        <div class="vdo-sec">
            <img src="data:image/jpeg;base64,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" alt="vdo loading" />
          </div>
          <div class="text-sec">
            <h1>Create profiles for kids
</h1>
            <p>
            Send children on adventures with their favourite characters in a space made just for them—free with your membership.
            </p>
          </div>

         

          <div id="gray"></div>
        </section>
        <div class="line"></div>
        <footer>
          <h1>Frequently Asked Questions</h1>
          <div className="ask">
            <div className="ask-div">
              <h5>How much does Netflix cost?</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="ask-div">
              <h5>Where can i watch?</h5>

              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="ask-div">
              <h5>How do i cancel?</h5>
              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="ask-div">
              <h5> What can i watch on Netflix?</h5>

              <i class="fa-solid fa-plus"></i>
            </div>
            <div className="ask-div">
              <h5>Is Netflix good for kids?</h5>

              <i class="fa-solid fa-plus"></i>
            </div>
          </div>

          <p>
            Ready to watch? Enter your email to create or restart your
            membership.
          </p>
          <div class="search">
            <input class="input-1" type="text" placeholder="Email address" />
            <button class="search-btn"> Get Started </button>
          </div>
        </footer>
        <div class="line"></div>
        <footer2 id="footer-2">
          <p>
            {" "}
            Questions? Call <a href="">+91-902-022-2309</a>{" "}
          </p>
          <div className="tags">
            
              <a href="">FAQ</a>
              <a href="">Media Centre</a>
              <a href="">Ways to Watch</a>
              <a href="">Cookie Preferences</a>
              <a href="">Speed Test</a>
            
              <a href="">Help Centre</a>
              <a href="">Investor Relations</a>
              <a href="">Terms of Use</a>
              <a href="">Corporate Information</a>
              <a href="">Legal Notices</a>
           
              <a href="">Account</a>
              <a href="">Jobs</a>
              <a href="">Privacy</a>
              <a href="">Contact Us</a>
              <a href="">Only on Netflix</a>
             
          </div>
          <select name="" id="">
                <option class="fa-solid fa-globe" value="">
                  English
                </option>
              </select>
              <p>Heirath India</p>
        </footer2>
      
    </div>
  );
}

export default LoginPage;
