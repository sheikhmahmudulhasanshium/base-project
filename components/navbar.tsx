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

const Navbar = () => {

    return ( 
        <div className="flex gap-2 text-gray-500 ">
            {optionList.map((option,index)=>(
                <Link href={option.link} key={index}>{option.name}</Link>
            ))}
        </div>
     );
}
 
export default Navbar;