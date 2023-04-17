import "./AllUserCard.css"

import EachUserCard from "../EachUserCard/EachUserCard.js"

import {useSelector} from "react-redux";

import Navigation from "../../Home/Navigation/index.js"

const AllUserCard = () => {

    const {allusers, loading} = useSelector(state => state.UserLogin);

    return (
        <div className="wd-eachcategorydiv">

            <Navigation/>
            {
                loading && <li className="list-group-item">
                            Loading...
                        </li>
            }
            <span className="wd-EachCategoryTitle">All users</span>
            <div className="row">
                {
                    allusers.map((Event) =>
                                     <div className="col-sm-6 col-md-4 col-lg-3">
                                         <EachUserCard key={Event._id}
                                                       post={Event}
                                         />
                                     </div>
                    )
                }
            </div>
        </div>
    );
}

export default AllUserCard;
