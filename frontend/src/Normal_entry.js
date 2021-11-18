import logo from './test.png';
import sign from './pngwing.com.png';
import './Normal_entry.css';
import Cases from './cases';
import Add_Cases from './add_cases';
import Criminal_info from './criminal_info';
import Predict_Suspect from './predict_suspects';
//import Image_Recog from './image_recog';
import Court_dates from './court_dates';
import React,{useState, useEffect} from 'react';
import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GavelIcon from '@mui/icons-material/Gavel';
import EngineeringIcon from '@mui/icons-material/Engineering';
import ListAltIcon from '@mui/icons-material/ListAlt';
import Avatar from '@mui/material/Avatar'
import TextField from '@mui/material/TextField';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { BrowserRouter as Router, Route, Link, Switch,withRouter} from 'react-router-dom';
import {Lastname} from './login';
import Login from './login';
function Normal_entry() {

    const [detail, setdetail] = useState({Firstname:'', Lastname:''});
    const getdata = ()=>{
        fetch('/get_name')
        .then((response) => response.json())
        .then((responseJson) =>{
            setdetail({Firstname:responseJson.Fname,Lastname:responseJson.Lname});
            console.log(responseJson);
        })
        .catch((error)=>{
            console.error(error);
        })
    };
  
    useEffect(()=>{
        getdata();
    })
  return (
    <Router>
    <div class = "main">
        <div class = "navigation_menu">
            <div class = "sign">
              <img src={sign} class = "sign-logo" alt = "sign"/>
            </div>
            <div class = "check-logo">
              <h6 class="MHA">Ministry of Home Affairs</h6> 
              <h2 class = "pname">Central Criminal Record Database</h2>
            </div>
            <div class = "home">
                <a id = "back" href="#">Home</a>
            </div>
            <div class = "home1">
                <a id = "profile" href="#">Profile</a>
            </div>
            <div class = "Logout">
                <a id = "signout" href="#">Logout</a>
            </div>
        </div>

        <div class = "side_section">
            <div class = "photo">
                <Avatar sx={{ bgcolor: "orange", width:"50%", height:"50%", fontSize:50, marginLeft:"24%",marginTop:"5%"}}>{detail.Firstname[0]}{detail.Lastname[0]}</Avatar>
                <h2 style={{color:"white", marginLeft:"20%", marginTop:"10%"}}>{detail.Firstname} {detail.Lastname} IPS</h2>
                <h4 style={{color:"white", marginLeft:"17%", marginTop:"5%"}}>Batch No.- 2023/10/007</h4>

            </div>
            <div class = "usage">
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<LibraryBooksIcon />}><Link style={{textDecoration:'None',color:'white'}} to="/cases">Cases</Link></Button></div>
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<AddIcon />}><Link style={{textDecoration:'None',color:'white'}} to="/add_cases">Add Cases</Link></Button></div>
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<ListAltIcon />}><Link style={{textDecoration:'None',color:'white'}} to="/criminal_info">Criminal Info.</Link></Button></div>
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<GavelIcon />}><Link style={{textDecoration:'None',color:'white'}} to="/court_dates">Crime Rates.</Link></Button></div>
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<EngineeringIcon />}><Link style={{textDecoration:'None',color:'white'}} to="/predict_suspects">Predict Suspects</Link></Button></div>
                <div><Button style={{width:"100%", marginBottom:"10%"}} variant="contained" startIcon={<PersonSearchIcon/>}><a style={{textDecoration:'None',color:'white'}} href="http://localhost:52330/index.html"  target="_blank">Image Recognition</a></Button></div>
            </div>
        </div>
        
        <div class = "right_section">
            <div class = "content">
                <Switch>
                    <Route exact path='/cases' component={Cases}></Route>
                    <Route exact path='/add_cases' component={Add_Cases}></Route>
                    <Route exact path='/criminal_info' component={Criminal_info}></Route>
                    <Route exact path='/court_dates' component={Court_dates}></Route>
                    <Route exact path='/predict_suspects' component={Predict_Suspect}></Route>
                </Switch>
            </div>
        </div>

        <div class = "footer">
            <div>
                <h4>&copy; Copyright 2021 CCRD, MHA-India</h4>
            </div>
        </div>
    </div>
    </Router>
  );
}

export default Normal_entry;
