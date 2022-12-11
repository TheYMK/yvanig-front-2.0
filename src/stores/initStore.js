import stores from '../stores'

export async function initBaseStores() {
  const { settingsStore } = stores

  try {
    await Promise.all([
      settingsStore.init()
    ])

  } catch (err) {
    console.error('[initBaseStores] error on init', err)
  }
}

export async function initBookingStore(flightId) {
  const { bookingStore } = stores
  try {
    await bookingStore.init(flightId)
  } catch (err) {
    console.error('[initBookingStore] error on init', err)
  }
}