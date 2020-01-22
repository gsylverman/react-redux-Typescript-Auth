import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from "./reducers/index";
import Home from "./components/Home/Home";
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Signout from "./components/Signout/Signout";
import Feature from "./components/Feature/Feature";

const store = createStore(rootReducer, {
    auth: {
        authentichated: localStorage.getItem("token")
    }
}, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App>
                <Route path="/" exact component={Home} />
                <Route path="/signin" component={Signin} />
                <Route path="/signup" component={Signup} />
                <Route path="/feature" component={Feature} />
                <Route path="/signout" component={Signout} />

            </App>
        </Router>
    </Provider>
    , document.getElementById('root'));


