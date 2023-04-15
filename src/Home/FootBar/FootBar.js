import "./FootBar.css"

const FootBar = ( ) =>
{
    return(
        <div>

            <div className="row wd-footrow1">
                <span>Epic events and incredible deals straight to your inbox.</span>
            </div>

            <div className="row wd-footrow2">
                <div className="col-xl-7">
                    <input className="wd-footinputbox" placeholder="Email Address"/>
                </div>

                <div className="col-xl-5">
                    <button type="button" className="btn btn-sm wd-footerbtn">Join The List</button>
                </div>
            </div>

            <div className="row wd-footrow3">
                <span className="wd-spanrow3">By signing up, you acknowledge and accept our privacy policy and consent to receiving emails. </span>
            </div>

        </div>
    );
}

export default FootBar;