import React from 'react';
import './App.css';
import {useState, useEffect} from 'react';
import Button from '@mui/material/Button'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
function Register (){
    const [Firstname, setFirstname] = useState('');
  const [Lastname, setLastname] = useState('');
  const [Email, setEmail] = useState('');
  const [NewPassword, setNewPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [St, setSt] = useState('');
  
  const handle_change = (e) => {
    var text = e.target.value;
    console.log(text);
    setEmail(e.target.value);
    
  }
  const handle_change1 = (e) => {
    setFirstname(e.target.value);
    
  }
  const handle_change2 = (e) => {
    var text = e.target.value;
    console.log(text);
    setLastname(e.target.value);
    
  }
  const handle_change3 = (e) => {
    var text = e.target.value;
    console.log(text);
    setNewPassword(e.target.value);
    
  }
  const handle_change4 = (e) => {
    var text = e.target.value;
    console.log(text);
    setConfirmPassword(text);
    
  }
  const handle_change5 = (e) => {
    var text = e.target.value;
    console.log(text);
    setSt(text);
    
  }

  const register = async (e) => {      
    e.preventDefault();
    const res = await fetch("/registerUser",{
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body:JSON.stringify({
            Firstname,Lastname,Email,NewPassword,ConfirmPassword,St
          }),
      });
      const user = res.json();
      if(user.status === 422 || !user){
        window.alert("Invalid registration");
        console.log("Invald Registration");
      }else{
          window.alert("successful registration");
          console.log("Successful Registration");
      }


    }; 
 return (
    <div>
        <div className="Login-Section">
        <div class = "login_content">
        <h1 style={{position:'absolute', left:'40%'}}>Sign up</h1>
        <div class="name">
            <input type="text" id="ftname" label="Firstname"  name = "Firstname" value={Firstname}  onChange={handle_change1}  placeholder="Firstname"/>
            <input type="text" id="ltname" label="Lastname"  name = "Lastname" value={Lastname}  onChange={handle_change2}  placeholder="Lastname"/>
        </div>
        <div className="Userid">
            <input type="email" id="fname" name = "Email" value={Email} onChange={handle_change}    placeholder="Email"/>
        </div>
        <div className="pass">
            <input type="password" id="pass" name="NewPassword" value={NewPassword}  onChange={handle_change3} placeholder="New Password"/>
      <input type="password" id="cn_pass" name="ConfirmPassword" value={ConfirmPassword}  onChange={handle_change4} placeholder="Confirm Password"/>
    </div>
    <div class="custom-select">
      <select class = "state" name="St" value={St} onChange={handle_change5} >
        <option value="0">Select State:</option>
        <option value="1">Audi</option>
        <option value="2">BMW</option>
        <option value="3">Citroen</option>
        <option value="4">Ford</option>
        <option value="5">Honda</option>
      </select>
    </div>
    <div className="submit">
      
    <Button variant="outlined" onClick= {register} startIcon={<ExitToAppIcon />}>Register</Button>
    </div>
    </div>
    </div>
</div>
 );
}
 
export default Register;