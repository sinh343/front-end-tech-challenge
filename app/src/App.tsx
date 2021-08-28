import './App.css';
import { Home } from 'pages/Home/Home';
import { AssetPage } from './pages/AssetPage/AssetPage';

function App() {
  const currentUrl = window.location.pathname;
  return (
    currentUrl === "/"
      ? <Home />
      : <AssetPage title="test" description={"test desc"} image={{ src: "https://via.placeholder.com/150" }} />
  );
}

export default App;
