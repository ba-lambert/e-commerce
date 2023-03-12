import { register } from '../services/user.service';
const { User } = require('../database/models');
import JwtUtil from '../utils/generateToken';

const registerUser = async (req, res) => {
  try {
    const { firstname, lastname, email, password, role, isActive } = req.body;

    const token = JwtUtil.generate({
      firstname,
      lastname,
      email,
      password,
      role,
      isActive,
    });
    const userData = {
      firstname,
      lastname,
      email,
      password,
      role,
      isActive,
    };
    const response = await register(userData);
    return res.status(201).json({ status: 201, user: response, token: token });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ status: 500, error: 'Server error' });
  }
};

const getAllusers = async (req, res) => {
  try {
    const user = await User.findAll({});
    if (!user) return res.status(400).json({ message: 'No users in databse' });
    return res.status(201).json({ user });
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
    console.log(error);
  }
};

export { registerUser, getAllusers };
