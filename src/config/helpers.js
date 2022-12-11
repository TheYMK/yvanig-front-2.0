import { getSettingsStoreValues } from "../stores"
import { Themes } from "./constants"

export const isEmailValid = (email) =>
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  )

export const setCurrentTheme = () => {
  const theme = getSettingsStoreValues().default_theme
  let element = document.getElementById('yvanigcontainer')
  element.setAttribute("data-theme", theme === Themes.LIGHT ? 'light_theme' : 'dark_theme')
}

export const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = error => reject(error);
});