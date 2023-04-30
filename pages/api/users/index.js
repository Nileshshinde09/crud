import connectMongo from "../../../database/conn"
import {getUsers,postUsers,putUsers,deletUsers} from "../../../database/conntroller"; 
export default async function handler(req, res) {
  connectMongo().catch(() =>res.status(405).json({error:"Error in the Connection"})) 
  const{method} = req
  switch(method){
      case "GET":
        getUsers(req,res)
        break;
      case "POST":
        postUsers(req,res)
        break;
      case "PUT":
        putUsers(req,res)
        break;
      case "DELETE":
        deletUsers(req,res)
        break;
      default:
        res.setHeader('Allow',['GET','POST','PUT','DELETE']);
        res.status(405).json({ name: 'DELETE request' });

  }
}