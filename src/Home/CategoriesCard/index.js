import "./index.css"
import EachCategoryCard from "./EachCategoryCard/EachCategoryCard.js";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
    FindallConcertThunk,
    FindallMoviesThunk,
    FindallOtherThunk
} from "../../Services/Concert-thunks.js";

const CategoriesCard = () => {

    const {Concerts, loadingConcerts ,movies,loadingMovies, other,loadingOther} = useSelector(state => state.ConcertData)


    const dispatch = useDispatch();

    useEffect(() => {

        dispatch(FindallConcertThunk())
        dispatch(FindallMoviesThunk());
        dispatch(FindallOtherThunk())
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])



    return (
        <div className="wd-categoriescarddiv">

            {
                loadingConcerts && <li className="list-group-item">
                            Loading Concerts...
                        </li>
            }

            <EachCategoryCard
               Data = {Concerts}
            />

            {
                loadingMovies && <li className="list-group-item">
                                    Loading Movies..
                                </li>
            }

            {
                movies.length === 0 ? " "  : <EachCategoryCard
                Data = {movies}
            />
            }

            {
                loadingOther && <li className="list-group-item">
                                    Loading Other Events...
                                </li>
            }


            {
                other.length === 0 ? " "  : <EachCategoryCard
                    Data = {other}
                />
            }


        </div>
    );
}

export default CategoriesCard;
