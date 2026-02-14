import { Resend } from "resend";
import { loadEnv } from "dotenv-gad";
import schema from "../env.schema";

let _resend: Resend;

export function getResend() {
  if (!_resend) {
    const env = loadEnv(schema);
    _resend = new Resend(env.RESEND.API_KEY);
  }
  return _resend;
}
