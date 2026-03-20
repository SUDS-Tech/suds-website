import { loadEnv } from "dotenv-gad";
import schema from "../env.schema";

let _env: ReturnType<typeof loadEnv<typeof schema>>;

export function getEnv() {
  if (!_env) {
    _env = loadEnv(schema);
  }
  return _env;
}
