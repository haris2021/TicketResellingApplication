import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LogOutThunk } from "../../../Services/Users-Thunks.js";
import { logoutUser } from "../../../Reducers/UserLogin-Reducer.js";
import "../index.css";

const NavComponent = () => {
    const { u } = useSelector((state) => state.UserLogin);
    const dispatch = useDispatch();

    const CallLogOut = () => {
        console.log("Inside calllogout!");
        dispatch(LogOutThunk());
        dispatch(logoutUser());
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">
                    TSP
                </Link>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                    aria-controls="navbarNav"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Concerts
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="nav-link"
                                to="/"
                                onClick={() => {
                                    window.scrollTo(0, 0);
                                }}
                            >
                                Movies
                            </Link>
                        </li>
                        <li className="nav-item">
                            {u._id ?
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link"  to="/Profile"> Profile
                                        </Link>
                                    </li>

                                </> :

                                <>

                                 <li className="nav-item">
                                     <Link className="nav-link" to="/logIn"> LogIn
                                     </Link>
                                 </li>

                                </>
                            }
                        </li>

                        {u.Role === "Seller" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/importEvents">
                                    Create Event
                                </Link>
                            </li>
                        )}


                        {u._id ?
                                    <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/" onClick={CallLogOut}>
                                                LogOut
                                            </Link>
                                        </li>
                                    </> : " "

                        }


                        {u.Role === "Buyer" && (
                            <li className="nav-item">
                                <Link className="nav-link" to="/myTickets">
                                    My Tickets
                                </Link>
                            </li>
                        )}


                       {/* <li className="nav-item">
                            <Link className="nav-link" to="/Profile">
                                <CgProfile
                                    size={25}
                                    className={
                                        u._id ? "wd-signinlogo" : "wd-signinlogowithoutlogin"
                                    }
                                />
                            </Link>
                        </li>
*/}



                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavComponent;