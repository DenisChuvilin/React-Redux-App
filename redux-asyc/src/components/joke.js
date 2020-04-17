import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Loader from 'react-loader-spinner';

import { fetchJoke } from '../store/actions/fetchJoke';

const Joke = (props) => {
//   console.log('joke:',props.joke);
  useEffect(() => {
    props.fetchJoke();
  }, []);

  return (
    <div>
      Hey, have you heard about Chuck Norris?
      {props.isFetching && <Loader type="Puff" color="#00BFFF" height={100} width={100} />}
      {props.joke && <h3>"{props.joke}"</h3>}
      {props.error && <p className="error">{props.error}</p>}
      <button onClick={props.fetchJoke}>Give me one more</button>
    </div>
  );
};

const mapStateToProps = (state) => {
//   console.log('state:', state);
  return {
    joke: state.joke,
    isFetching: state.isFetching,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchJoke })(Joke);
