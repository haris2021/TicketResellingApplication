import {CgProfile} from "react-icons/cg";
import "../index.css"


const NavComponent = ( ) =>
{
    return(
        <div>

            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    {/*<button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
*/}
                    <div className="collapse navbar-collapse wd-lol" id="navbarNavDropdown">

                        <ul className="navbar-nav wd-lop">

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Concerts
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else
                                        here</a></li>
                                </ul>
                            </li>

                        </ul>

                        <ul className="navbar-nav ">

                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    Sports
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">Action</a></li>
                                    <li><a className="dropdown-item" href="#">Another action</a>
                                    </li>
                                    <li><a className="dropdown-item" href="#">Something else
                                        here</a></li>
                                </ul>
                            </li>

                        </ul>

                    </div>

                </div>

                <div className="wd-dropdown">

                    <span className="wd-signin">Sign In</span>
                    <CgProfile size={25} className="wd-signinlogo"/>

                </div>

            </nav>
        </div>
    );
}

export default NavComponent;