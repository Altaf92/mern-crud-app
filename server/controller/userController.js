import User from "../models/userModel.js";

export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    const saveData = await userData.save();
    res.satus(200).json(saveData);
  } catch (error) {
    res.status(500).json({ error: error });
  }
};
