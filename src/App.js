import React from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom';
import Notes from './components/Pages/Notes.js';
import Create from './components/Pages/Create.js';
import Layout from './components/Layout/Layout.js';
function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Notes} />
          <Route exact path="/create" component={Create} />
        </Switch>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
