import React from 'react';
import {Helmet} from "react-helmet";
import Button from '@mui/material/Button'
//import './App.css';
//import './Normal_entry.css'
import {useState, useEffect} from 'react';
import LockIcon from '@mui/icons-material/Lock';
import { useHistory } from "react-router-dom";
 
function Image_Recog (){
 return(
    <div>
        <Helmet>
            <meta charset="UTF-8"/>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
            <script src="script.js" type="text/javascript" />
            <script defer src="face-api.min.js"></script>
            
            <title>Face Recognition</title>
        </Helmet>
            <input type="file" id="imageUpload"/>
    </div>
);
}
 
export default Image_Recog;