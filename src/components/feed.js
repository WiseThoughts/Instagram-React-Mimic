import { useState, useEffect } from "react";

import Nav from "./nav"
import Posts from "./posts"
import "../style/Feed.css"


const Feed = ({ user }) => {
  const [photos, setPhotos] = useState([]);
  const [profilePic, setProfilePic] = useState([]);



  const profileAvatar = async () => {
    const res = await fetch("https://picsum.photos/200");
    const data = await res.json();
    return data;
  };
  useEffect(()=>{
    profileAvatar(setProfilePic);
  }, []);

  const fetchPhotos = async (setter) => {
      const res = await fetch("https://picsum.photos/v2/list");
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
    <div className="row feedProfilePosition">
    <img src={profilePic} alt="profile logo"/>
    <h4>Username:{user}</h4>
    </div>

  </div>
</div>

    </div>
  );
};

export default Feed;
