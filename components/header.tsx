import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Header = () => {
    return ( 
        <div className="shadow-xl dark:shadow-stone-500 min-w-max flex justify-center items-center max-w-full max-h-12 min-h-10">
            {/* Visible on small and medium screens */}
            <div className="block lg:hidden">
                {/* Content for small and medium screens */}
                <div className="flex justify-between w-full gap-2 ">
                    <p>Logo</p>
                    <Navbar/>
                    <p>Cart</p>
                </div>
            </div>
            {/* Visible on large screens only */}
            <div className="hidden lg:block">
                {/* Content for large screens */}
                <div className="flex justify-between w-full gap-2">
                    <p>Logo</p>
                    
                    <p>Cart</p>
                    <Sidebar/>
                </div>
            </div>
        </div>
    );
}

export default Header;
