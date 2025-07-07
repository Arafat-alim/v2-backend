import mongoose, { Schema } from 'mongoose';

const visitorSchema = new Schema({
  timestamps: Date,
  ip: String,
  userAgent: String,
  referrer: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export const Visitor = mongoose.model('Visitor', visitorSchema);
