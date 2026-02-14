import { Resend } from "resend";
import { loadEnv } from "dotenv-gad";
import schema from "../env.schema";

const env = loadEnv(schema);

export const resend = new Resend(env.RESEND.API_KEY);
