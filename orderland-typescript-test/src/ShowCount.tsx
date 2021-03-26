import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


import { CountState}  from './redux/reducers/rootReducer'

//CSS
import './styles/ShowCount.css';

function ShowCount() {
  const { count } = useSelector((state: CountState) => state.count);

  return (
    <div className="ShowCount">
      <h1>ShowCount Page</h1>
      <span>You have clicked the button {count} times!</span>
        <div className="links">
          <Link to="/">Home</Link>
          <Link to="/counter">Go To Counter Page</Link>
        </div>
    </div>
  );
}

export default ShowCount;
