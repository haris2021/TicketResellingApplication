import "./FootBar.css"

import Subscribe from "../Subscribe/Subscribe.js"
import {useState} from "react";

const FootBar = () => {

    const [susbcribebtn , setsubscribebtn] = useState(false);

    const handlesubscribebtn = ( ) =>
    {
        setsubscribebtn(true);
    }




    return (
        <div>

            <div className="row wd-footrow1">
                <span>Epic events and incredible deals straight to your inbox.</span>
            </div>

            <div className="row wd-footrow2">
                <div className="col-xl-7">
                    <input className="wd-footinputbox" placeholder="Email Address"/>
                </div>

                <div className="col-xl-5">
                    <button  onClick={handlesubscribebtn} type="button" className="btn btn-sm wd-footerbtn">Join The List</button>
                </div>
            </div>

            <div className="row wd-footrow3">
                <span className="wd-spanrow3">By signing up, you acknowledge and accept our privacy policy and consent to receiving emails. </span>
            </div>

            {susbcribebtn && <Subscribe/>}


        </div>
    );
}

export default FootBar;