import { loadEnv } from "dotenv-gad";
import schema from "../../env.schema";

export const env = loadEnv(schema)