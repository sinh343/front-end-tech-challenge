import './App.css';
import { Home } from 'pages/Home';
import { AssetPage } from './pages/AssetPage';

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NotFoundPage } from 'pages/NotFoundPage';
import { Container } from '@material-ui/core';

function App() {
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <Switch>
          <Route path="/asset/:id" component={AssetPage}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
