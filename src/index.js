import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Notifications from "./components/notifications";
import 'bootstrap/dist/css/bootstrap.min.css';

// REDUX

import { Provider } from 'react-redux';
import store from './redux/store';

ReactDOM.render(

    <Provider store={store}>

        <React.StrictMode>
            <Notifications />
            <App />

        </React.StrictMode>

    </Provider>,

    document.getElementById('root'),

);
