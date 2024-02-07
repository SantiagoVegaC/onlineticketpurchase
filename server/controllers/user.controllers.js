import { pool } from "../db.js";

export const registerUser = async (req, res) => {
  try {
    if (req.body === undefined ) return
    const { firstName, lastName, email, password } = req.body;

    const [result] = await pool.query(
      "INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, password]
    );
    res.json({
      id: result.insertId,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
    res.send()
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const getUsers = (req, res) => {
  res.send("obtaining event");
};
