import {
  UPDATE_PASSWORD,
  UPDATE_TODO,
  UPDATE_NAME,
} from '../Reducers/InfoReducer';
export const updateName = username => async dispatch => {
  try {
    dispatch({
      type: UPDATE_NAME,
      username: username,
    });
  } catch (error) {
    console.log('ERROR');
  }
};
export const updatePassword = password => async dispatch => {
  try {
    dispatch({
      type: UPDATE_PASSWORD,
      password: password,
    });
  } catch (error) {
    console.log('ERROR');
  }
};

export const updateTodo = todo => async dispatch => {
  try {
    dispatch({
      type: UPDATE_TODO,
      todo: todo,
    });
  } catch (error) {
    console.log('ERROR');
  }
};
