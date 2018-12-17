/**
 * authentication.actions.js
 * Dispatches actions specific for authentication methods
 */

// Services
import {authenticationService as authService} from '../services';

// Constants
import {authenticationActionsConstants as authConstants} from '../constants';

export const userTokenAuthentication = (tokenName) => {
  return async (dispatch) => {
    const token = localStorage.getItem(tokenName);
    console.log('called');
    if (token) {
      console.log('token')
      dispatch({type: authConstants.USER_TOKEN_REQUEST});
      try {
        const response = await authService.userToken(tokenName);
        dispatch({type: authConstants.USER_TOKEN_SUCCESS});
      } catch (err) {
        dispatch({type: authConstants.USER_TOKEN_FAILURE});
      }
    }
  }
}

/**
 * Login User Action Dispatch
 * @param {String} username 
 * @param {String} password 
 */
export const userLogin = (username, password) => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGIN_REQUEST});
    try {
      const response = await authService.login(username, password);
      dispatch({type: authConstants.LOGIN_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGIN_FAILURE});
    }
  }
}

/**
 * Logout User Action Dispatch
 */
export const userLogout = () => {
  return async (dispatch) => {
    dispatch({type: authConstants.LOGOUT_REQUEST});
    try {
      const response = await authService.logout();
      dispatch({type: authConstants.LOGOUT_SUCCESS});
    } catch (err) {
      dispatch({type: authConstants.LOGOUT_FAILURE})
    }
  }
}
