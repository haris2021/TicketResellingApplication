import {useEffect} from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import bootstrap from 'bootstrap/dist/js/bootstrap.min.js';
import "./Subscribe.css";

const Subscribe =( ) =>
{

    useEffect(() => {
        const toastElList = [].slice.call(document.querySelectorAll('.toast'))
        const toastList = toastElList.map(function (toastEl) {
            return new bootstrap.Toast(toastEl)
        })
        toastList.forEach(toast => toast.show())
    }, [])


    return(
        <div  className="toast align-items-center text-bg-primary border-0 d-flex justify-content-center"
              role="alert"
              aria-live="assertive"
              aria-atomic="true">
            <div className="d-flex">
                <div className="toast-body">
                    You are Subscribed!
                </div>
                <button type="button" className="btn-close btn-close-white me-2 m-auto"
                        data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
        </div>
    );
}

export default Subscribe;