import Users from "@/model/user.js"
//GET request
export async function getUsers(req,res){
    try{
        const users = await Users.find({})
        if(!users) return res.status(405).json({error:"Do Not Found"})
        else{
            res.status(200).json(users)
        }
    }
    catch(errors){
        res.status(405).json({errors:`${errors}`})
    }
}

export async function getUser(req,res){
    try{
        const {userid} = req.query;
        if(userid){
            const user = await Users.findById(userid)
            .then((user)=>{
                
                res.status(200).json(user)
            })
        }
        res.status(404).json({error:"User not Selected"})
    }
    catch(errors){
        res.status(405).json({errors:`${errors}`})
    }
}

//POST request
export async function postUsers(req,res){
    try{
        const formData = req.body;
        if(!formData) return res.status(404).json({error:"Form Data Not Provided.."})
        Users.create(formData)
        .then((data)=>{
            return res.status(200).json(data)
        })
        .catch((err)=>{
            res.status(404).json({errors:`${err}`})
        })
    }
    catch(errors){
        res.status(404).json({errors:`${errors}`})
    }
}
//PUT request

export async function putUsers(req,res){
    try{
        const {user_id} = req.query;
        const formData = req.body;
        if(user_id&&formData){
            const user = await Users.findByIdAndUpdate(user_id,formData)
            .then((user)=>{
                res.status(200).json(user)

            })
        }
        res.status(404).json({error:"User Not Selected"})
    }
    catch(errors){
        res.status(404).json({errors:`${errors}`})
    }
}

export async function putUser(req,res){
    try{
        const {userid} = req.query;
        const formData = req.body;
        if(userid&&formData){
            const user = await Users.findByIdAndUpdate(userid,formData)
            .then((user)=>{
                res.status(200).json({user})

            })
        }
        res.status(404).json({error:"User Not Selected"})
    }
    catch(errors){
        res.status(404).json({errors:`${errors}`})
    }
}

//DELETE request
export async function deleteUser(req,res){
    try{
        const {user_id} = req.query;
        if(user_id){
        const user = await Users.findByIdAndDelete(user_id)
        .then((user)=>{
            res.status(200).json(user)
        })
    }
    res.status(404).json({error:"User Not Selected.."})
        
    }
    catch(errors){
        res.status(404).json({errors:`${errors}`})
    }
}

export async function deleteUsers(req,res){
    try{
        const {userid} = req.query;
        
        if(userid){
        const user = await Users.findByIdAndDelete(userid)
        .then((user)=>{
            res.status(200).json(user)
        })
    }
    res.status(404).json({error:"User Not Selected.."})
        
    }
    catch(errors){
        res.status(404).json({errors:`${errors}`})
    }
}