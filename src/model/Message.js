import mongoose, { Schema } from 'mongoose';

const messageSchema = new Schema({
  name: String,
  email: String,
  subject: String,
  message: String,
  timstampe: {
    type: Date,
    default: Date.now,
  },
  ip: String,
  userAgent: String,
});

export const Message = mongoose.model('Message', messageSchema);
