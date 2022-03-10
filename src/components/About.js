import React from "react";

function ifBioEmpty(bio) {
   if(bio) {
      return <p>{bio}</p>
   } 
}

function About(props) {
   return (
      <div id="about">
      <h2>About Me</h2>
      {ifBioEmpty(props.bio)}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      {/* add your <Links /> component here */}
      </div>
      );
   }
   
   export default About;
   