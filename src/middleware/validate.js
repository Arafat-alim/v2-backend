import { ApiError } from '../utils/ApiError.js';

/**
 * Middleware to validate `req.body` using a Zod schema
 */
const validate = (schema) => (req, res, next) => {
  try {
    req.body = schema.parse(req.body);
  } catch (err) {
    const issues = err.errors?.map((e) => ({
      field: e.path.join('.'),
      message: e.message,
    }));

    next(new ApiError(400, 'validation error', issues));
  }
};

export { validate };
