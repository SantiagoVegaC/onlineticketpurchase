export const getEventsRequest = async () => {
  try {
    const res = await fetch("http://localhost:3001/events");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getEventsByIdRequest = async (eventSearch) => {
  try {
    const res = await fetch(`http://localhost:3001/events/${eventSearch}`);
    return res.json();
  } catch (error) {
    console.error(error);
  }
};

export const getFeaturedEvents = async () => {
  try {
    const res = await fetch("http://localhost:3001/featuredevents");
    return res.json();
  } catch (error) {
    console.error(error);
  }
};
