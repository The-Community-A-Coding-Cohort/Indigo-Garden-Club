import jwt from 'jsonwebtoken';

// In real life, store a secure secret in an env variable
const JWT_SECRET = 'SUPER_SECURE_SECRET';

export function signToken(payload) {
  // e.g. Expires in 15 minutes
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '15m' });
}

export function verifyToken(token) {
  return jwt.verify(token, JWT_SECRET);
}