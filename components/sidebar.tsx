import { MenuIcon } from "lucide-react";
import { Button } from "./ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu";
import Link from "next/link";
const optionList=[
    {
        name:'Option 1',
        link:'/option-1',
    },
    {
        name:'Option 2',
        link:'/option-2',
    },
    {
        name:'Option 3',
        link:'/option-3',
    },
    {
        name:'Option 4',
        link:'/',
    },]


const Sidebar = () => {
    return ( 
        <DropdownMenu >
            <DropdownMenuTrigger asChild className="p-0 m-0">
                <Button size='icon' variant='ghost' className="p-0 m-0 scale-100 font-bold">
                    <MenuIcon className="text-blue-500 scale-150 text-4xl p-0 m-0"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="px-6 mt-4 bg-background  lg:hidden w-6/12 ">
                {optionList.map((option,index)=>(
                    <DropdownMenuItem key={index} asChild>
                        <Link href={option.link}>
                            <p>{option.name}</p>
                        </Link>
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
     );
}
 
export default Sidebar;