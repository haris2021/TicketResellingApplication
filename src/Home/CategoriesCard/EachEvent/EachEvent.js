import "./EachEvent.css"

const EachEvent = ( {post}) =>
{
    return(
        <div className="row">

            <div className="card wd-eacheventcard" style={{ width: '18rem' }}>
                <img src={post.Img} className="card-img-top wd-eacheventimg" alt="ImageofEachEvent"/>
                <div className="card-body">
                    <p className="card-text wd-EventTitle">{post.Title}</p>
                </div>
            </div>


        </div>
    );
}

export default EachEvent;