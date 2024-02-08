import { pool } from "../db.js";

export const getEvents = async (req, res) => {
  try {
    const [result] = await pool.query("SELECT * FROM events");
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getEventById = async (req, res) => {
  try {
    const searchTerm = "%" + req.params.id + "%";
    const queryString = `select * from events where event_name LIKE '${searchTerm}' OR event_desc LIKE '${searchTerm}'`;
    const [result] = await pool.query(queryString);

    if (result.length === 0) {
      return res.status(404).json({ message: "Event not found :(" });
    }
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getFeaturedEvents = async (req, res) => {
  try {
    const [result] = await pool.query(
      "SELECT * FROM events where featured_events = 1"
    );
    res.json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
