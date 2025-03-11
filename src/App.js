import { Header } from './component/Header';
import posts from './data/posts';
import Home from './pages/Home';
import { Show } from './pages/Show';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home src={posts}/>} />
          <Route path="/posts/:id" element={<Show/>}/>
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
