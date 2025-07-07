const MONGO_URI = process.env.MONGODB_URI || '';
const JWT_SECRET = process.env.JWT_SECRET || 'your-super-secret-jwt-key';
const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL || '';
const ADMIN_USERNAME = process.env.ADMIN_USERNAME || 'admin';
const ADMIN_PASSWORD_HASH =
  process.env.ADMIN_PASSWORD_HASH ||
  '$2a$10$Oe7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/Vh5i5Q7y8Q/O';

export {
  MONGO_URI,
  JWT_SECRET,
  DISCORD_WEBHOOK_URL,
  ADMIN_PASSWORD_HASH,
  ADMIN_USERNAME,
};
