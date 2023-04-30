import { AiOutlineUserAdd } from "react-icons/ai";
import { useState } from "react";
import Table from "./table";
import Form from "./form";
import { useSelector,useDispatch } from "react-redux";
import { toggleChangeAction,deleteAction } from "@/redux/reducer";
import { useQueryClient } from "react-query";
import {getUsers,deleteUser } from "../lib/helper";

export default function home() {
    const visible = useSelector((state)=>state.app.client.toggleForm)
    const deleteid = useSelector((state) =>state.app.client.deleteid)
    const queryClient= useQueryClient()
    const dispatch = useDispatch() 
    const handler =() =>{
        dispatch(toggleChangeAction())
    }
    const deletehandler = async()=>{
        if(deleteid){
        console.log(deleteid)

            await deleteUser(deleteid);
            await queryClient.prefetchQuery('users',getUsers)
            await dispatch(deleteAction(null))
        }
    }
    const canclehandler =async()=>{
        console.log('cancel')
        await dispatch(deleteAction(null))
    }
    return (
        <>
        <div className="flex flex-col md:px-10 max-sm:px-10">

            <div>
                <h1 className="text-center text-zinc-800 font-serif text-3xl md:text-5xl pt-6">
                    <text>Employee Management</text>
                </h1>
            </div>
            <div className="py-6 shadow-1xl ">
                <button onClick={handler} className="shadow-1xl md:shadow-2xl bg-sky-400 rounded-md px-3 py-2 hover:bg-sky-600 flex">Add Emoloyee<span className="pl-2 py-1"><AiOutlineUserAdd/></span></button>
            </div>
            <hr/>
            {deleteid?DeleteComponent({deletehandler,canclehandler}):<></>}
            {visible? <Form/>:<></>}
            <hr/>
            <Table/>
        </div>
        </>
    )
}

function DeleteComponent({deletehandler,canclehandler}){
    return(
        <div className="flex">
            <h1 className="text-black text-2xl font-bold py-5">
            Ary You Sure ?
            </h1>
            <span className="py-4 px-2">
            <button onClick={deletehandler} className="px-8 rounded-md bg-green-300 focus:bg-green-500 py-2 ">Yes</button>
            </span>
            <span className="py-4">
            <button onClick={canclehandler} className="px-8 rounded-md bg-red-300 focus:bg-red-500 py-2 ">No</button>
            </span>

        </div>
    )
}