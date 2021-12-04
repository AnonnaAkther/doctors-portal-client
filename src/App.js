import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css'
import Appoinment from './Pages/Appoinment/Appointment/Appointment';
import Home from './Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/appoinment">
            <Appoinment/>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;