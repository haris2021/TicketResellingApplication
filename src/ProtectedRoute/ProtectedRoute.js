import {useDispatch, useSelector} from "react-redux";
import {Navigate, useNavigate} from "react-router";
import {Route} from "react-router-dom";
import {useEffect, useState} from "react";
import {GetProfileInfo} from "../Services/Users-services.js";

const ProtectedRoute = ( {children}) =>
{
    /*const [checklogin , setchecklogin] = useState(false);

    const fetchProfile = async () => {
        const user = await GetProfileInfo();
        if(user)
            setchecklogin(true);
    }

    useEffect(() => {
        fetchProfile();
    }, [])

   const navigate = useNavigate();
    console.log("Inside Portected Route" , checklogin);

    if(!checklogin) {
       // return null;
        console.log("are u here");
        navigate('/login');
    }*/
    return(children);
}


export default ProtectedRoute;