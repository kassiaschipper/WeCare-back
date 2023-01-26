import { Router } from "express";
import { getRegistrationInfo } from "../controllers/registration-controller.js";

const registrationRouter = Router();

registrationRouter
    .get("/", getRegistrationInfo);

export { registrationRouter };