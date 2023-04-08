import  { Routes, Route }  from  "react-router-dom" ; 

import Home from './Home';
import Contact from './Contact';
import Login from './login';


function Rotas() {
    return (
        <div>
           <Routes>
                <Route path='/'  element={<Home />} />
                <Route path='/Contact'  element={<Contact />} />
                <Route path='/login' element={<Login />} />
            
           </Routes>
        </div>
    )
}

export default Rotas;

