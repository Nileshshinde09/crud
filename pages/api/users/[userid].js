import connectMongo from "../../../database/conn"
import {getUser,putUser,deleteUser} from "../../../database/conntroller"; 
export default async function handler(req, res) {
  connectMongo().catch(() =>res.status(405).json({error:"Error in the Connection"})) 
  const{method} = req
  switch(method){
      case "GET":
        getUser(req,res)
        break;
      case "PUT":
        putUser(req,res)
        break;
      case "DELETE":
        deleteUser(req,res)
        break;
      default:
        res.setHeader('Allow',['GET','POST','PUT','DELETE']);
        res.status(405).json({ name: 'DELETE request' });

  }
}