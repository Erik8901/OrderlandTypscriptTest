import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './Counter';
import ShowCount from './ShowCount';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux"
import { store } from './redux/store/store'


//CSS
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <div>
          <nav className="nav">
            <Link to="/">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/show-clicks">Show Clicks</Link>
          </nav>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/counter" component={Counter} />
            <Route exact path="/show-clicks" component={ShowCount} />
          </Switch>
        </div>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
