import User from "../models/User.js"

export const createAdmin=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    
    const user=new User({
        name,
        email,
        password,
        role:"Admin"
    });
    
    const savedUser=await user.save();
    
    res.json({
        
        savedUser  
         
    
    })
    } catch (error) {
        console.log(error)
        res.json({
            error:"Error Occured!!!"
        })
    }
    
    }
    
    
    
//for Alumini
export const createAlumini=async(req,res)=>{
    try {
        const {name,email,password}=req.body;
    
    const user=new User({
        name,
        email,
        password,
        role:"Alumini"
    });
    
    const savedUser=await user.save();
    
    res.json({
        
        savedUser  
         
    
    })
    } catch (error) {
        console.log(error)
        res.json({
            error:"Error Occured!!!"
        })
    }
    
    }
    
    //Student

    export const createStudent=async(req,res)=>{
        try {
            const {name,email,password}=req.body;
        
        const user=new User({
            name,
            email,
            password,
            role:"Student"
        });
        
        const savedUser=await user.save();
        
        res.json({
            
            savedUser  
             
        
        })
        } catch (error) {
            console.log(error)
            res.json({
                error:"Error Occured!!!"
            })
        }
        
        }
        
        
        export const getAllUsers=async(req,res)=>{
            try {
              const getusers=await User.find()
              res.json({
                getusers
              })
            } catch (error) {
              res.json({
                error:"Cannot fetch data!!"
              })
              console.log(error)
            }
          }