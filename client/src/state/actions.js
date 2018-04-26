export const actionNames = {
  FETCH_SUCCESS_HOTELS : "FETCH_SUCCESS_HOTELS",
  FETCH_ERROR_HOTELS   : "FETCH_ERROR_HOTELS",
  FETCH_LOADING        : "FETCH_LOADING",
};

const ENDPOINT = "http://localhost:3008/api/hotels";

export function fetchHotels() {
  return async (dispatch) => {
    dispatch({type: actionNames.FETCH_LOADING});
    
    try {
      let response = await fetch(ENDPOINT);
      let data = await response.json();

      dispatch({
        type: actionNames.FETCH_SUCCESS_HOTELS,
        data: data.hotels
      });
    } catch(error) {
      console.error("ERROR: ", error);
      dispatch({
        type: actionNames.FETCH_ERROR_HOTELS,
        error: `An error has occurred while fetching the data from resource\n ${error}`,
      });
    }
    
  }
}