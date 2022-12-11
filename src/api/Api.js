import { HttpClient } from "./HttpClient";
class Api {

  constructor() {
    this.httpClient = new HttpClient();
  }

  // 

  async getStats() {
    return this.httpClient.get('/stats')
  }

  // USER
  // @ts-ignore
  async sendEmailVerification(email, isRegistration = true) {
    return this.httpClient.post('/auth/send-email-verification', { email, isRegistration })
  }

  // @ts-ignore
  async register(data) {
    return this.httpClient.post('/auth/register', data)
  }
  // @ts-ignore
  async signin(data) {
    return this.httpClient.post('/auth/signin', data)
  }
  // @ts-ignore
  async sendPasswordResetEmail(email) {
    return this.httpClient.post('/auth/send-password-reset-email', { email })
  }
  // @ts-ignore
  async passwordReset(data) {
    return this.httpClient.post('/auth/password-reset', data)
  }
  // @ts-ignore
  async updateUserInfo(data) {
    return this.httpClient.patch(`/auth/update`, data)
  }
  // @ts-ignore
  async verifyEmail(data) {
    return this.httpClient.patch(`/auth/email/verify`, data)
  }
  // @ts-ignore
  async getCurrentuser() {
    return this.httpClient.get('/auth/whoami')
  }
  // @ts-ignore
  async signout() {
    return this.httpClient.post('/auth/signout')
  }

  // FLIGHT
  // @ts-ignore
  async getFlights(page = 0, limit = 10, filters = null) {
    if (filters === null) {
      return this.httpClient.get(`/flights?page=${page}&limit=${limit}`)
    } else {
      // @ts-ignore
      return this.httpClient.get(`/flights?page=${page}&limit=${limit}&filterByOrigin=${filters.filterByOrigin}&filterByDestination=${filters.filterByDestination}&filterByDepartureDate=${filters.filterByDepartureDate}`)
    }
  }
  // @ts-ignore
  async createFlight(data) {
    return this.httpClient.post('/flights', data)
  }
  // @ts-ignore
  async getFlight(id) {
    return this.httpClient.get(`/flights/${id}`)
  }
  // @ts-ignore
  async removeFlight(id) {
    return this.httpClient.delete(`/flights/${id}`)
  }
  // @ts-ignore
  async updateFlight(data) {
    return this.httpClient.patch(`/flights/${data.id}`, data)
  }


  // SEAT
  async getSeats() {
    return this.httpClient.get('/seats')
  }
  // @ts-ignore
  async createSeat(data) {
    return this.httpClient.post('/seats', data)
  }
  // @ts-ignore
  async updateSeat(id, data) {
    return this.httpClient.patch(`/seats/${id}`, data)
  }
  // @ts-ignore
  async removeSeat(id) {
    return this.httpClient.delete(`/seats/${id}`)
  }

  // CLOUDINARY
  // @ts-ignore
  async uploadImage(image) {
    return this.httpClient.post('/cloudinary/upload', { image })
  }
  // @ts-ignore
  async removeImage(public_id) {
    return this.httpClient.post('/cloudinary/remove', { public_id })
  }

  // PASSENGER
  async getPassenger() {
    return this.httpClient.get('/passengers/me')
  }
  // @ts-ignore
  async getPassengerById(id) {
    return this.httpClient.get(`/passengers/unique/${id}`)
  }


  // BOOKING
  // @ts-ignore
  async createBooking(data) {
    return this.httpClient.post('/bookings', data)
  }
  // @ts-ignore
  async getBookings(page = 0, limit = 10) {
    return this.httpClient.get('/bookings')
  }
  // @ts-ignore
  async getBookingsByUser(page = 0, limit = 10) {
    return this.httpClient.get('/bookings/me')
  }
  // @ts-ignore
  async updateBooking(id, data) {
    return this.httpClient.patch(`/bookings/${id}`, data)
  }
  // @ts-ignore
  async updateBookingStatus(id, status) {
    return this.httpClient.patch(`/bookings/update-status/${id}`, { status })
  }
  // @ts-ignore
  async removeBooking(id) {
    return this.httpClient.delete(`/bookings/${id}`)
  }

  // SETTINGS
  getSettings() {
    return this.httpClient.get('/settings')
  }
  // @ts-ignore
  updateSettings(settings) {
    return this.httpClient.patch('/settings', settings)
  }

  // CONTACT
  // @ts-ignore
  async sendMessage(msgObj) {
    return this.httpClient.post('/contact/send-message', msgObj)
  }
}

export const api = new Api()