import { Header } from './component/Header';
import posts from './data/posts';
import Home from './pages/Home'
import { BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="App">
          <Header />
          <Home src={(posts)} />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
