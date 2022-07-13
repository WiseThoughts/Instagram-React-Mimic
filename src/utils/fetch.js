export const signUp = async (signObj, setter) => {
  try {
    const response = await fetch("http://localhost:5001/user", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signObj),
    });
    const data = await response.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};

export const logIn = async (signObj, setter) => {
  try {
    const response = await fetch("http://localhost:5001/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(signObj),
    });
    const data = await response.json();
    setter(data.user.username);
  } catch (error) {
    console.log(error);
  }
};