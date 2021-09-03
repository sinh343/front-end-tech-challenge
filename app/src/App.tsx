import { Home } from 'pages/Home';
import { AssetPage } from './pages/AssetPage';

import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { NotFoundPage } from 'pages/NotFoundPage';
import { Container } from '@material-ui/core';
import { useStyles } from 'styles';
import { Favourites } from 'pages/Favourites';

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Container maxWidth="xl" className={classes.container}>
        <Link to="/favourites">go to favourites</Link>
        <Link to="/">go to search</Link>
        <Switch>
          <Route path="/favourites" component={Favourites}></Route>
          <Route path="/asset/:id" component={AssetPage}></Route>
          <Route path="/" exact component={Home}></Route>
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </Container>
    </BrowserRouter>
  );
}

export default App;
