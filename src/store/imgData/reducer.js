import { SETSIZEINFO, SETCOLORINFO } from './constant';

const initialState = {
  color: '',
  len: ''
};

export default function imgData(state = initialState, action) {
  switch (action.type) {
    case SETCOLORINFO:
      return {
        ...state,
        color: action.payload
      };
    case SETSIZEINFO:
      return {
        ...state,
        len: action.payload
      };
    default:
      return state;
  }
}
