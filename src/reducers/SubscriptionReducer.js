import { SET_SUBSCRIPTION} from '../actions/types'
import { subscription } from '../utils'
const LocationSelectorReducer = (state = subscription, action) => {
    console.log("heloo", state)
  switch (action.type) {
    case SET_SUBSCRIPTION:
      return { ...state, subscription: action.payload }
    default:
      return state;
  }
}

export default LocationSelectorReducer;