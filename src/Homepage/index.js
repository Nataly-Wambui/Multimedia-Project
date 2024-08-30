import React from "react";
import "./index.css"
import { Link } from "react-scroll";

const Homepage = () => {
  return(
    <div id="container">
<div className ='navigation'>
  
               <img src ='./Images/logo.png' alt ="" className="logo"></img>
            <nav className="responsive-nav">

             <a><Link activeClass="active" smooth spy to="container">Home</Link></a> 
             <a><Link activeClass="active" smooth spy to="g-video">Videos</Link></a> 
             <a><Link activeClass="active" smooth spy to="blog">Blogs</Link></a> 
             <a><Link activeClass="active" smooth spy to="layout">Podcasts</Link></a> 
             <a> <Link activeClass="active" smooth spy to="resume">Portfolio</Link></a>

            </nav>
          
            
           </div>
           <div>
            <h1 id="pageWords">Explore our insightful articles, educational videos, engaging blog posts, and informative podcast episodes now</h1>
            <button className="home-button"> <Link activeClass="active" smooth spy to= "blog"> Explore now </Link></button>
           </div>
           </div>
           );
           };
   export default Homepage;
