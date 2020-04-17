import axios from 'axios';

export const fetchJoke = () => {
  return (dispatch) => {
    dispatch({ type: 'FETCH_JOKE_START' });
    axios
      .get('https://api.chucknorris.io/jokes/random')

      .then((response) => {
        // console.log(response.data.value);
        dispatch({ type: 'FETCH_JOKE_SUCCESS', payload: response.data.value });
      })

      .catch((err) => {
          console.log(err.response.data)
        dispatch({
          type: 'FETCH_JOKE_FAILURE',
          payload: `Error ${err.response.data.status}: ${err.response.data.error}`,
        });
      });
  };
};
