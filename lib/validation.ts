export interface ContactInput {
  name: string;
  email: string;
  message: string;
  honeypot?: string;
}

interface ValidationError {
  field: string;
  message: string;
}

export function validateContact(data: unknown): {
  valid: boolean;
  errors: ValidationError[];
  sanitized?: ContactInput;
} {
  const errors: ValidationError[] = [];

  if (!data || typeof data !== "object") {
    return { valid: false, errors: [{ field: "body", message: "Invalid request body" }] };
  }

  const { name, email, message, honeypot } = data as Record<string, unknown>;

  // Honeypot — only present in payload if a bot filled it
  if (typeof honeypot === "string" && honeypot.trim().length > 0) {
    return { valid: false, errors: [{ field: "honeypot", message: "Bot detected" }] };
  }

  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push({ field: "name", message: "Name must be at least 2 characters" });
  } else if (name.trim().length > 255) {
    errors.push({ field: "name", message: "Name must be at most 255 characters" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
    errors.push({ field: "email", message: "Please provide a valid email address" });
  }

  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push({ field: "message", message: "Message must be at least 10 characters" });
  } else if (message.trim().length > 5000) {
    errors.push({ field: "message", message: "Message must be at most 5000 characters" });
  }

  if (errors.length > 0) {
    return { valid: false, errors };
  }

  return {
    valid: true,
    errors: [],
    sanitized: {
      name: (name as string).trim(),
      email: (email as string).toLowerCase().trim(),
      message: (message as string).trim(),
    },
  };
}

export function validateEmail(email: unknown): {
  valid: boolean;
  sanitized?: string;
  error?: string;
} {
  if (!email || typeof email !== "string") {
    return { valid: false, error: "Email is required" };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const trimmed = email.trim().toLowerCase();

  if (!emailRegex.test(trimmed)) {
    return { valid: false, error: "Please provide a valid email address" };
  }

  return { valid: true, sanitized: trimmed };
}
