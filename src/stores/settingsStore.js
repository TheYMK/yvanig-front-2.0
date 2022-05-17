import { api } from '../api/Api'
import { writable, get } from 'svelte/store'
import { setCurrentTheme } from '../config/helpers'


const defaultStoreValue = {
  default_language: "fr",
  default_currency: "KMF",
  default_theme: "light",
  default_timezone: "eat"
}


const settingsStoreWrittable = writable(defaultStoreValue)
const { subscribe, update } = settingsStoreWrittable
export const getSettingsStoreValues = () => get(settingsStoreWrittable)


const settingsStore = {
  subscribe,
  async init() {
    try {
      const response = await api.getSettings()
      if (window && window.localStorage) {
        window.localStorage.setItem('yg_settings', JSON.stringify(response.data.settings))
      }
      return update(store => ({
        ...store,
        ...response.data.settings
      }))
    } catch (err) {
      console.error('[settingsCacheStore] error on init', err)
    }
  },
  async updateSettings(settings) {
    try {
      const response = await api.updateSettings(settings)
      if (window && window.localStorage) {
        window.localStorage.setItem('yg_settings', JSON.stringify(response.data.settings))
      }
      setCurrentTheme()
      return update(store => ({
        ...store,
        ...response.data.settings
      }))
    } catch (err) {
      console.error('[settingsCacheStore] error on updateSettings', err)
    }
  },

}

export default settingsStore
