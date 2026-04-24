import { prisma } from '../routes/createBook.js';
import 'dotenv/config';

import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
export const registerUser = async (req, res) => {
  // Destructuring of variables
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email must not be empty' });
    if (!password || !password.trim())
      return res.status(400).json({ message: 'Password must not be empty' });

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser)
      return res.status(409).json({ message: 'User already exists' });

    // Hash the password (10 rounds of salting)
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in the database
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Validate input
    if (!email || !email.trim())
      return res.status(400).json({ message: 'Email must not be empty' });
    if (!password || !password.trim())
      return res.status(400).json({ message: 'Password must not be empty' });

    // Find user by email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Compare provided password with stored hash
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid)
      return res.status(401).json({ message: 'Invalid credentials' });

    // Generate JWT token
    const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, {
      expiresIn: '1d',
    });

    return res.status(200).json({ accessToken });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: 'Server error' });
  }
};
