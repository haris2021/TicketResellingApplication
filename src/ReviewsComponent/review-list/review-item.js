import {faHeart, faHeart as regularHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";

const toggleLike = (reviewStat) => {
    alert("Liked review")
    // dispatch(updateTuitThunk({
    //                              ...tuitStat,
    //                              liked: !tuitStat.liked,
    //                              likes: (tuitStat.liked === true) ? tuitStat.likes - 1
    //                                                               : tuitStat.likes + 1
    //                          }))
    // // dispatch(todoLikeToggle(tuitStat));
}

const ReviewItem = ({reviewItem}) => {
    return (
        <li className="list-group-item border-0">
            <div className="row align-items-center">
                <div className="col-sm-2">
                    <img src={`/images/${reviewItem.avatar}`} className="rounded-circle"
                         width={"100%"}
                         alt="Avatar"/>
                    <span className="wd-time-handle-color">{reviewItem.userHandle}</span>
                </div>

                <div className="col-sm-10">
                    <div className="d-flex justify-content-between align-items-center">
                        <span className="wd-time-handle-color"
                              style={{flex: 1}}>{reviewItem.review}</span>

                        <span className="d-flex align-items-center">
                            <a onClick={() => toggleLike(reviewItem)}>
                            <FontAwesomeIcon color={reviewItem.liked ? "red" : "darkgray"}
                                             icon={reviewItem.liked ? faHeart : regularHeart}/>
                            </a>
                            <span className="ml-2">{reviewItem.likes}</span>
                        </span>
                    </div>
                </div>
            </div>
        </li>
    );
};

export default ReviewItem;