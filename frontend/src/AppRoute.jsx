import {BrowserRouter,Routes, Route} from 'react-router-dom';
import Login from './feature/auth/pages/login.jsx'
import Register from './feature/auth/pages/Register'


function AppRoute(){
    return(
        <BrowserRouter>
        <Routes>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
        </Routes>
        
        </BrowserRouter>
    )
}


export default AppRoute
