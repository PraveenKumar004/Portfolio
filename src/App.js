import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'
import NoPage from './pages/noPage';
import Sample from './pages/sample';

function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/sample' element={<Sample/>}/>
        <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
