interface Form {
  name: string;
  email: string;
  message: string;
  honeypot: string;
}
interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export type { Form, FormErrors };
