import express, { Express } from 'express';
import { loadEnv } from './config/envs.js';
import { connectDb, disconnectDb } from './config/database.js';
import cors from 'cors';
import { registrationRouter } from './routers/registration-router.js';

loadEnv();

const app = express();
app
    .use(cors())
    .use(express.json())
    .get("/status", (_req, res) => res.send("ok"))
    .use("/registration", registrationRouter);

export function init(): Promise<Express> {
  connectDb();
  return Promise.resolve(app);
}
  
export async function close(): Promise<void> {
  await disconnectDb();
}
  
export default app;