import { z } from 'zod';
const visitorSchema = z.object({
  timestamp: z.string().or(z.date()),
  userAgent: z.string().min(1),
  referrer: z.string().optional(),
});

export { visitorSchema };
