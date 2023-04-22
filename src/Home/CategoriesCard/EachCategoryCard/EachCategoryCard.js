import "./EachCategoryCard.css"
import EachEvent from "../EachEvent/EachEvent.js";

;

const EachCategoryCard = ( {Data} ) => {



    return (

        <div className="wd-eachcategorydiv">

{/*
            <span className="wd-EachCategoryTitle">Concerts</span>
*/}

                    <div className="row">
                        {
                            Array.isArray(Data) ? Data.map( (Event) =>
                                <div className="col-sm-6 col-md-4 col-lg-3">

                                              <EachEvent key = {Event._id}
                                                         post = {Event}

                                              />
                                </div>

                            ) : null

                        }
                    </div>

        </div>
    );
}

export default EachCategoryCard;
