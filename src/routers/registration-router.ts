import { Router } from "express";
import { getRegistrationInfo } from "../controllers/registration-controller.js";
import { authenticateToken } from "../middlewares/authentication-middleware.js";

const registrationRouter = Router();

registrationRouter
    .all("/*", authenticateToken)
    .get("/", getRegistrationInfo);

export { registrationRouter };