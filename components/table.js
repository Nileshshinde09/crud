import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import Image from "next/image";
import {getUsers} from "../lib/helper"
import {useQuery} from "react-query";
import { useSelector,useDispatch } from "react-redux";
import { toggleChangeAction, updateAction,deleteAction } from "@/redux/reducer";
import Loading from "./loading";
import Error from "./error";
export default function table() {
    const {isLoading,isError,data}= useQuery('users',getUsers)
    if(isLoading) return <Loading/>
    if(isError) return <Error/>
    return (
        <>
            <div className="flex justify-center py-5 md:py-12 max-sm:px-4 shrink">
                <table className="table-fixedn w-full shadow-2xl">
                    <thead className="bg-slate-700 text-white">
                        <tr>
                            <th>image</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Salary</th>
                            <th>Birth date</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className="text-center bg-gray-200">
                        {
                            data?.map((obj,i) => <Tr {...obj} key={i}/>)
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}
function Tr({avatar,name, email, salary, date,status,_id}) {
    const visible= useSelector((state)=>state.app.client.toggleForm)
    const dispatch = useDispatch()
        const onUpdate =()=>{
            dispatch(toggleChangeAction(_id))
            if(visible){
                dispatch(updateAction(_id))
            }
        }
        const onDelete =()=>{
            if(!visible){
                dispatch(deleteAction(_id))
            }
        }
        return (
            <tr>
                <td className="px-1 py-1"><Image src={avatar} alt="#" width={100} height={100}></Image></td>
                <td className="px-1 py-1">{name}</td>
                <td className="px-1 py-1">{email || "Unknown"}</td>
                <td className="px-1 py-1">${salary || "Unknown"}</td>
                <td className="px-1 py-1">{date || "Unknown"}</td>
                {status=="Active"?
                <td className="px-1 py-1">
                    <button className="bg-green-300 px-4 py-1 rounded-md hover:bg-green-600">Active</button>
                </td>
                :
                <td className="px-1 py-1">
                    <button className="bg-red-300 px-4 py-1 rounded-md hover:bg-red-600">Inactive</button>
                </td>}
                <td className="px-1 py-10 flex space-x-3 justify-center">
                    <span onClick={onUpdate} className="text-blue-600 hover:cursor-pointer">
                        <AiOutlineEdit />
                    </span>
                    <span onClick={onDelete} className="text-red-600 hover:cursor-pointer">
                        <AiOutlineDelete />
                    </span>
                </td>
            </tr>
        )
    }