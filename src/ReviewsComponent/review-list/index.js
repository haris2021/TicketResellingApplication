import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {createReviewThunk, findReviewsThunk} from "../../Services/reviews-thunk";
import ReviewItem from "./review-item";
import {Button, Form} from "react-bootstrap";

const ReviewList = () => {
    const {review, reviewsLoading} = useSelector(state => state.reviews)
    let [newReview, setNewReview] = useState('');
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findReviewsThunk())
    }, [])

    const handleReviewChange = () => {
        const templateReview = {
            "userHandle": "@user",
            "liked": false,
            "likes": 0,
            "avatar": "eventbanner.jpg"
        }
        const createReview = {
            ...templateReview,
            review: newReview
        }
        console.log(createReview);
        dispatch(createReviewThunk(createReview));
    };

    return (
        <>
            <ul className="list-group">
                <div className={"p-3 mb-3 bg-light"}>
                    <h4>Reviews</h4>
                </div>
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
            <div className="container mt-5">
                <Form>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Write a Review</Form.Label>
                        <Form.Control
                            as="textarea"
                            rows={3}
                            placeholder={"Type your Review"}
                            onChange={(event) => setNewReview(event.target.value)}
                        />
                    </Form.Group>
                    <Button style={{marginTop: 12}} variant="primary"
                            onClick={handleReviewChange}>
                        Submit Review
                    </Button>
                </Form>
            </div>
        </>
    );

};
export default ReviewList;