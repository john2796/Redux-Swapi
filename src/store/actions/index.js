import axios from "axios";

export const LOADING = "LOADING";
export const FETCHING_SUCCESS = "FETCHING_SUCCESS";
export const FETCHING_FAIL = "FETCHING_FAIL";

export const getData = URL => dispatch => {
  dispatch(loading());
  axios
    .get(`${URL}`)
    .then(res =>
      dispatch({
        type: FETCHING_SUCCESS,
        payload: res.data
      })
    )
    .catch(err =>
      dispatch({
        type: FETCHING_FAIL,
        payload: "fetching falied"
      })
    );
};

export const loading = () => {
  return {
    type: LOADING
  };
};
