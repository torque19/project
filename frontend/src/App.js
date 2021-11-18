import logo from './ashoka-chakra-png-46973.png';
import sign from './pngwing.com.png';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch,withRouter } from 'react-router-dom';
import Home from './home';
import Register from './register';
import Login from './login';
import Particles from 'react-particles-js';

const App = () => {
  
  return (
    <Router>
    <div className="App">
    
      <div class = "navigation_menu">
            <div class = "sign">
              <img src={sign} class = "sign-logo" alt = "sign"/>
            </div>
            <div class = "check-logo">
              <h6 class="MHA">Ministry of Home Affairs</h6> 
              <h2 class = "pname">Central Criminal Record Database</h2>
            </div>
            <div class = "home">
                <Link id = "back" to="/">Home</Link>
            </div>
            <div class = "home1">
                <Link id = "profile" to="/signup">Register</Link>
            </div>
            <div class = "Logout">
                <Link id = "signout" to="/signin">Login</Link>
            </div>
       </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Switch>
              <Route exact path='/theme' component={Home}></Route>
              <Route exact path='/signup' component={Register}></Route>
              <Route exact path='/signin' component={Login}></Route>
      </Switch>
      
    </div>
    <Particles className="particles"
  params={{
    particles: {
      color: {
        value: "0feef5"
      },
      line_linked: {
        color: {
          value: "0feef5"
        }
      },
      number: {
        value: 90
      },
      size: {
        value: 3
      },
      
    }
  }}
/>
    </Router>
    
      
      
  );
}

export default App;
