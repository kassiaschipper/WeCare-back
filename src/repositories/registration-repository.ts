import { patient } from "@prisma/client";
import { prisma } from "../config/database.js";

async function findRegistration():Promise<patient[]> {
    return prisma.patient.findMany();
}

const registrationRepository = {
    findRegistration,
};

export default registrationRepository;
