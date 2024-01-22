import logo from './logo.svg';
import './App.css';
import Navbar from './componts/navbar';
import Myrouter from './componts/router';

function App() {
  return (
    <div className="App">
      
    <Navbar/>
    <Myrouter/>
    {/* <Notfound/> */}
    {/* <Home/> */}
    </div>
  );
}

export default App;
