import {faHeart, faHeart as regularHeart} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import React from "react";
import {updateReviewThunk} from "../../Services/reviews-thunk";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

const ReviewItem = ({reviewItem, userId}) => {

    const dispatch = useDispatch();
    const {u} = useSelector(state => state.UserLogin);
    const toggleLike = (reviewStat) => {
        dispatch(updateReviewThunk({
                                       ...reviewStat,
                                       liked: !reviewStat.liked,
                                       likes: (reviewStat.liked === true) ? reviewStat.likes - 1
                                                                          : reviewStat.likes + 1
                                   }))
    }

    const navigate = useNavigate();

    const handleUserClick = ( username) =>
    {

        if(u._id)
            navigate(`/otherUserInfo/${username}`);
    }


    return (
        <li className="list-group-item border-0">

            <div className="row align-items-center">
                <div className="col-sm-2">

                    <img src={reviewItem.avatar} className="rounded-circle"
                         width={"100%"}
                         alt="Avatar"  onClick={()=>{handleUserClick(reviewItem.userHandle)}}/>
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