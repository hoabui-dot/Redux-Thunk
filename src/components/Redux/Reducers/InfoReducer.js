export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_PASSWORD = 'UPDATE_PASSWORD';

const initialState = {
  username: '',
  password: '',
};

export default function actionForReducer(state = initialState, payload) {
  switch (payload.type) {
    case UPDATE_NAME:
      return {
        ...state,
        username: payload.username,
      };
    case UPDATE_PASSWORD:
      return {
        ...state,
        password: payload.password,
      };
    default:
      return state;
  }
}
