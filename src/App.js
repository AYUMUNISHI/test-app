import { Header } from './component/Header';
import posts from './data/posts';
import { Home } from './pages/Home';
import { Show } from './pages/Show';
import { Contact } from './pages/Contact/Contact';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {


  return (
    <BrowserRouter>

      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home src={posts}/>} />
          <Route path="/posts/:id" element={<Show/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>

      </div>

    </BrowserRouter>
  );
}

export default App;
