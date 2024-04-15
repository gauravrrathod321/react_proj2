import './App.css';
import NavBar from './Components/Layout/NavBar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import Home from './Components/Pages/Home';
import About from './Components/Pages/About';
import Contact from './Components/Pages/Contact';
import Add from './Components/Pages/User/Add';
import Show from './Components/Pages/User/Show';
import Update from './Components/Pages/User/Update';
import Delete from './Components/Pages/User/Delete';


function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
    <Routes>
      <Route path="/home" element={<Home/>}></Route>
      <Route path="/about" element={<About/>}></Route>
      <Route path="/contact" element={<Contact/>}></Route>
      <Route path="/User/Add" element={<Add/>}></Route>
      <Route path="/User/Show" element={<Show/>}></Route>
      <Route path="User/update/:userId" element={<Update/>}></Route>
      <Route path="User/delete/:userId" element={<Delete/>}></Route>
    </Routes>
    </BrowserRouter>
  
    </>
  );
}

export default App;
