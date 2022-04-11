import { HttpClient } from "./HttpClient";

class Api {

  constructor() {
    this.httpClient = new HttpClient();
  }

  async sendEmailVerification(email) {
    return this.httpClient.post('/auth/send-email-verification', { email })
  }

  async register(data) {
    return this.httpClient.post('/auth/register', data)
  }

  async signin(data) {
    return this.httpClient.post('/auth/signin', data)
  }

  async sendPasswordResetEmail(email) {
    return this.httpClient.post('/auth/send-password-reset-email', { email })
  }

  async passwordReset(data) {
    return this.httpClient.post('/auth/password-reset', data)
  }
}

export const api = new Api()