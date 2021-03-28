
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import GistDetail from "./components/GistDetail";
import Home from './components/Home';
const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={Home} />
        <Route path="/:id"  component={GistDetail} />
      </div>
    </Router>
  );
}

export default App;
