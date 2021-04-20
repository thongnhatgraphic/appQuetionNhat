import * as typeActions from './constants';

export const initialState = {
  listQuestion: [],
  score: '',
  notifyMessage: '',
  questionFaild: null,
};

const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case typeActions.FETCH_DATA:
      return state;
    case typeActions.FETCH_DATA_SUCCESS:
      return {
        ...state,
        listQuestion: [...action.data],
      };
    case typeActions.FETCH_DATA_FAILD:
      return {
        ...state,
      };
    case typeActions.SUBMIT_VALUE:
      return { ...state };
    case typeActions.SUBMIT_VALUE_SUCCESS:
      console.log(action.score);
      return {
        ...state,
        score: action.score,
        questionFaild: [...action.arrFaild],
      };
    case typeActions.SUBMIT_VALUE_FAILD:
      return { ...state, notifyMessage: action.mes };
    default:
      return state;
  }
};

export default myReducer;
