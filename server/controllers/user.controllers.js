import { pool } from "../db.js";

export const registerUser = async (req, res) => {
  try {
    const {
      user_id,
      first_name,
      last_name,
      email,
      password,
      creation_date,
      last_access_date,
      updated_at,
      enabled,
    } = req.body;
    const [result] = await pool.query(
      "INSERT INTO users(user_id, first_name, last_name, email, password, creation_date, last_access_date, updated_at, enabled) VALUES (?, ?)",
      [
        user_id,
        first_name,
        last_name,
        email,
        password,
        creation_date,
        last_access_date,
        updated_at,
        enabled,
      ]
    );
    console.log("result", result);
    res.json({
      id: result.insertId,
      first_name,
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = (req, res) => {
  res.send("obtaining event");
};
