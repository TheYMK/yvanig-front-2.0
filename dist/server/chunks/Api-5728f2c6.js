import axios from 'axios';

const API_URL = "http://localhost:8000/v1/api";
const BASE_URL = API_URL;
class HttpClient {
  constructor() {
    this.axios = axios.create({
      baseURL: BASE_URL,
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
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
class Api {
  constructor() {
    this.httpClient = new HttpClient();
  }
  async getStats() {
    return this.httpClient.get("/stats");
  }
  async sendEmailVerification(email, isRegistration = true) {
    return this.httpClient.post("/auth/send-email-verification", { email, isRegistration });
  }
  async register(data) {
    return this.httpClient.post("/auth/register", data);
  }
  async signin(data) {
    return this.httpClient.post("/auth/signin", data);
  }
  async sendPasswordResetEmail(email) {
    return this.httpClient.post("/auth/send-password-reset-email", { email });
  }
  async passwordReset(data) {
    return this.httpClient.post("/auth/password-reset", data);
  }
  async updateUserInfo(data) {
    return this.httpClient.patch(`/auth/update`, data);
  }
  async verifyEmail(data) {
    return this.httpClient.patch(`/auth/email/verify`, data);
  }
  async getCurrentuser() {
    return this.httpClient.get("/auth/whoami");
  }
  async signout() {
    return this.httpClient.post("/auth/signout");
  }
  async getFlights(page = 0, limit = 10, filters = null) {
    if (filters === null) {
      return this.httpClient.get(`/flights?page=${page}&limit=${limit}`);
    } else {
      return this.httpClient.get(`/flights?page=${page}&limit=${limit}&filterByOrigin=${filters.filterByOrigin}&filterByDestination=${filters.filterByDestination}&filterByDepartureDate=${filters.filterByDepartureDate}`);
    }
  }
  async createFlight(data) {
    return this.httpClient.post("/flights", data);
  }
  async getFlight(id) {
    return this.httpClient.get(`/flights/${id}`);
  }
  async removeFlight(id) {
    return this.httpClient.delete(`/flights/${id}`);
  }
  async updateFlight(data) {
    return this.httpClient.patch(`/flights/${data.id}`, data);
  }
  async getSeats() {
    return this.httpClient.get("/seats");
  }
  async createSeat(data) {
    return this.httpClient.post("/seats", data);
  }
  async updateSeat(id, data) {
    return this.httpClient.patch(`/seats/${id}`, data);
  }
  async removeSeat(id) {
    return this.httpClient.delete(`/seats/${id}`);
  }
  async uploadImage(image) {
    return this.httpClient.post("/cloudinary/upload", { image });
  }
  async removeImage(public_id) {
    return this.httpClient.post("/cloudinary/remove", { public_id });
  }
  async getPassenger() {
    return this.httpClient.get("/passengers/me");
  }
  async getPassengerById(id) {
    return this.httpClient.get(`/passengers/unique/${id}`);
  }
  async createBooking(data) {
    return this.httpClient.post("/bookings", data);
  }
  async getBookings(page = 0, limit = 10) {
    return this.httpClient.get("/bookings");
  }
  async getBookingsByUser(page = 0, limit = 10) {
    return this.httpClient.get("/bookings/me");
  }
  async updateBooking(id, data) {
    return this.httpClient.patch(`/bookings/${id}`, data);
  }
  async updateBookingStatus(id, status) {
    return this.httpClient.patch(`/bookings/update-status/${id}`, { status });
  }
  async removeBooking(id) {
    return this.httpClient.delete(`/bookings/${id}`);
  }
  getSettings() {
    return this.httpClient.get("/settings");
  }
  updateSettings(settings) {
    return this.httpClient.patch("/settings", settings);
  }
  async sendMessage(msgObj) {
    return this.httpClient.post("/contact/send-message", msgObj);
  }
}
new Api();
//# sourceMappingURL=Api-5728f2c6.js.map
