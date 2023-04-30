import mongoose from "mongoose";
const MONGO_URI="mongodb+srv://nileshshindeofficial:ukQmowRcOYZk89nQ@cluster0.7pl51ad.mongodb.net/test"
const connectMongo = async () =>{
    try{
        const { connection } = await mongoose.connect(MONGO_URI);
        if(connection.readyState == 1){
            console.log("Database Connected");
        }
    }
    catch(errors){
        return Promise.reject(errors)
    }
}
export default connectMongo;