import { Button } from "@/components/ui/button";

const Billboard = () => {
    return ( 
        <div className="flex mt-8  justify-center items-center lg:w-full md:w-full  text-blue-white h-[80vh] lg:h-[120vh] bg-gradient-to-br from-slate-900 to-green-200">
            <div className="flex flex-col justify-center items-center max-w-4xl py-8  min-w-full text-justify my-8 px-20 text-white">
                <p className="text-4xl sm:text-4xl md:text-6xl lg:text-8xl  font-serif text-semibold text-wrap text-center  py-4">Highlighted Message Will Be Shown Here </p>
                <p className="pb-4 text-slate-600 font-semibold">Subtitle will be here</p>
                <Button size='lg' className="mb-16">Button name</Button>

            </div>
        </div>
     );
}
 
export default Billboard;