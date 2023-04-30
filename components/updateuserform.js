
import {getUser, updateUser,getUsers } from "@/lib/helper";
import Error from "./error";
import Loading from "./loading";
import { useQuery,useMutation,useQueryClient, QueryClient} from "react-query";


export default function updateuserform({formid,formData,setFormData}) {
    const QueryClient = useQueryClient()
    const {isLoading,isError,data,error}=useQuery(['users',formid],()=>getUser(formid))
    const UpdateMutation = useMutation((newData)=>updateUser(formid,newData),{
        onSuccess : async (data)=>{
            QueryClient.prefetchQuery('users',getUsers)
        }
    })
    if(isLoading) return <Loading/>
    if (isError) return <Error/>
    const {name,avatar,salary,date,email,status}=data
    console.log(date)
    const [firstname,lastname]=name?name.split(' '):formData

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`
        let updated = Object.assign({},data,formData,{name:userName})
        console.log(updated)
        await UpdateMutation.mutate(updated)
    }

    return ( 
        <div>
            <form className="grid md:grid-cols-2 gap-4 max-sm:grid-cols-1" onSubmit={handleSubmit}>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">First Name</span>
                    <input type="text" onChange={setFormData} defaultValue={firstname} placeholder="Enter" name="firstname" className="mt-1 block w-1/2 max-sm:w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Last Name</span>
                    <input type="text" onChange={setFormData} defaultValue={lastname} placeholder="Enter" name="lastname" className="mt-1 block w-1/2 max-sm:w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/>
                </label>

                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">
                        Email
                    </span>
                    <input type="email" onChange={setFormData} defaultValue={email} name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-1/2 max-sm:w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
                </label>
                <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Salary</span>
                    <input type="number" onChange={setFormData} defaultValue={salary} placeholder="Enter" name="salary" className="mt-1 block w-1/2 max-sm:w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/></label>
    
    <label className="block">
                    <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Birth Date</span>
                    <input type="date" onChange={setFormData} defaultValue={date} placeholder="Enter" name="date" className="mt-1 block w-1/2 max-sm:w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
    focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
    disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
    invalid:border-pink-500 invalid:text-pink-600
    focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "/></label>
                <div className="w-1/2 max-sm:w-full flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                    <input type="radio" value="Inctive" onChange={setFormData} defaultChecked={status=="Active"} name="status" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-red-300 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Inactive</label>
                    <input type="radio" value="Active" onChange={setFormData} defaultChecked={!status=="Active"} name="status" className="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded focus:ring-green-300 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                    <label className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-900">Active</label>
                </div>

                <div className="py-6 shadow-1xl ">
                    <button type="submit" className="shadow-1xl md:shadow-2xl bg-yellow-400 rounded-md px-6 py-2 hover:bg-yellow-600 flex">Update</button>
                </div>
            </form>
        </div>
    );
};