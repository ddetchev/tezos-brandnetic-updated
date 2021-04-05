import React, {Component} from "react";
import '../App.css';
import profilepic from './profilepic.png';
import explore5 from './explore5.jpg';
import rating from './stars.png';
import insta from './instagram.png';
import tiktok from './tiktok.png';
import youtube from './youtube.jpg';

function Profile() {
    return <div>
        
    <div class="userprofilecolumn1">
      <img style = {{marginLeft: 31}} src={profilepic} width="70%" id="userpic"></img>
      <div class="profiletext">John Doe<br></br>
      <img src={rating} width="40%"></img><br></br>
      <div class="profiletextsmaller"> Rating: 4.08<p></p> </div>
      <img src={insta} width="50px" id="pic"></img>
      <img src={youtube} width="65px" id="pic"></img>
      <img src={tiktok} width="60px" id="pic"></img> <p></p>
      <div class="profiletext">User Media Stats<br></br></div>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. 
      </div>
    </div>
    <div class="userprofilecolumn2">
      <div class = "timelineText">Past Collaborations</div>
      <div class="contract">
      <img src={rating} width="20%" id="miniprofilepic" align="left"></img>
        <div class = "timelineinnerText">
          <img src={explore5} id="usercontent" style={{borderRadius: "16px"}} width="80%" height="75%"></img>
          <p></p>
          <div class="usercontenttext">
          <div class="usercontenttext2">John Doe</div> <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua.
          <p></p>
          </div>
          <p></p>
        </div>
      </div>
      <div class="contract">
      <img src={rating} width="20%" id="miniprofilepic" align="left"></img>
        <div class = "timelineinnerText">
          <img src={explore5} id="usercontent" style={{borderRadius: "16px"}} width="80%" height="75%"></img>
          <p></p>
          <div class="usercontenttext">
          <div class="usercontenttext2">John Doe</div> <br></br>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
          dolore magna aliqua.
          <p></p>
          </div>
          <p></p>
        </div>
      </div>
    </div>
  
    </div>
}

export default Profile;