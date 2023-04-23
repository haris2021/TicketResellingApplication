import "./index.css"
import {useState} from "react";
import {useNavigate} from "react-router";

const Search = ( ) =>
{
    let [search, setSearch] = useState("");
    let navigate = useNavigate();
    const searchEvent = () => {
        navigate('/search?Ename='+search);
    }
    return(
        <div>
            <div className="wd-searchimgdiv ">
                <img
                    src="https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?cs=srgb&dl=pexels-wendy-wei-1190298.jpg&fm=jpg"
                    className="wd-searchimg" alt = "search img"/>
            </div>

            <span className="wd-textoverimage"> Find your next Memory</span>
                    <div className="input-group mb-3 wd-inputbox">

                        <input type="text" className="form-control" 
                                onChange={(e) => { setSearch(e.target.value) }}
                               aria-label="Recipient's username"
                                aria-describedby="basic-addon2"/>
                        <button className="text-primary input-group-text wd-searchtxt"
                         id="basic-addon2"
                         onClick={searchEvent}>Search</button>
                    </div>

        </div>
    )
}

export default Search;
