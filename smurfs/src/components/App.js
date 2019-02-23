import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import './App.css';
import { addSmurf } from '../actions';
import SmurfList from './SmurfList';
import SmurfInput from './SmurfInput';

/*
 to wire this component up you're going to need a few things.
 I'll let you do this part on your own. 
 Just remember, `how do I `connect` my components to redux?`
 `How do I ensure that my component links the state to props?`
 */
class App extends Component {
  render() {
    return (
      <div className="App">
        {this.props.error ? <div className="appError">{this.props.error}</div> : null}
        <SmurfInput />
        <SmurfList />
      </div>
    );
  }
}

App.PropTypes = {
  error: PropTypes.string
}

const mapStateToProps = state => {
  return {
    error: state.error,
  }
}

export default connect(mapStateToProps)(App);
