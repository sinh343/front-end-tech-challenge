import './App.css';
import { Home } from 'pages/Home/Home';
import { AssetPage } from './pages/AssetPage/AssetPage';

import { BrowserRouter, Switch, Route } from "react-router-dom"
import { NotFoundPage } from 'pages/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/asset/:id" component={AssetPage}></Route>
        <Route path="/" exact component={Home}></Route>
        <Route path="*" component={NotFoundPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
