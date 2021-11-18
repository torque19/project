import React from 'react';
import Button from '@mui/material/Button'
import './App.css';
import './Normal_entry.css'
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';

function Cases (){
    const [Case_No, setCaseNo] = useState("")

    const handle_change = (e) => {
        var text = e.target.value;
        console.log(text);
        setCaseNo(e.target.value);
    }

    const Find_case = async (e) => { 
        alert("it's working");     
        e.preventDefault();
        //const {Firstname, Lastname,Email,NewPassword,ConfirmPassword,St} = data;
        const res = await fetch("/find_case",{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                Case_No
              }),
        });
        const user = res.json();
        if(user.status === 422 || !user){
            window.alert("Invalid Login");
            console.log("Invald Login");
        }else{
            window.alert("successful Login");
            console.log("Successful Login");
        }
    }; 
    return(
        <div>
            <h3 style={{color:'white'}}>Find the detail about cases</h3>
            <div className="findcases">
                <div className="Caseid">
                    <TextField id="outlined" label="Case No." variant="outlined" value={Case_No} onChange={handle_change} />
                    <Button style={{marginLeft: "10%", width:"20%", height:"50%"}} variant="contained" onClick={Find_case}>Find Case</Button>
                </div>
            </div>
        </div>
    );
}
export default Cases;