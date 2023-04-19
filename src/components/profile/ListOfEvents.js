import {Link} from "react-router-dom";

const ListOfEvents = ({post} ) =>
{
    return(

            <li className="list-group-item d-flex justify-content-between align-items-center flex-wrap">

                    <span className="mb-0">
                        <Link  className="wd-removeunderline" to={"/"} >{post.Ename}</Link>
                    </span>
            </li>

    )
}
export default ListOfEvents;
