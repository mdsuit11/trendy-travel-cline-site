import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter  as Router, Switch, Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Courses from './Components/Courses/Courses';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import  NotFound  from './Components/NotFound/NotFound';
import Profile from './Components/Profile/Profile';
import Login from './Components/Login/Login';
import Thumsup from './Components/Thumsup/Thumsup';
import AuthProvider from './context/AuthProvider';
import PrivetRoute from './privateRoute/PrivetRoute';
import Order from './Components/Order/Order';
import Spachial from './Components/Spachial/Spachial';
import SpachialService from './Components/SpachialService/SpachialService';

function App() {
  return (
    <div className="App">
    <AuthProvider>
    <Router>
       <Header></Header>
       <Switch>
         <Route path="/home">
           <Home></Home>
         </Route>
         {/* <Route path="/spachial">
           <Spachial></Spachial>
         </Route> */}
         <Route path='/spachialservice'>
            <SpachialService></SpachialService>
         </Route>
         <Route path="/about">
           <About></About>
         </Route>
         <Route path="/courses">
          <Courses></Courses>
         </Route>
         <Route path="/profile">
           <Profile></Profile>
         </Route>
         <Route path="/login">
           <Login></Login>
         </Route>
         <Route path="/thumsup">
           <Thumsup></Thumsup>
         </Route>
         <PrivetRoute path='/order'>
           <Order></Order>
         </PrivetRoute>
         <Route exact path="/">
           <Home></Home>
         </Route>
         <Route path="*">
          <NotFound></NotFound>
         </Route>
       </Switch>
       <Footer></Footer>
     </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
