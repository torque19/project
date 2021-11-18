import React from 'react';
import './Normal_entry.css';
import {useState, useEffect} from 'react';
import CancelIcon from '@mui/icons-material/Cancel';
import IconButton from '@mui/material/IconButton';
function Criminal_info(){
    const productsData = {
        Case_no:"",
        Prisioner_no:"",
        Name:"",
        Fname:"",
        Case_type:"",
        Weapon_used:"",
        Street1:"",
        state_i:"",
        Country:"",
        Note:"",
        registration_date:""
    };
    const [Prisioner_no, setPrisioner_no] = useState("")
    const [items, setitems] = useState(productsData);
    const [isdisplay, setisdisplay] = useState(false);
    
    const display1 = () =>{
        setisdisplay(false);
    }
    

    const handle_change = (e) => {
        var text = e.target.value;
        console.log(text);
        setPrisioner_no(e.target.value);
    }

    const Find_criminal = async (e) => { 
        alert("it's working");     
        e.preventDefault();
        /*const {Firstname, Lastname,Email,NewPassword,ConfirmPassword,St} = data;
        const res = await fetch("/find_criminal",{
              method: 'POST',
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
              },
              body:JSON.stringify({
                Criminal_No
              }),
        });
        const data = res.json();
        setuser(data);
        
        if(user.status === 422 || !user){
            window.alert("Invalid Login");
            console.log("Invald Login");
        }else{
            window.alert("successful Login");
            console.log("Successful Login");
        }*/
        fetch("/find_criminal",{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                Prisioner_no
            }),
        })
          .then((response) => response.json())
          .then((responseJson) =>{
            //alert(responseJson.message || "Registered Successfully");
            //console.log(responseJson);
            setitems(responseJson);
            console.log(responseJson);
            setisdisplay(true);
            console.log(isdisplay);
            
        })
          .catch((error) => console.log(error))
    }; 
    return(
        <div>
            <h3 style={{color:"white"}}>Find the detail about Historysheaters</h3>
            <div className="findcases">
                <div className="Caseid">
                    <input type="text" id="caseno" placeholder="Prisioner No." value={Prisioner_no} onChange={handle_change}></input>
                    <input type="submit" id="submit-case" value="Find" onClick={Find_criminal}></input>
                </div>
            </div>
            <div>
                {isdisplay?<div class="details">
                    <ol>Prisioner Name: { items.Name }</ol> 
                    <ol>Case No: { items.Case_no }</ol> 
                    <ol>Prisioner No: { items.Prisioner_no}</ol>
                    <ol>Father Name:{items.Fname}</ol>
                    <ol>Case Type:{items.Case_type}</ol>
                    <ol>Weapon Used:{items.Weapon_used}</ol>
                    <ol>Location:{items.state_i}</ol>
                    <ol>Additional Note:{items.Note}</ol>
                    <IconButton aria-label="cancel" class="cancel" onClick={display1}>
                        <CancelIcon />
                    </IconButton>
                </div>:null}
            </div>
        </div>
    );
}
export default Criminal_info;