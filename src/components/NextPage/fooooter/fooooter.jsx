import React from 'react'
import './foooter.css'

function Fooooter() {
  return (
    <div>
        <div className="foooter-main">
            
            <p className='call'>Questions? Call <a className='call-num' href="" >+91 902-022-2309</a></p>
            <div className="a-tags">
                <a className="a" href="">FAQ</a>
                <a className="a" href="">Investor Relations</a>
                <a  className="a" href="">Privacy</a>
                <a className="a" href="">Speed Test</a>
                <a className="a" href="">Help Centre</a>
                <a className="a" href="">Jobs</a>
                <a className="a" href="">Cookie Preferences</a>
                <a className="a" href="">Legal Notices</a>
                <a className="a"href="">Account</a>
                <a className="a"href="">Ways to Watch</a>
                <a className="a"href="">Corporate Information</a>
                <a className="a"href="">Only on Heirath</a>
                <a className="a" href="">Media Centre</a>
                <a className="a"href="">Terms of Use</a>
                <a className="a"href="">Contact Us</a>
                
            </div>
           <div className="select">
            <select name="English" id="">
            <option class="fa-solid fa-globe" value="">
                  English
                </option>
                <option class="fa-solid fa-globe" value="">
                  Hindi
                </option>
            </select>
            
           </div>
           <div className="last">Heirath India</div>
           
        </div>
        
    </div>
  )
}

export default Fooooter