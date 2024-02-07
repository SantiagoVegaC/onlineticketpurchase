export const getEventsRequest = async () => {
  try {
    const res = await fetch("http://localhost:3001/events");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
