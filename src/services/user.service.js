/* eslint-disable no-unused-vars */
import Jwt from 'jsonwebtoken';
import { BcryptUtil } from '../utils/bcrypt';
import JwtUtil from '../utils/generateToken';

const { User } = require('../database/models');

const register = async (data) => {
  const { firstname, lastname, email, password, role, isActive } = data;
  const user = await User.create({
    firstname,
    lastname,
    email,
    password: await BcryptUtil.hash(password),
    role,
    isActive,
  });
  const token = JwtUtil.generate({
    firstname,
    lastname,
    id: user.id,
    email,
    role: user.role,
    isActive: user.isActive,
    lastTimePasswordUpdated: user.lastTimePasswordUpdated,
  });
};

export { register };
