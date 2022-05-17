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