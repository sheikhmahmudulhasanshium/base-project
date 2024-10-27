import Link from "next/link";

const optionList=[
    {
        name:'About',
        link:'/option-1',
    },
    {
        name:'How it works',
        link:'/option-2',
    },
    {
        name:'Offering',
        link:'/option-3',
    },
    {
        name:'FAQ',
        link:'/',
    },
    {
        name:'Contact',
        link:'/',
    },
]

const Navbar = () => {

    return ( 
        <div className="flex justify-between text-xl font-semibold text-gray-500 w-8/12">
            {optionList.map((option,index)=>(
                <Link href={option.link} key={index}>{option.name}</Link>
            ))}
        </div>
     );
}
 
export default Navbar;