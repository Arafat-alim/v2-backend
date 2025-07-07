import { z } from 'zod';

const contactSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  subject: z.string().min(3, 'Character should be atleast 3 in length'),
  message: z.string().min(3, 'Character should be atleast 3 in length'),
});

export { contactSchema };
