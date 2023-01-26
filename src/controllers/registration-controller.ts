import { Request, Response } from "express";
import registrationService from "../service/registration-service.js"
import httpStatuss from "http-status";

export async function getRegistrationInfo(_req: Request, res: Response) {

   try {
      const registrationIfo = await registrationService.getRegistrationInfo();
      return res.status(httpStatuss.OK).send(registrationIfo);
   } catch (error) {
      console.log(error);
      return res.sendStatus(httpStatuss.NOT_FOUND);
   }
}
