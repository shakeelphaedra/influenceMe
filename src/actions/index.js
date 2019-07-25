import {SHOW_REAL_APP} from './types';

export const showRealAppAction = (val) => {
    return (dispatch) => {
        dispatch({
            type: SHOW_REAL_APP,
            payload: true
        })
    }
}