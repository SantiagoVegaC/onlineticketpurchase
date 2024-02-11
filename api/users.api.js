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

export const loginRequest = async (credentials) => {
  try {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    const response = await fetch("http://localhost:3001/login", requestOptions);
    if (!response.ok) {
      const errorMessage = await response.text();
      const error = new Error(errorMessage)
      error.errorCodeStatus = response.status;
      throw error;
    }
  } catch (error) {
    throw error;
  }
};
