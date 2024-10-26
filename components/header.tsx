import { ModeToggle } from "@/components/mode-toggle-button";

const Header = () => {
    return ( 
        <div className=" shadow-xl dark:shadow-stone-500 w-full min-w-max">
            <div className="flex justify-between items-center py-6 max-h-30 min-h-10 gap-4 w-full px-4 ">
                header 
                <ModeToggle/>
            </div>
           
        </div>
     );
}
 
export default Header;