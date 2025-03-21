// Base error class
export class AppError extends Error {
    constructor(message, statusCode) {
        super(message);
        this.statusCode = statusCode;
        this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
        this.isOperational = true; // Mark as operational error (not a programming error)
        Error.captureStackTrace(this, this.constructor); // Capture stack trace
    }
}

// Error for resource not found
class NotFoundError extends AppError {
    constructor(message = 'Resource not found') {
        super(message, 404);
    }
}

// Error for invalid input (e.g., validation errors)
export class ValidationError extends AppError {
    constructor(message = 'Invalid input') {
        super(message, 400);
    }
}

// Error for unauthorized access
export class UnauthorizedError extends AppError {
    constructor(message = 'Unauthorized') {
        super(message, 401);
    }
}

// Error for forbidden access
export class ForbiddenError extends AppError {
    constructor(message = 'Forbidden') {
        super(message, 403);
    }
}

