import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  url: any = {
    api: 'http://bibliotecaweb.herokuapp.com'
  }
  constructor() { }

  store(data) {
    return new Promise((resolve, reject) => {
      axios.post(`${this.url.api}/book`, data).then((res) => {
        resolve(res.data);
      }).catch((err) => { reject(err) });
    });
  }

  index() {
    return new Promise((resolve, reject) => {
      axios.get(`${this.url.api}/book`).then((res) => {
        resolve(res.data);
      }).catch((err) => { reject(err) });
    });
  }

  delete(id) {
    return new Promise((resolve, reject) => {
      axios.delete(`${this.url.api}/book/${id}`).then((res) => {
        resolve(res.data);
      }).catch((err) => { reject(err) });
    });
  }
}
