import "./index.css"
import NavComponent from "./NavComponents/NavComponent.js";

import {useNavigate} from "react-router";

const Navigation = () => {
    const navigate = useNavigate();
    const CallImg = () => {
        navigate('/');
    }

    return (
        <div>
            <div className=" container row wd-wholediv">

                {/*<div className="col-xl-5 col-lg-5 col-md-4 col-sm-4">

                    <img src="https://i.guim.co.uk/img/media/b78eba8720659708cba9c1c5338a7e7773a56446/0_85_4288_2572/master/4288.jpg?width=1200&quality=85&auto=format&fit=max&s=821d4a9159836868ba6e066ab0a15688"
                        onClick={CallImg} className="wd-logo" alt = "nav pics"/>

                </div>
                    <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7 ">
                                <NavComponent/>
                    </div>*/}

                <NavComponent/>

            </div>
        </div>
    );
}

export default Navigation;