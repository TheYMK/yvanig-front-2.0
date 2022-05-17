import { writable, get } from 'svelte/store'


const defaultStoreValue = {
  bookingCache: {
    document_type: null,
    document_number: null,
    date_of_birth: null,
    gender: null,
    booking_type: 'flight',
    selectedOffer: null,
    flightId: null,
    seatId: null,
    selectedPaymentMethod: null
  },
  currentStep: 0
}


const bookingStoreWrittable = writable(defaultStoreValue)
const { subscribe, update } = bookingStoreWrittable
export const getBookingStoreValues = () => get(bookingStoreWrittable)


const bookingStore = {
  subscribe,
  init(flightId) {
    try {
      let cache = {}
      let currStep = 1;

      if (window && window.localStorage.getItem('bookingCache')) {
        cache = JSON.parse(window.localStorage.getItem('bookingCache'))
        console.log('[bookingStore] cache', cache)
        if (cache.flightId == flightId) {
          if (cache.selectedOffer) {
            currStep = 2
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.date_of_birth && cache.gender) {
            currStep = 3
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.date_of_birth && cache.gender && cache.seatId) {
            currStep = 4
          }
          if (cache.selectedOffer && cache.document_type && cache.document_number && cache.date_of_birth && cache.gender && cache.seatId && cache.selectedPaymentMethod) {
            currStep = 5
          }
        } else {
          window.localStorage.setItem('bookingCache', JSON.stringify(defaultStoreValue.bookingCache))
        }
      } else {
        if (window) {
          window.localStorage.setItem('bookingCache', JSON.stringify(defaultStoreValue.bookingCache))
        }
      }

      return update(store => ({
        ...store,
        bookingCache: { ...store.bookingCache, ...cache },
        currentStep: currStep
      }))
    } catch (err) {
      console.error('[bookingCacheStore] error on init', err)
    }
  },
  updateBooking(currentBookingProgress) {
    if (window && window.localStorage.getItem('bookingCache')) {
      let currStep = 1
      window.localStorage.setItem('bookingCache', JSON.stringify(currentBookingProgress))
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId) {
        currStep = 2
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender) {
        currStep = 3
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender && currentBookingProgress.seatId) {
        currStep = 4
      }
      if (currentBookingProgress.selectedOffer && currentBookingProgress.flightId && currentBookingProgress.document_type && currentBookingProgress.document_number && currentBookingProgress.date_of_birth && currentBookingProgress.gender && currentBookingProgress.seatId && currentBookingProgress.selectedPaymentMethod) {
        currStep = 5
      }

      return update(store => ({
        ...store,
        bookingCache: { ...currentBookingProgress },
        currentStep: currStep
      }))
    }
  },
  resetBooking() {
    window.localStorage.setItem('bookingCache', JSON.stringify(defaultStoreValue.bookingCache))
    return update(store => ({
      bookingCache: defaultStoreValue.bookingCache,
      currentStep: defaultStoreValue.currentStep
    }))
  }
}

export default bookingStore
