export interface ReviewInput {
  authorName: string;
  rating: number;
  content: string;
}

export interface ReplyInput {
  authorName: string;
  content: string;
}

interface ValidationError {
  field: string;
  message: string;
}

export function validateReview(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitized?: ReviewInput;
} {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== "object") {
    return {
      valid: false,
      errors: [{ field: "body", message: "Invalid request body" }],
    };
  }

  const { authorName, rating, content } = data as Record<string, unknown>;

  if (
    !authorName ||
    typeof authorName !== "string" ||
    authorName.trim().length < 2
  ) {
    errors.push({ field: "authorName", message: "Name must be at least 2 characters" });
  } else if (authorName.trim().length > 100) {
    errors.push({ field: "authorName", message: "Name must be at most 100 characters" });
  }

  if (typeof rating !== "number" || rating < 1 || rating > 5 || !Number.isInteger(rating)) {
    errors.push({ field: "rating", message: "Rating must be a whole number between 1 and 5" });
  }

  if (!content || typeof content !== "string" || content.trim().length < 10) {
    errors.push({ field: "content", message: "Review must be at least 10 characters" });
  } else if (content.trim().length > 2000) {
    errors.push({ field: "content", message: "Review must be at most 2000 characters" });
  }

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    sanitized: {
      authorName: (authorName as string).trim(),
      rating: rating as number,
      content: (content as string).trim(),
    },
  };
}

export function validateReply(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitized?: ReplyInput;
} {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== "object") {
    return {
      valid: false,
      errors: [{ field: "body", message: "Invalid request body" }],
    };
  }

  const { authorName, content } = data as Record<string, unknown>;

  if (
    !authorName ||
    typeof authorName !== "string" ||
    authorName.trim().length < 2
  ) {
    errors.push({ field: "authorName", message: "Name must be at least 2 characters" });
  } else if (authorName.trim().length > 100) {
    errors.push({ field: "authorName", message: "Name must be at most 100 characters" });
  }

  if (!content || typeof content !== "string" || content.trim().length < 5) {
    errors.push({ field: "content", message: "Reply must be at least 5 characters" });
  } else if (content.trim().length > 1000) {
    errors.push({ field: "content", message: "Reply must be at most 1000 characters" });
  }

  if (errors.length > 0) return { valid: false, errors };

  return {
    valid: true,
    errors: [],
    sanitized: {
      authorName: (authorName as string).trim(),
      content: (content as string).trim(),
    },
  };
}
