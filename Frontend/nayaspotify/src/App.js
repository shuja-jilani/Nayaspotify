import './App.css';
import HomePage from './Components/HomePage';
import MyPage from './Components/MyPage';
import Navbar from './Components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <div>
      <Router>
      <Navbar/>
      <Routes>
    <Route path='/mypage' element = {<MyPage/>}></Route>
    <Route path='/' element = {<HomePage/>}></Route>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
