import "./EachEvent.css"
import {useNavigate} from "react-router";

const EachEvent = ({post}) => {

    const navigate = useNavigate();

    const RedirectToDetail = ( id) =>
    {
        navigate(`/details/${id}`);
    }

    return (
        <div className="row">

            <div className="card wd-eacheventcard" style={{width: '18rem'}}>
                <img onClick={()=>{RedirectToDetail(post._id)}} src={post.Eimage} className="card-img-top wd-eacheventimg"
                     alt="ImageofEachEvent"/>
                <div className="card-body">
                    <p className= "card-text wd-EventTitle">{post.Ename}</p>
                </div>
            </div>


        </div>
    );
}

export default EachEvent;