import { pool } from "../db.js";

export const registerUser = async (req, res) => {
  try {
    if (req.body === undefined) return;
    const { firstName, lastName, email, password } = req.body;

    const [result] = await pool.query(
      "INSERT INTO users(first_name, last_name, email, password) VALUES (?, ?, ?, ?)",
      [firstName, lastName, email, password]
    );
    res.json({
      user_id: result.insertId,
      first_name: firstName,
      last_name: lastName,
      email,
      password,
    });
    res.send();
  } catch (error) {
    console.log("error creating new user", error);
    return res.status(500).json({ message: error.message });
  }
};

export const getUserByData = async (req, res) => {
  try {
    if (req.body === undefined) return;
    const { email, password } = req.body;
    const [result] = await pool.query(
      "SELECT * FROM USERS where email = ? and password = ?",
      [email, password]
    );
    console.log('result', result);
    if (result.length === 0) {
      console.error("wrong credentials", error);
      return res.status(409).json({ message: "wrong credentials" });
    }
    res.json(result);
    location.href = "/";
  } catch (error) {
    console.error("error getting user", error);
    return res.status(500).json({ message: error.message });
  }
};
