import Adduserform from "./adduserform"
import Updateuserform from "./updateuserform"
import { useSelector } from "react-redux"
import { useReducer } from "react";

const formReducer = (state,event) =>
{
    return{
        ...state,
        [event.target.name]:event.target.value
    }
}

export default function Form() {
    const[formData,setFormData]=useReducer(formReducer,{})
    const formid = useSelector((state)=>state.app.client.formid)
    console.log(formid)
    return(
        formid?Updateuserform({formid,formData,setFormData}):Adduserform({formData,setFormData})
    )
};
