// @ts-nocheck
import { API_URL } from "../config/env";
import axios from 'axios'

export const BASE_URL = API_URL



export class HttpClient {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
      withCredentials: true
    });
  }

  get(url) {
    return this.axios.get(url);
  }

  post(url, data) {
    return this.axios.post(url, data);
  }

  patch(url, data) {
    return this.axios.patch(url, data);
  }

  delete(url) {
    return this.axios.delete(url);
  }
}
