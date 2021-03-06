import { useState, useEffect } from "react";

import Nav from "./nav"
import Posts from "./posts"
import "../style/Feed.css"


const Feed = ({ user, setter, profilePic }) => {
  const [photos, setPhotos] = useState([]);


  const fetchPhotos = async (setter) => {
      const res = await fetch(process.env.REACT_APP_PICS);
      const data = await res.json();
      setter(data);
  };

  useEffect(() => {
    fetchPhotos(setPhotos);
  }, []);




  return (<div>

    <div>
      <Nav />
    </div>

    <div className="spacer"/>

      <div className="feedHeader">
      <h1>Welcome {user}! This is today's feed!</h1>
      </div>

<div className="container">
    <div className="feedDisplayLeft coloumn">
      {photos.map((item, i) => {
        return <Posts key={i} author={item.author} url={item.download_url} words={item.words} />;
      })}
      
    </div>

  <div className="feedDisplayRight">
    <div className="feedUsername row feedProfilePosition">
    <img className="profileImage" src={profilePic} alt="profile logo"/>
    <h4>Username:<br/>{user}</h4>
    </div>

    <div className="feedProfilePosition">
    <button className="feedLogOut" onClick={() => {
          setter();
          localStorage.removeItem("myToken");
          }} >Log Out</button>
    </div>

  </div>
  
</div>

</div>
  );
};

export default Feed;
