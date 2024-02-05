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
    const [result] = await pool.query(
      "SELECT * FROM events WHERE event_id = ?",
      [req.params.id]
    );

    if (result.length === 0) {
      return res.status(404).json({ message: "Event not found :(" });
    }
    res.json(result[0]);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
