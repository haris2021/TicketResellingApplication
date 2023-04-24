import "./EachUserCard.css"
import {useDispatch} from "react-redux";

import {DeleteUserAdminThunk} from "../../Services/Users-Thunks.js"

const EachUserCard = ({post}) => {

    const dispatch = useDispatch();


    const DeleteUserbtn = (id) => {

        dispatch(DeleteUserAdminThunk(id));
}

 /*



    const DeleteUserbtn = (id) => {


        /!*useEffect(() => {



        }, [id])*!/

        dispatch(DeleteUserAdminThunk(id));
    }
*/


    return (
        <div className="row">

            <div className="card wd-eacheventcard" style={{width: '18rem'}}>

                <img src={post.Image} className="card-img-top wd-eacheventimg"
                     alt="ImageofEachEvent"/>

                <div className="card-body">
                    <p className="card-text wd-EventTitle">{post.FirstName}</p>
                    <p className="card-text wd-EventTitle">{post.Username}</p>
                    <p className="card-text wd-EventTitle">{post.Role}</p>
                    <p className="card-text wd-EventTitle">{post.Email}</p>

                  {/*  <button className="btn btn-danger" onClick={() => {
                        DeleteUserbtn(post._id)
                    }}>Delete User
                    </button>*/}

                </div>

            </div>


        </div>
    );
}

export default EachUserCard;