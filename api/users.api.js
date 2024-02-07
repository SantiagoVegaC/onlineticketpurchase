export const createUserRequest = async (user) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    await fetch("http://localhost:3001/new_user", requestOptions);
  } catch (error) {
    console.error(error);
  }
};
