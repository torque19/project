const express = require('express');
const multer = require('multer');
const fs = require("fs");
var path = require('path');
require("./conn");
const User = require("./models/userdetail")
const Image = require("./models/imagedetails")
const Registration = require("./models/registeruser")
const Case_Registration = require("./models/casedetails")
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { error } = require('console');
const app = express();
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.static('uploads'));

var Firstname, Lastname;

var Email
 
var storage = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, './uploads');
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname+".png");
    }
});

var decrypt = multer.diskStorage({
    destination:function(req, file, cb) {
        cb(null, './uploads/decrypt');
    },
    filename:function(req, file, cb){
        cb(null, file.fieldname+".png");
    }
});

const upload = multer({storage:storage});


app.post('/SEDSuite/images',upload.single('profile'), (req, res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var obj = {
            contentType: req.file.mimetype,
            data: Buffer(encode_image,'base64')
    };
    Image.create(obj, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("saved to database")
            res.redirect('/SEDSuite/images');
        }
    });
});
app.post('/SEDSuite/images/decrypt',upload.single('decrypt'), (req, res)=>{
    var img = fs.readFileSync(req.file.path);
    var encode_image = img.toString('base64');
    var obj = {
            contentType: req.file.mimetype,
            data: Buffer(encode_image,'base64')
    };
    Image.create(obj, (err, result) => {
        if (err) {
            console.log(err);
        }
        else {
            // item.save();
            console.log("saved to database")
            res.redirect('/SEDSuite/images');
        }
    });
});

app.get('SEDSuite/images/:id', function (req, res, next) {

    Image.findById({_id}, function (err, image) {
    
    if (err) return next(err);
    
    res.send(image.data.buffer);
    res.redirect("/")
    
    });
    
    });

app.get('/SEDSuite/image/', (req, res) => {
    res.send('./RestfulApi/uploads/test1.jpg',{root: __dirname});
    })

app.post("/SEDSuite", (req, res) => {
    console.log(req.body);
    const send = new User(req.body)
    send.save().then(()=>{
        res.status(201).send(send)
    }).catch((e) => {
        res.status(400).send(e);
    })
})


app.get('/SEDSuite/home', async(req,res) => {
    try{
        if(Email){
            const Username = await Registration.findOne({Email:Email});
            res.send({id:"123", key:Username.Name});
            
        }
        else{
            res.json({status:"400"});
        }
        
    }
    catch(error){
        res.send(error);
    }
});
app.get('/SEDSuite/notifications', async(req,res) => {
    try{
    res.send({message:"ALT technologies,welcome you"});    
    }
    catch(error){
        res.send(error);
    }
});
app.get('/SEDSuite/home1', async(req,res) => {
    try{
        if(Email){
            const Username = await Registration.findOne({Email:Email});
            
            res.send({message: "Login Successfull"});
        }
        else{
            res.json({status:"400"});
        }
        
    }
    catch(error){
        res.send(error);
    }
});

app.post("/registerUser", async(req,res) => {
    console.log(req.body);
    const {Firstname, Lastname, Email, NewPassword, ConfirmPassword, St} = req.body;
    if( !Firstname || !Lastname || !Email || !NewPassword || !ConfirmPassword || !St){
        return res.status(422).json({ error:"All Fiels are required"});
    }
    try{
        const userExist = await User.findOne({ Email:Email});
        if(userExist){
            return res.status(422).json({error:"Email already registered"});

        } else if(NewPassword != ConfirmPassword){
            return res.status(422).json({error:"Password not matched"});
        } else{
            const user = new Registration({Firstname, Lastname, Email, NewPassword, ConfirmPassword, St});
            await user.save();
            res.status(201).json({message:"user registered sucessfully"});
        }
        
    } catch(err){
        console.log(err);
    }
    
        
});

app.post('/loginUser', async(req,res)=>{
    try{
        console.log(req.body);
        Email = req.body.Email;
        const Password = req.body.Password;
        const Userdetail = await Registration.findOne({Email:Email});
        Firstname = Userdetail.Firstname;
        Lastname = Userdetail.Lastname;
        if(Password === Userdetail.NewPassword){
            console.log("valid username password")
            return res.json({status:"200", message:"valid Credentials", Firstname:Userdetail.Firstname, Lastname:Userdetail.Lastname});
        }
        else{
            return res.json({status:"402", message:"Invalid Credential"});
        }
    } catch (error) {
        res.status(400).send(error);
    }
});

app.post("/insert_case", async(req,res) => {
    console.log(req.body);
    const {Case_no, Prisioner_no, Name, Fname,Case_type,Weapon_used,Street1,state_i,Country,Note} = req.body;
    //if( !Firstname || !Lastname || !Email || !NewPassword || !ConfirmPassword || !St){
     //   return res.status(422).json({ error:"All Fiels are required"});
    //}
    try{
        //const userExist = await User.findOne({ Email:Email});
        //if(userExist){
         //   return res.status(422).json({error:"Email already registered"});

        //} else if(NewPassword != ConfirmPassword){
           // return res.status(422).json({error:"Password not matched"});
        //} else{
            const user = new Case_Registration({Case_no, Prisioner_no, Name, Fname,Case_type,Weapon_used,Street1,state_i,Country,Note});
            await user.save();
            res.status(201).json({message:"Cases added sucessfully"});
        //}
        
    } catch(err){
        console.log(err);
        res.status(422);
    }
    
        
});
app.get("/get_name", async(req,res) => {
    
    try{
        return res.status(201).json({Fname:Firstname,Lname:Lastname});
        
    } catch(err){
        console.log(err);
        res.status(422);
    }
    
        
});
app.post("/find_criminal", async(req,res) => {
    console.log(req.body);
    const {Prisioner_no} = req.body;
    //if( !Firstname || !Lastname || !Email || !NewPassword || !ConfirmPassword || !St){
        //return res.status(422).json({ error:"All Fiels are required"});
    //}
    try{
        const userExist = await Case_Registration.findOne({ Prisioner_no:Prisioner_no});
        if(!userExist){
            return res.status(422).json({error:"Prisioner Not exist"});

        //} else if(NewPassword != ConfirmPassword){
           // return res.status(422).json({error:"Password not matched"});
        } else{
            //const user = new Registration({Prisioner_no});
            //await user.save();
            res.status(201).json(userExist);
        }
        
    } catch(err){
        console.log(err);
    }
    
        
});
app.get("/SEDSuite", async (req,res)=>{

    try{
        const data = await User.find({}).sort({_id:-1}).limit(1);
        if(!data){
            return res.status(404).send();
        }else{
            console.log(data[0].message);
            res.send(data[0]);
        }
        
    }catch(e){
        res.send(e);
    }
})

app.get("/SEDSuite/:id", async (req,res)=>{

    try{
        const _id = req.params.id;
        const dataset = await User.findById(_id)
        if(!dataset){
            return res.status(404).send();
        }else{
            res.send(dataset);
        }
    }catch(e){
        res.send(e);
    }
})

app.listen(port, '127.0.0.1', ()=> {
    console.log(`Your Connection is setup at ${port}`);
})
