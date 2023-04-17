import {CgProfile} from "react-icons/cg";
import "../index.css"
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

import {LogOutThunk} from "../../../Services/Users-Thunks.js";
import {logoutUser} from "../../../Reducers/UserLogin-Reducer.js";

const NavComponent = () => {
    const {u} = useSelector(state => state.UserLogin);
    console.log("Before Login In " + u._id);

    const dispatch = useDispatch();

    const CallLogOut = () => {
        console.log("Calling login");
        dispatch(LogOutThunk());
        dispatch( logoutUser());

    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">

                    <div className={u._id? " wd-lol" : " wd-withoutlogin "} id="navbarNavDropdown">


                            <ul className=" wd-navlinks navbar-nav wd-lop">

                                <Link to="/details" className=" wd-removeunderline">Concerts</Link>

                            </ul>

                            <ul className=" wd-navlinks navbar-nav ">

                                <Link to="/details" className="  wd-removeunderline">Movies</Link>

                            </ul>
                    </div>

                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    */}
                    <div className="collapse navbar-collapse wd-lol" id="navbarNavDropdown">
                        <ul className="navbar-nav wd-lop">
                            <Link to="/details" className="wd-removeunderline">Concerts</Link>
                        </ul>
                        <ul className="navbar-nav ">
                            <Link to="/details" className="wd-removeunderline">Movies</Link>
                        </ul>
                    </div>
                </div>

                <div className="wd-dropdown">

                    <Link className="wd-signin" to="/logIn">Sign In/ Up </Link>

                    {u._id ?  <Link className="wd-signin wd-removeunderline" to="/Profile"> Profile </Link> :  <Link className="wd-login" to="/logIn"> LogIn </Link> }
                    {u._id ? <Link className="wd-signin wd-removeunderline" to="/" onClick={CallLogOut}> LogOut </Link> : " " }
                    {u.Role === 'Seller' ? <Link className="wd-signin wd-removeunderline" to="/createEvent"> Create Event </Link> : " " }
                    {u.Role === 'Buyer' ? <Link className="wd-signin wd-removeunderline" to="/Profile"> My Tickets </Link>: " "  }
                    <CgProfile size={25} className={ u._id ? "wd-signinlogo " : "wd-signinlogowithoutlogin" } />
                </div>

            </nav>
        </div>
    );
}

export default NavComponent;