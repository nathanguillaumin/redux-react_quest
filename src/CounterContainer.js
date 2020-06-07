import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => ({
  count: state
});

const CountComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: 'ADD ONE' })}>+1</button>
    <button onClick={() => dispatch({ type: 'REMOVE ONE' })}>-1</button>

    <button onClick={() => dispatch({ type: 'ADD TEN' })}>+10</button>
    <button onClick={() => dispatch({ type: 'REMOVE TEN' })}>-10</button>

    <button onClick={() => dispatch({ type: 'RESET' })}>RESET</button>
  </div>
);

export default connect(
  mapStateToProps
)(CountComponent);

