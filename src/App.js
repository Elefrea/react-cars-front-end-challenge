import * as React from 'react';
import Cars from './Components/Cars';
import Header from './Components/Header';
import Footer from './Components/Footer';
import Landing from './Components/Landing';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './style/app.css'
const App = () => (
  <div className="main-grid-container">
    <Router>
        <div className="page">
          <Header />
          <Switch>
            <Route path="/" exact component={Landing} />
            <Route path="/cars/:duration?/:distance?" component={Cars} />
            {/*<Route component={Error}/>*/}
          </Switch>
          <Footer />
        </div>
      </Router>
</div>
);

export default App;
