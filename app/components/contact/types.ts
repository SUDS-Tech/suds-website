import { Interface } from "readline";

interface Form {
  name: string;
  email: string;
  message: string;
}
interface FormErrors {
  name: string;
  email: string;
  message: string;
}

export type { Form, FormErrors };
