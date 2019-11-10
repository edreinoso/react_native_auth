import { AsyncStorage } from 'react-native';

// export const SIGNUP = 'SIGNUP';
// export const LOGIN = 'LOGIN';
import { AUTH, SIGNUP } from './actionTypes';

// this line is giving the yellow warning
// import { stopLoading, startLoading } from './index';

// action should have a mode in order to distinguish which action is being dispatched
export const login = (email, password) => {
  return dispatch => {
    // dispatch(startLoading())
    url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDmCbVg-Tlhmle8J4XfCVEix3A4f_kRUek'
    fetch(
      url,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      }
    )
      .catch(err => {
        console.log(err);
        alert("Authentication failed, please try again!");
        // dispatch(stopLoading());
      })
      .then(res => res.json())
      .then(parsedRes => {
        // dispatch(uiStopLoading());
        if (parsedRes.error) {
          alert("Authentication failed, please try again!");
        } else {
          console.log('successfully authenticated!')
        }
      });
  };
};