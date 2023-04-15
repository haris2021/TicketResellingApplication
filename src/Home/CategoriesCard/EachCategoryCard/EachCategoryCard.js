import "./EachCategoryCard.css"
import EachEvent from "../EachEvent/EachEvent.js";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
// import Concerts from "../../../Data/Concerts/Concert.json"
import {FindallConcertThunk} from "../../../services/Concert-thunks.js";

const EachCategoryCard = () => {
    const {Concerts, loading} = useSelector(state => state.ConcertData)

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(FindallConcertThunk())
    }, [])

    return (
        <div className="wd-eachcategorydiv">
            {
                loading && <li className="list-group-item">
                            Loading...
                        </li>
            }
            <span className="wd-EachCategoryTitle">Concerts</span>
            <div className="row">
                {
                    Concerts.map((Event) =>
                                     <div className="col-sm-6 col-md-4 col-lg-3">
                                         <EachEvent key={Event._id}
                                                    post={Event}
                                         />
                                     </div>
                    )
                }
            </div>
        </div>
    );
}

export default EachCategoryCard;
