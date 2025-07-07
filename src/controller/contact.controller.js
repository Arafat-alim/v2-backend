import { asyncHandler } from '../utils/asyncHandler.js';
import { Message } from '../model/Message.js';
import { sendDiscordNotification } from '../utils/sendDiscordNotification.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { contactSchema } from '../validators/contact.validator.js';

const submitContact = asyncHandler(async (req, res) => {
  const data = contactSchema.parse(req.body);
  const { name, email, subject, message } = data;

  const msgData = await Message.create({
    name,
    email,
    message,
    subject,
    ip:
      req.headers['x-forwarded-for']?.split(',')[0] ||
      req.headers['x-real-ip'] ||
      req.connection.remoteAddress ||
      'unknown',
    userAgent: req.headers['user-agent'] || 'unknown',
  });

  await sendDiscordNotification('contact', msgData);
  return res
    .status(201)
    .json(new ApiResponse(201, msgData, 'Message sent successfully'));
});

const getMessages = asyncHandler(async (req, res) => {
  const messages = await Message.find({}).sort({ timestamp: -1 });
  return res.json(new ApiResponse(200, messages, 'Messages fetched'));
});

export { submitContact, getMessages };
