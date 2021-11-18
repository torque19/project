import React from 'react';
import './Normal_entry.css';
import { Button } from '@mui/material';
import {useState, useEffect} from 'react';
function Predict_Suspect(){
    const [Weapon, setWeapon] = useState("")
    const [Common, setCommon] = useState("")
    const [signature, setsignature] = useState("")
    const [biometric, setbiometric] = useState("")
    const [Note, setNote] = useState("")
    const [Street1, setStreet1] = useState("")
    const [locality, setlocality] = useState("")
    const [pincode, setpincode] = useState("")
    const [state_i, setstate_i] = useState("")
    const [Country, setCountry] = useState("")
    

    const handle_change1 = (e) => {
        var text = e.target.value;
        console.log(text);
        setWeapon(e.target.value);
        
    }
    const handle_change2 = (e) => {
        var text = e.target.value;
        console.log(text);
        setCommon(text);
        
    }
    const handle_change3 = (e) => {
        var text = e.target.value;
        console.log(text);
        setsignature(e.target.value);
        
    }
    const handle_change4 = (e) => {
        var text = e.target.value;
        console.log(text);
        setbiometric(e.target.value);
        
    }
    const handle_change5 = (e) => {
        var text = e.target.value;
        console.log(text);
        setNote(e.target.value);
        
    }
    const handle_change6 = (e) => {
        var text = e.target.value;
        console.log(text);
        setStreet1(e.target.value);
        
    }
    const handle_change7 = (e) => {
        var text = e.target.value;
        console.log(text);
        setlocality(e.target.value);
        
    }
    const handle_change8 = (e) => {
        var text = e.target.value;
        console.log(text);
        setpincode(text);
        
    }
    const handle_change9 = (e) => {
        var text = e.target.value;
        console.log(text);
        setstate_i(e.target.value);
        
    }
    const handle_change10 = (e) => {
        var text = e.target.value;
        console.log(text);
        setCountry(e.target.value);
        
    }

    const predict = async (e) => { 
        alert("it's working");     
        e.preventDefault();
        //const {Firstname, Lastname,Email,NewPassword,ConfirmPassword,St} = data;
        const res = await fetch("/predict",{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                Weapon,Common,signature,biometric,Note,Street1,locality,pincode,state_i,Country
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
            <h3 style={{color:'white'}}>* All the field are mandatory</h3>
            <div className="Add-cases">
                <div className="Caseid">
                    <select style={{marginRight:'75px', width:'20%', height:'58%'}} value={Weapon} onChange={handle_change1} class = "state">
                        <option value="0">Weapon:</option>
                        <option value="Knife">Knife</option>
                        <option value="Gun">Gun</option>
                        <option value="Assault Rifle">Assault Rifle</option>
                        <option value="Wire">Wire</option>
                        <option value="Poision">Poision</option>
                        <option value="other">other</option>
                    </select>
                    
                    <input type="text" id="prisionerno" placeholder="any common" value={Common} onChange={handle_change2}></input>
                </div>
                <div className="name">
                    <input type="text" id="suname" name="suname" placeholder="signature" value={signature} onChange={handle_change3}></input>
                    <input type="text" id="fnames" name="fname" placeholder="biometric" value={biometric} onChange={handle_change4}></input>
                </div>
                <div className="address">
                    <input type="text" id="s1"  placeholder="Street1" value={Street1} onChange={handle_change6}></input>
                    <input type="text" id="s2" placeholder="locality" value={locality} onChange={handle_change7}></input>
                    <input type="text" id="pincode" placeholder="Pincode" value={pincode} onChange={handle_change8}></input>
                </div>
                <div className="cs">
                    <input type="text" id="cou"  placeholder="Country" value={Country} onChange={handle_change10}></input>
                    <input type="text" id="st"  placeholder="State" value={state_i} onChange={handle_change9}></input>
                </div>
                <div className="add-note">
                    <textarea id="detail" placeholder="Add Note about Crime and Criminal" rows="4" cols="50" value={Note} onChange={handle_change5}/>
                </div>
                
                <div className="submit">
                    <Button style={{width:"70%", height:"80%"}} variant="contained" onClick={predict}>Predict Suspects</Button>
                </div>
            </div>
        </div>
    );
}
export default Predict_Suspect;