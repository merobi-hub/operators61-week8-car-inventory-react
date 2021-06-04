import React from 'react';
import ReactDOM from 'react-dom';
import { Home, Dashboard, SignIn } from './components';
import './styles.css';
import reportWebVitals from './reportWebVitals';

//import for react routing
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//import redux data for app-wide use
import { Provider } from 'react-redux';
import { store } from './redux/store';

//firebase auth imports
import { FirebaseAppProvider, AuthCheck } from 'reactfire';
import 'firebase/auth';
import { firebaseConfig } from './firebaseConfig';


ReactDOM.render(
  <React.StrictMode>
    <FirebaseAppProvider firebaseConfig={firebaseConfig}>
      <Provider store = { store }>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home title='Operators-61 Car Inventory' />
            </Route>

            <Route path='/dashboard' component={Dashboard} />

            <Route path='/signin' component={SignIn} />

          </Switch>
        </Router>
      </Provider>
    </FirebaseAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
