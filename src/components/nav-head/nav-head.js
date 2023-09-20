import React from 'react'
import './nav-head.css'
import { Link } from 'react-router-dom'


function NavHead() {
  
  return (
    <div> <div className='header-nav'>
          
    <div class="sec-1">
    

      <div class="logo-sec">
        
      <Link to={`/`}> 
          <h1 className=" heirath">Heirath<span>.</span></h1>
         </Link> 
          
       
      </div>
      
      
      <div class="nav-sec">
      <p>UNLIMITED TV SHOWS & MOVIES </p>
      
        <button class="join-btn">JOIN NOW</button>
        <button class="sign-btn">SIGN IN </button>
        </div>
      
        
    </div>
  
  </div></div>
  )
}

export default NavHead;