import React, {useEffect, useState} from "react";
import Navigation from "../../Home/Navigation/index.js";
import {loggedInUserTickets} from '../../Services/myTickets-service.js'
import {useSelector} from "react-redux";
import "./index.css";
import {useNavigate} from "react-router";

const MyTicketsComponent = () => {
    const [results, setResults] = useState([]);
    const {u} = useSelector(state => state.UserLogin);
    let navigate = useNavigate();
    const handleClick = (id) => {
        navigate(`/details/${id}`);
    };

    useEffect(() => {
        const getLoggenInUserTickets = async () => {
            const response = await loggedInUserTickets(u._id);
            setResults(response);
        };
        getLoggenInUserTickets();
    }, [u._id]);
    return (
        <div>
            <div className="container">
                <Navigation/>
                <div className="h1 text-dark text-center bg-info">My Tickets</div>
                <div className="row">

                    <div className="container d-flex justify-content-center">
                        <ul className="list-group">
                            {results.length > 0 &&
                             results.map((result) => {
                                 return (
                                     <li className="list-group-item" key={result.id}>
                                         <div className="row">
                                             <div className="col-2 mt-2">
                                                 <img
                                                     src={result.event.Eimage}
                                                     className="img-fluid rounded"
                                                     alt={"event pic"}
                                                 />
                                             </div>
                                             <div className="col-8">
                                                 <div className="ms-3">
                                                     <div className="about">
                                                         <div
                                                             className="h3 text-light">{result.event.Ename}</div>
                                                         <div className="h4 text-light">
                                                             {result.event.Edescription}
                                                         </div>
                                                         <div className="h5 text-light">
                          <span className="text-dark">
                            <b>Location:</b>
                          </span>
                                                             {result.event.Elocation}
                                                         </div>
                                                         <div className="h5 text-light">
                          <span className="text-dark">
                            <b>Date:</b>
                          </span>
                                                             {result.event.Edate}
                                                         </div>
                                                     </div>
                                                 </div>
                                             </div>
                                             <div className="col-2 d-flex align-items-center">
                                                 <button
                                                     type="button"
                                                     className="btn btn-secondary"
                                                     onClick={() => handleClick(result.event._id)}
                                                 >
                                                     Details
                                                 </button>
                                             </div>
                                         </div>
                                     </li>
                                 );
                             })}
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default MyTicketsComponent;
