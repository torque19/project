import React from 'react';
import './Normal_entry.css';
import {useState, useEffect} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button'
import Alert from '@mui/material/Alert';
function Add_Cases(){
    const [Case_no, setCase_no] = useState("")
    const [Prisioner_no, setPrisioner_no] = useState("")
    const [Name, setName] = useState("")
    const [Fname, setFname] = useState("")
    const [Note, setNote] = useState("")
    const [Street1, setStreet1] = useState("")
    const [locality, setlocality] = useState("")
    const [pincode, setpincode] = useState("")
    const [state_i, setstate_i] = useState("")
    const [Country, setCountry] = useState("")
    const [Case_type, setCase_type] = useState("")
    const [Weapon_used, setWeapon_used] = useState("")
    

    const handle_change1 = (e) => {
        var text = e.target.value;
        console.log(text);
        setCase_no(e.target.value);
        
    }
    const handle_change2 = (e) => {
        var text = e.target.value;
        console.log(text);
        setPrisioner_no(text);
        
    }
    const handle_change3 = (e) => {
        var text = e.target.value;
        console.log(text);
        setName(e.target.value);
        
    }
    const handle_change4 = (e) => {
        var text = e.target.value;
        console.log(text);
        setFname(e.target.value);
        
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
    const handle_change11 = (e) => {
        var text = e.target.value;
        console.log(text);
        setCase_type(e.target.value);
        
    }
    const handle_change12 = (e) => {
        var text = e.target.value;
        console.log(text);
        setWeapon_used(e.target.value);
        
    }

    const add_case = async (e) => { 
        //alert(<Alert severity="success">This is a success alert — check it out!</Alert> )   
        e.preventDefault();
        //const {Firstname, Lastname,Email,NewPassword,ConfirmPassword,St} = data;
        const res = await fetch("/insert_case",{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                Case_no,Prisioner_no,Name,Fname,Note,Street1,locality,pincode,state_i,Country,Case_type,Weapon_used
              }),
        });
        const user = res.json();
        if(user.status === 422 || !user){
            window.alert("Submission Error");
            console.log("Submission Error");
        }else{
            window.alert("Case Registered Successfully");
            console.log("Case Registered Successfully");
        }
    }; 
  
    return(
        <div>
            <h3 style={{color:"white"}}>* All the field are mandatory</h3>
            <div className="Add-cases">
                <div className="Caseid">
                    
                    <input type="text" id="caseno" placeholder="Case No." value={Case_no} onChange={handle_change1}></input>
                    <input type="text" id="prisionerno" placeholder="Prisioner No."value={Prisioner_no} onChange={handle_change2}></input>
                    <select style={{marginLeft:'5%', width:'20%', height:'58%'}} value={Case_type} onChange={handle_change11} class = "state">
                        <option value="0">Case Type:</option>
                        <option value="Theift">Theift</option>
                        <option value="Domestic Violence">Domestic Violence</option>
                        <option value="Harrasment">Harrasment</option>
                        <option value="child Labour">child Labour</option>
                        <option value="Murder">Murder</option>
                        <option value="other">other</option>
                    </select>
                </div>
                <div className="name">
                    <input type="text" id="suname" name="suname" placeholder="Name" value={Name} onChange={handle_change3}></input>
                    <input type="text" id="fnames" name="fname" placeholder="Father's Name" value={Fname} onChange={handle_change4}></input>
                    <select style={{width:'20%', height:'58%'}} value={Weapon_used} onChange={handle_change12} class = "state">
                        <option value="0">Weapon:</option>
                        <option value="Knife">Knife</option>
                        <option value="Gun">Gun</option>
                        <option value="Assault Rifle">Assault Rifle</option>
                        <option value="Wire">Wire</option>
                        <option value="Poision">Poision</option>
                        <option value="other">other</option>
                    </select>
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
                    <Button style={{width:"50%", height:"80%"}} variant="contained" onClick={add_case}>Add Case</Button>
                </div>
            </div>
        </div>
    );
}
export default Add_Cases;