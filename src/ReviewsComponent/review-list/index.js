import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {findReviewsThunk} from "../../Services/reviews-thunk";
import ReviewItem from "./review-item";

const ReviewList = () => {
    const {review, reviewsLoading} = useSelector(state => state.reviews)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk())
    }, [])

    return (
        <ul className="list-group">
            {
                reviewsLoading &&
                <li className="list-group-item">
                    Loading...
                </li>
            }
            {
                review.map((review) =>
                                <ReviewItem key={review._id} reviewItem={review}/>)
            }
        </ul>
    );
};
export default ReviewList;