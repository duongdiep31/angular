export interface IProduct {
    id: number,
    name: string,
    cost: number
  }
  export interface ICategory {
    _id: number
    name: string;
    image: string;
  }
export interface Auth {
    name: string
    email: String;
    password: any
  }
  export interface Dictionary {
    [key: string]: any
  }
  
export enum COL_DATA_TYPES{
  TEXT,
  NUMBER,
  CURRENCY,
  DATE
}
//auth
export interface Signin{
  userName: string,
  password:string
}
export interface Register{
agree: boolean
checkPassword: string
email: string
nickname: string
password: string
phoneNumber: number
phoneNumberPrefix: number
role: number
}