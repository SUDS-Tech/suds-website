import { Resend } from "resend";
import { getEnv } from "./env";

let _resend: Resend;

export function getResend() {
  if (!_resend) {
    const env = getEnv();
    _resend = new Resend(env.RESEND.API_KEY);
  }
  return _resend;
}
