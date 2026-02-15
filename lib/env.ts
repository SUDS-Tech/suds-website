import { loadEnv } from "dotenv-gad";
import schema from "../env.schema";

let _env: ReturnType<typeof loadEnv<typeof schema>>;

export function getEnv() {
  if (!_env) {
    // DEBUG: remove after verifying production works
    console.log("[env] FIREBASE_PROJECT_ID in process.env:", !!process.env.FIREBASE_PROJECT_ID);
    console.log("[env] RESEND_API_KEY in process.env:", !!process.env.RESEND_API_KEY);
    _env = loadEnv(schema);
    console.log("[env] loadEnv result keys:", Object.keys(_env));
    console.log("[env] FIREBASE exists:", !!_env.FIREBASE);
  }
  return _env;
}
