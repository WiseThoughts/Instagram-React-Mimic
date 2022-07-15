import { useState } from "react";
import { updateFetch, deleteFetch } from "../utils/fetch";
import Nav from "../components/nav";
import "../style/profile.css"


const Profile = ({ setter, user, profilePic }) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();



  const submitHandler = async (e) => {
    e.preventDefault();
    const updateObj = { username, email, password };
    for (const key in updateObj) {
      if (!updateObj[key]) {
        delete updateObj[key];
      }
    }
    await updateFetch({ username: user }, updateObj, setter);
  };

  return (
  <div>
    <Nav user={user} setter={setter} />
  <div className="spacer"/>


  <div className="profileContainerMain">
    <h1>{user}'s Profile Page</h1>

<div className="row">
    <img className="profileImage" src={profilePic} alt="users profile pic" />
    <button className="formButtonsProfileUpdate">Change Profile Picture</button>
</div>
<div className="row">
  <p className="PFF">Posts: 0</p>
  <p className="PFF">Followers: 0</p>
  <p className="PFF">Following: 0</p>
</div>

    <div className="profileContainer">
      <form onSubmit={submitHandler}>
        <h2>Update Profile</h2>
        <input className="inputBoxProfile"
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input className="inputBoxProfile" onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input className="inputBoxProfile"
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button className="formButtonsProfileUpdate" type="submit">Update</button>
      </form>

      <button className="formButtonsProfileDelete" onClick={() => deleteFetch(setter)}>Delete Account</button>
      </div>
      </div>
    
    
    
    
    </div>
  );
};

export default Profile;