import { memo } from 'react'
import { toast } from 'react-toastify'

const Toast = memo(({ msg, position, duration, styles }) =>
  toast(msg, { autoClose: duration, position, hideProgressBar: true, style: styles })
)

export default {
  type: 'view',
  name: 'toast',
  create: () => Toast
}
