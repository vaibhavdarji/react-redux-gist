
import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import Search from "./components/Search";
import GistDetail from "./components/Gist";
const App = () => {
  return (
    <Router>
      <div>
        <Route path="/" exact={true} component={Search} />
        <Route path="/:id"  component={GistDetail} />
      </div>
    </Router>
  );
}

export default App;
