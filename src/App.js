
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.css';
// import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home';
import Edit from './components/edit';
import { Create } from './components/create';
import Details from './components/details';

function App() {
  return (
   <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/edit/:id' element={<Edit/>}></Route>
      <Route path='/create'element={<Create/>}></Route>
      <Route path='/details/:id' element={<Details/>}></Route>
    </Routes>
    </BrowserRouter>

   </>
  );
}

export default App;
