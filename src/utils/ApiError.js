class ApiError extends Error {
  /**
   * @param {number} statusCode - The HTTP status code.
   * @param {string} [message='Something went wrong'] - The error message.
   * @param {Array} [errors=[]] - A list of specific error details.
   * @param {string} [stack=''] - The error stack trace.
   */
  constructor(
    statusCode,
    message = 'Something went wrong',
    errors = [],
    stack = '',
  ) {
    super(message);
    this.statusCode = statusCode;
    this.data = null; // Standardizing the response format
    this.message = message;
    this.success = false; // Indicates an API error
    this.errors = errors;

    // Capture the stack trace, excluding the constructor call
    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
