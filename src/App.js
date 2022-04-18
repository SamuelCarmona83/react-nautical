import './App.css';
//import VuelosList from './components/vuelos';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

import Header from './containers/Header';
import VuelosListing from './containers/VuelosListing';
import VueloDetails from './containers/VueloDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/" exact component={VuelosListing} />
          <Route path="/vuelo/:vueloId" exact component={VueloDetails} />
          <Route>404 not Found!</Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
