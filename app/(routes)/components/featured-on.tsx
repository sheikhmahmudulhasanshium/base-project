const FeaturedOn = () => {
    return ( 
        <div className="flex justify-center items-center lg:w-full md:w-full  text-blue-white ">
            <div className="flex flex-col justify-center items-center  lg:w-10/12 md:w-10/12 sm:w-svw w-screen py-4 bg-gray-300 min-h-[20vh]">
                <p className="text-2xl text-blue-800 font-semibold ">Featured On</p>
                <div className="flex flex-col lg:flex-wrap justify-center pt-4 gap-4 items-center w-screen sm:w-screen lg:w-full md:w-full max-w-full">
                    <div className="w-6/12 h-40 bg-white">
                        Link 1
                    </div>
                    <div className="w-5/12 h-40 bg-white">
                        Link 2
                    </div>
                    <div className="w-5/12 h-40 bg-white">
                        Link 3
                    </div>

                </div>
            </div>

        </div>
     );
}
 
export default FeaturedOn;