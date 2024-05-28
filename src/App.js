import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/home'


function App() {
  return (
   <>
     <BrowserRouter>
        <Routes>
        <Route path='/Portfolio' element={<Home/>}/>
        <Route path='*' element={<Home/>}/>
        </Routes>
      </BrowserRouter>
   </>
  );
}

export default App;
