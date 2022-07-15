import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import { faker } from '@faker-js/faker';
import Login from "../components/login";
import Home from "./home";
import Messages from "./messages";
import Feed from "../components/feed";
import Profile from "./profile";
import "../style/App.css";

const App = () => {
  const [user, setUser] = useState();

  const profilePic = faker.image.avatar()


  return (<div>


      <Routes>
        <Route path="/" element={<Login setter={setUser} user={user} />} />
        <Route path="/home" element={<Home setter={setUser} user={user} />} />
        <Route path="/messages" element={<Messages setter={setUser} user={user} />} />
        <Route path="/feed" element={<Feed setter={setUser} user={user} profilePic={profilePic} />} />
        <Route path="/profile" element={<Profile setter={setUser} user={user} profilePic={profilePic}/>} />
      </Routes>


      </div>
  );
};

export default App;
