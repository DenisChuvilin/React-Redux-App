import axios from 'axios';

export const fetchJoke = () => {
    return dispatch => {
        dispatch({type: 'FETCH_QUOTE_START'});
        axios
        .get('https://api.chucknorris.io/jokes/random')
       
        .then(response => {
            dispatch({type: 'FETCH_QUOTE_SUCCESS', payload: response.data.value})
        })

        .catch(err => {
            dispatch({
                type:'FETCH_JOKE_FAILURE',
                payload: `Error ${err.response.status}: ${err.response.data}`
            })
        })
    }
}