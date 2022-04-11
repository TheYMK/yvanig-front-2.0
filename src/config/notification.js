import { toast } from '@zerodevx/svelte-toast'

const SUCCESS_COLOR = '#48BB78'
const ERROR_COLOR = '#F56565'
const WARNING_COLOR = '#ffa200'
const INFO_COLOR = '#0077ff'

class NotificationCenter {
  displaySuccessNotification(msg) {
    toast.push(msg, {
      theme: {
        '--toastBackground': '#48BB78',
        '--toastBarBackground': '#2F855A'
      }
    })
  }

  displayErrorNotification(msg) {
    toast.push(msg, {
      theme: {
        '--toastBackground': '#F56565',
        '--toastBarBackground': '#C1272D'
      }
    })
  }

  displayWarningNotification(msg) {
    toast.push(msg, {
      theme: {
        '--toastBackground': '#ffa200',
        '--toastBarBackground': '#C1272D'
      }
    })
  }

  displayInfoNotification(msg) {
    toast.push(msg, {
      theme: {
        '--toastBackground': '#0077ff',
        '--toastBarBackground': '#C1272D'
      }
    })
  }
}

export const notificationCenter = new NotificationCenter()