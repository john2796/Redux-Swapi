import { LOADING, FETCHING_SUCCESS, FETCHING_FAIL } from "../actions";

const initialState = {
  char: [],
  errors: null,
  loading: false,
  next: "",
  prev: ""
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOADING:
      return {
        ...state,
        loading: true,
        errors: null
      };
    case FETCHING_SUCCESS:
      return {
        ...state,
        loading: false,
        char: action.payload.results,
        next: action.payload.next,
        prev: action.payload.previous,
        errors: null
      };
    case FETCHING_FAIL:
      return {
        ...state,
        loading: false,
        errors: action.payload
      };
    default:
      return state;
  }
};
