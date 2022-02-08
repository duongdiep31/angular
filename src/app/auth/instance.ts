import { HttpHeaders } from "@angular/common/http"

export const api = (key: string)=>{
    const url = `http://localhost:3001/${key}`
    return url
}
export const httpOptions ={
    headers:new HttpHeaders({'Content-Type':'Application/json'})
  }