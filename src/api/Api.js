import { HttpClient } from "./HttpClient";

class Api {

  constructor() {
    this.httpClient = new HttpClient();
  }

  // USER
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


  async getCurrentuser() {
    return this.httpClient.get('/auth/whoami')
  }

  async signout() {
    return this.httpClient.post('/auth/signout')
  }

  // FLIGHT
  async getFlights(page = 0, limit = 10) {
    return this.httpClient.get(`/flights?page=${page}&limit=${limit}`)
  }

  async createFlight(data) {
    return this.httpClient.post('/flights', data)
  }

  async getFlight(id) {
    return this.httpClient.get(`/flights/${id}`)
  }

  async removeFlight(id) {
    return this.httpClient.delete(`/flights/${id}`)
  }

  async updateFlight(data) {
    return this.httpClient.patch(`/flights/${data.id}`, data)
  }


  // SEAT
  async getSeats() {
    return this.httpClient.get('/seats')
  }

  async createSeat(data) {
    return this.httpClient.post('/seats', data)
  }

  async updateSeat(id, data) {
    return this.httpClient.patch(`/seats/${id}`, data)
  }

  async removeSeat(id) {
    return this.httpClient.delete(`/seats/${id}`)
  }

  // CLOUDINARY
  async uploadImage(image) {
    return this.httpClient.post('/cloudinary/upload', { image })
  }

  async removeImage(public_id) {
    return this.httpClient.post('/cloudinary/remove', { public_id })
  }

  // PASSENGER
  async getPassenger() {
    return this.httpClient.get('/passengers/me')
  }

  async getPassengerById(id) {
    return this.httpClient.get(`/passengers/unique/${id}`)
  }


  // BOOKING
  async createBooking(data) {
    return this.httpClient.post('/bookings', data)
  }
  async getBookings(page = 0, limit = 10) {
    return this.httpClient.get('/bookings')
  }
  async updateBooking(id, data) {
    return this.httpClient.patch(`/bookings/${id}`, data)
  }
  async updateBookingStatus(id, status) {
    return this.httpClient.patch(`/bookings/update-status/${id}`, { status })
  }
  async removeBooking(id) {
    return this.httpClient.delete(`/bookings/${id}`)
  }
}

export const api = new Api()