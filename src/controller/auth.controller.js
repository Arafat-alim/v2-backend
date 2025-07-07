import { ADMIN_USERNAME, JWT_SECRET } from '../constants.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';

const handleLogin = asyncHandler(async (req, res) => {
  const { username, password } = req.body;

  // Validate credentials
  if (username !== ADMIN_USERNAME) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
  // For demo purposes, use simple password comparison
  // In production, use bcrypt.compare with hashed password
  const isValidPassword = password === 'admin123';

  if (!isValidPassword) {
    return res.status(401).json(new ApiError(401, 'Invalid Credentials'));
  }

  // Generate JWT token
  const token = jwt.sign({ username, isAdmin: true }, JWT_SECRET, {
    expiresIn: '24h',
  });

  return res
    .status(200)
    .json(new ApiResponse(200, { token }, 'Login Successful'));
});

export { handleLogin };
