import User from "../models/userModel.js";

// post data api
export const create = async (req, res) => {
  try {
    const userData = new User(req.body);

    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }

    const savedData = await userData.save();
    res.status(201).json(savedData);
  } catch (error) {
    res.status(500).json({ msg: "api error", error: error });
  }
};

// get all data api
export const getAll = async (req, res) => {
  try {
    const userData = await User.find();
    if (!userData) {
      return res.status(404).json({ msg: "user data not found" });
    }
    return res.status(200).json(userData);
  } catch (error) {
    res.status(500).json({ msg: "api error", error: error });
  }
};

// get single data api

export const getOne = async (req, res) => {
  try {
    const id = req.params.id;
    const userExits = await User.findById(id);

    if (!userExits) {
      return res.status(404).json({ msg: "user not found" });
    }

    res.status(200).json(userExits);
  } catch (error) {
    res.status(500).json({ msg: "api error", error: error });
  }
};

// api for update data
export const update = async (req, res) => {
  try {
    const id = req.params.id;
    const userExist = await User.findById(id);

    if (!userExist) {
      return res.status(401).json({ msg: "user not found" });
    }

    const updatedUser = await User.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json({ msg: "User deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "api error", error: error });
  }
};

// delete api

export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const userExist = await User.findById(userId);

    if (!userExist) {
      return res.status(401).json({ msg: "user not found" });
    }

    await User.findByIdAndDelete(userId);
    res.status(200).json({ msg: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ msg: "api error", error: error });
  }
};
