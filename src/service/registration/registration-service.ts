import { notFoundError } from "../../errors/not-found-error.js";
import registrationRepository from "../../repositories/registration-repository.js"; 

async function getRegistrationInfo() {
    const registrationInfo = await registrationRepository.findRegistration();

    if(!registrationInfo){
        throw notFoundError();
    }
    return registrationInfo;
}

const registrationService = {
    getRegistrationInfo,
};

export default registrationService;