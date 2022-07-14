import { useState } from "react";
import { updateFetch, deleteFetch } from "../utils/fetch";
import Nav from "../components/nav";

const Profile = ({ setter, user }) => {
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
      <h1>Profile Page</h1>
      <form onSubmit={submitHandler}>
        <h2>Update Profile</h2>
        <input
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
        <input
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          type="password"
        />
        <button type="submit">Update</button>
      </form>
      <button onClick={() => deleteFetch(setter)}>Delete Account</button>
    </div>
  );
};

export default Profile;