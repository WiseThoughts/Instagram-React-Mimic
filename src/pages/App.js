import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../components/login";
import Home from "./home";
import Messages from "./messages";
import Feed from "../components/feed";
import Nav from "../components/nav";
import Profile from "./profile";
import "../style/App.css";

const App = () => {
  const [user, setUser] = useState();

  return (<div>


      <Routes>
        <Route path="/" element={<Login setter={setUser} user={user} />} />
        <Route path="/home" element={<Home user={user} />} />
        <Route path="/messages" element={<Messages user={user} />} />
        <Route path="/feed" element={<Feed user={user} />} />
        <Route path="/profile" element={<Profile setter={setUser} user={user} />} />
      </Routes>


      </div>
  );
};

export default App;
