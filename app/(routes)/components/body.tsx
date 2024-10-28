import Billboard from "./billboard";
import FeaturedOn from "./featured-on";

const Body = () => {
    return ( 
        <div className="flex flex-col justify-between items-center w-full bg-white pt-12">
            <Billboard/>
            <FeaturedOn/>
        </div>
     );
}
 
export default Body;