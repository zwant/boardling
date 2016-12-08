import { messageTypes } from '../config'

const metrics = (state = {}, action) => {
  if (action.type === messageTypes.new_metric) {
    return { ...state, [action.payload.name]: action.payload.value }
  }
  return state
}

export {
  metrics
}
