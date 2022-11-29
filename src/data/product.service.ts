import { Injectable } from "@angular/core";
import axios from 'axios'

@Injectable({
  providedIn: 'root'
})

export class ProductService {
  urlpersonas: string = "http://localhost:3000/people";
  constructor() {
  }

  leer() {
    return axios.get(this.urlpersonas).then(res => {
      console.log(res.data)
      return res.data;
    }).catch((error) => {
      console.log(error)
    })
  }
}
