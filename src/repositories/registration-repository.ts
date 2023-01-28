import { personCared } from "@prisma/client";
import { prisma } from "../config/database.js";

async function findRegistration():Promise<personCared[]> {
    return prisma.personCared.findMany();
}

const registrationRepository = {
    findRegistration,
};

export default registrationRepository;
