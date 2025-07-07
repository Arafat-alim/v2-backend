import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { sendDiscordNotification } from '../utils/sendDiscordNotification.js';
import { visitorSchema } from '../validators/visitor.validator.js';

import { Visitor } from '../model/Visitor.js';

const trackVisitor = asyncHandler(async (req, res) => {
  const data = visitorSchema.parse(req.body);
  const { timestamp, userAgent, referrer } = data;

  //! Get Client IP
  const ip =
    req.headers['x-forwarded-for']?.split(',')[0] ||
    req.headers['x-real-ip'] ||
    req.connection.remoteAddress ||
    'unknown';

  const visitorData = new Visitor({
    timestamp,
    ip,
    userAgent,
    referrer,
  });

  //! save to mongodb
  await visitorData.save();
  await sendDiscordNotification('visitor', visitorData);

  return res
    .status(201)
    .json(new ApiResponse(200, visitorData, 'Visitor tracked successfully'));
});

const getVisitorStats = asyncHandler(async (req, res) => {
  const count = await Visitor.countDocuments();
  return res
    .status(200)
    .json(new ApiResponse(200, { count }, 'Visitor count fetched'));
});

const getAdminVisitors = asyncHandler(async (req, res) => {
  const [count, recent] = await Promise.all([
    Visitor.countDocuments(),
    Visitor.find().sort({ timestamp: -1 }).limit(20),
  ]);

  return res.json(new ApiResponse(200, { count, recent }, 'Visitors fetched'));
});

export { getVisitorStats, trackVisitor, getAdminVisitors };
