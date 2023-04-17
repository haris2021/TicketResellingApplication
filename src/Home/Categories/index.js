import "./index.css"
import {ImMusic} from "react-icons/im";
import {MdSportsRugby} from "react-icons/md";
import {FaBuilding} from "react-icons/fa";

const Categories = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">

                <div className="container-fluid">

                    <div className="collapse navbar-collapse wd-categoriesnav"
                         id="navbarNavDropdown">

                        <ul className="navbar-nav wd-eachcategory">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <ImMusic/> Concerts
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

                        <ul className="navbar-nav wd-eachcategory">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <MdSportsRugby/>Sports
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

                        <ul className="navbar-nav wd-eachcategory">

                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button"
                                   data-bs-toggle="dropdown" aria-expanded="false">
                                    <FaBuilding/> Boston Events
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
            </nav>
        </div>
    );
}

export default Categories;
