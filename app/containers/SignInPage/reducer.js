import * as typeActions from './constants';

export const initialState = {
  user: {
    name: '',
    displayName: '',
    identification: '',
    password: '',
  },
  message: '',
  resultRedirect: false,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.SIGN_IN:
      return state;
    case typeActions.SIGN_IN_SUCCESS:
      localStorage.setItem(
        'save accout',
        JSON.stringify(!state.resultRedirect),
      );
      const getLocal = JSON.parse(localStorage.getItem('save accout'));
      return {
        ...state,
        user: action.data,
        message: 'Đăng Nhập Thành Công',
        resultRedirect: getLocal,
      };
    case typeActions.SIGN_IN_FAILD:
      return {
        ...state,
        message: action.message,
        resultRedirect: false,
      };
    case typeActions.LOG_OUT:
      return {
        ...state,
        message: action.message,
        resultRedirect: localStorage.removeItem('save accout'),
      };
    default:
      return state;
  }
};

export default myReducer;
