import "./index.css"
import EachCategoryCard from "./EachCategoryCard/EachCategoryCard.js";

const CategoriesCard = ( ) =>
{
    return(
        <div className="wd-categoriescarddiv">

            <EachCategoryCard/>
            <EachCategoryCard/>
            <EachCategoryCard/>

        </div>
    );
}

export default CategoriesCard;
