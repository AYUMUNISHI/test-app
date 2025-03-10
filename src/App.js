import { Header } from './component/Header';
import posts from './data/posts';
import  Home from './pages/Home'


function App() {
  return (
    <div className="App">
        <div className="App">
          <Header />
          <Home src={(posts)} />
        </div>
    </div>
  );
}

export default App;
