import {CgProfile} from "react-icons/cg";
import "../index.css"
import {Link} from "react-router-dom";

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

                            <Link to="/details" className="wd-removeunderline">Concerts</Link>

                        </ul>

                        <ul className="navbar-nav ">

                            <Link to="/details" className="wd-removeunderline">Movies</Link>

                        </ul>

                    </div>

                </div>

                <div className="wd-dropdown">

                    <Link className="wd-signin" to="/logIn">Sign In/ Up </Link>
                    <CgProfile size={25} className="wd-signinlogo"/>

                </div>

            </nav>
        </div>
    );
}

export default NavComponent;