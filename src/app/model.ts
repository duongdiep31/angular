export interface IProduct {
    _id: number,
    name: string,
    cost: number,
    spent: number
  }
export interface Auth {
    name: string
    email: String;
    password: any
  }
  export interface Area{
    _id: any,
    name: string,
    idProject :any
  }
  export interface People{
    _id: any,
    idArea: any,
    idProject :any
  }
  export interface Dictionary {
    [key: string]: any
  }
  export interface User {
    _id: any,
    name: String,
    email: String,
    phone: Number,
    role :String
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