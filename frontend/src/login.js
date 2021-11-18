import React from 'react';
import Button from '@mui/material/Button'
import './App.css';
import App from './App';
import {useState, useEffect} from 'react';
import LockIcon from '@mui/icons-material/Lock';


function Login (){
    const [Email, setEmail] = useState("")
    const [Password, setPassword] = useState("")
    const [St, setSt] = useState("")
    
      const handle_change1 = (e) => {
        var text = e.target.value;
        console.log(text);
        setEmail(e.target.value);
        
      }
      const handle_change2 = (e) => {
        var text = e.target.value;
        console.log(text);
        setPassword(text);
        
      }
      const handle_change3 = (e) => {
        var text = e.target.value;
        console.log(text);
        setSt(e.target.value);
        
      }
     
      const Loginuser = async (e) => { 
        e.preventDefault();
        fetch("/loginUser",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Email,Password,St
            }),
        })
          .then((response) => response.json())
          .then((responseJson) =>{
            console.log(responseJson);
            if(responseJson.status === "200"){
              alert("Successfull login");
              window.location.replace(`/home`);
            }
            else{
              alert("Invalid Credentials");
            }
          })
          .catch((error) => console.log(error))
    };

return(
    <div>
        <div className="Login-Section">
            <div class = "login_content">
                <h1 style={{position:'absolute', left:'40%'}}>Sign in</h1>
                <div className="Userid1">
                    <input type="text" id="fname1" name = "Email1" value={Email} onChange={handle_change1} placeholder="Email"></input>
                </div>
                <div className="pass1">
                    <input type="password" id="pass1" name="Password" onChange={handle_change2} placeholder="Password"></input>
                </div>
                <div class="custom-select">
                    <select value={St} onChange={handle_change3} class = "state">
                        <option value="0">Select State:</option>
                        <option value="Delhi">Delhi</option>
                        <option value="Bihar">Bihar</option>
                        <option value="Uttar Pradesh">Uttar Pradesh</option>
                        <option value="Maharashtra">Maharashtra</option>
                        <option value="Tamil Nadu">Tamil Nadu</option>
                    </select>
                </div>
                <div className="submit1">
                    <Button variant="outlined" onClick={Loginuser} startIcon={<LockIcon />}>Log in</Button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Login;