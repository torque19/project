<div className="Login-Section">
        <div class = "login_content">{ans}</div>
</div>


    const [Email1, setEmail1] = useState("")
  const [Password, setPassword] = useState("")
  const [St1, setSt1] = useState("")
  
  

    const Loginuser = () => {
        fetch(`http://192.168.43.178:3000/SEDSuite/login`,{
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              Email1,
              Password,
              St1,
            }),
        })
          .then((response) => response.json())
          .then((responseJson)=>{
              if(responseJson.status==="400"){
                alert(responseJson.message);
              }
              else{
                alert("Login Successfull")
                //navigation.navigate('HomeApp');
                
              }
                
          })
          .catch((error) => console.log(error))
      }
    
   
    
    
    
      

  var [ans, setans] = useState(<h1 style={{position:'absolute', top:'50%',left:'40%'}}>It seems quite now!!!!</h1>);
  function handleClick1(){
    setans(<div>
      <form method = "POST" className="register">
        <div className="Userid1">
          <input type="text" id="fname1" name = "Email1" value={Email1} onChange={text =>setEmail1(text)} placeholder="Email"></input>
        </div>
        <div className="pass1">
          <input type="password" id="pass1" name="Password" onChange={text =>setPassword(text)} placeholder="Password"></input>
        </div>
        <div class="custom-select">
          <select value= "St1" onChange={text =>setSt1(text)} class = "state">
            <option value="0">Select State:</option>
            <option value="1">Audi</option>
            <option value="2">BMW</option>
            <option value="3">Citroen</option>
            <option value="4">Ford</option>
            <option value="5">Honda</option>
          </select>
        </div>
        <div className="submit1">
          <Button variant="outlined" onclick={Loginuser} startIcon={<LockIcon />}>Log in</Button>
        </div>
      </form>
    </div>);
  }
  
    
  function handleClick2(){
    setans(<div>
        <div class="name">
        
          <TextField id="outlined-basic" label="Firstname" variant="outlined" value={firstname} onChange={handle_change1}/>
          <input type="text" id="ltname" label="Lastname"  name = "Lastname" value={Lastname}  onChange={handle_change2}  placeholder="Lastname"/>

        </div>
        <div className="Userid">
          <input type="email" id="fname" name = "Email" value={email2} onChange={handle_change}    placeholder="Email"/>
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
    </div>);
  }
  const [name, setName] = useState("");
    function handleChange(e) {
      setName(e.target.value);
    }
    //<Router>
     //<Route exact path='/' component={routes}></Route>
     </Router>

     <BrowserRouter>
        <Route exact path='/CCRD' component={App}></Route>
        <Route exact path='/CCRD_AUTH_SUCC' component={Normal_entry}></Route>
    </BrowserRouter>