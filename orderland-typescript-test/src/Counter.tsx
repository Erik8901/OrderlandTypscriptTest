import React, { Dispatch } from 'react';
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { Action } from './redux/actions/actions';


//CSS
import './styles/Counter.css';

function Counter() {
  const countDispatch = useDispatch<Dispatch<Action>>();

  const increment = () => {
    countDispatch({ type: 'COUNTER_INCREMENT' });
  };

  return (
    <div className="Counter">
      <h1>Counter Page</h1>
      <div>
        <button className="btn-click" onClick={increment}>Click This Button!</button>
      </div>
      <div className="links-counter">
        <Link to="/">Home</Link>
        <Link to="/show-clicks">To Show Clicks Page</Link>
      </div>

    </div>
  );
}

export default Counter;
