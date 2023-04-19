import "./EachEvent.css"

const EachEvent = ({post}) => {
    return (
        <div className="row">

            <div className="card wd-eacheventcard" style={{width: '18rem'}}>
                <img src={post.Eimage} className="card-img-top wd-eacheventimg"
                     alt="ImageofEachEvent"/>
                <div className="card-body">
                    <p className="card-text wd-EventTitle">{post.Ename}</p>
                </div>
            </div>


        </div>
    );
}

export default EachEvent;