import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../App.css';
import QuoteForm from './QuoteForm/QuoteForm';
import ResultsPage from './ResultsPage/ResultsPage';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path = '/' component = { QuoteForm } />
        <Route path = '/results' component = { ResultsPage } />
      </Switch>
    </div>
  );
}

export default App;
