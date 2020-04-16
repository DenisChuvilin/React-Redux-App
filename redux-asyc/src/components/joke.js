import React, {useEffect} from 'react';
import {connect } from "react-redux";
import Loader from 'react-loader-spinner';

import {fetchJoke} from '../store/actions/fetchJoke';

const joke = (props) => {
    useEffect(() => {
props.fetchJoke();
    },[]);

return (
    <div>
        Have you heard about Chuck Norris?
    </div>
    {props.}
)
}

const mapStateToProps = state => {
    return {
        joke: state.jokeReducer.joke,
        isFetching: state.jokeReducer.isFetching,
        error: state.jokeReducer.error
    }
}

export default connect(
    mapStateToProps,
    {}
)