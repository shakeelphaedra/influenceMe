import { SHOW_REAL_APP } from '../actions/types'
export default (state = null, action) => {
  switch (action.type) {
    case SHOW_REAL_APP:
      return action.payload
    default:
      return state;
  }
}