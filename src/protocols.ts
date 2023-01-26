export type ApplicationError = {
    name: string;
    message: string;
  };
  
export type Registration = {
  name: string,
  image?: string
  birthdayDate: string | Date,
  weigth: number,
  heigth: number    
  };