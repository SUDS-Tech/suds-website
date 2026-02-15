import { initializeApp, getApps, cert } from "firebase-admin/app";
import { getFirestore, Firestore } from "firebase-admin/firestore";
import { getEnv } from "./env";

let _db: Firestore;

export function getDb() {
  if (!_db) {
    const env = getEnv();
    if (getApps().length === 0) {
      initializeApp({
        credential: cert({
          projectId: env.FIREBASE.PROJECT_ID,
          clientEmail: env.FIREBASE.CLIENT_EMAIL,
          privateKey: env.FIREBASE.PRIVATE_KEY,
        }),
      });
    }
    _db = getFirestore();
  }
  return _db;
}
