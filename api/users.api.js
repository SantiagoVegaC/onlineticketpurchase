export const createUserRequest = async (user) => {
  try {
    console.log('user', user);
    await fetch("http://localhost:3001/new_user", {method: "POST", body: JSON.stringify(user)})
  } catch (error) {
    console.log(error);
  }

};
