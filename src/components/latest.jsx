 function Latest(props){

    return(
        <div className="pt-24 lg:p-28 lg:mx-[120px]">
            <h1 className="text-[#30314e] text-5xl font-light text-center lg:text-left">Latest Article</h1>

            <div className="p-5 lg:p-0 flex flex-col lg:flex-row justify-between pt-10 lg:mt-16 gap-16 lg:gap-0 lg:items-center">
                {props.latest.map((latest) =>(
                    <div className="bg-white  w-fit rounded-b-lg pb-10 lg:pb-8 lg:w-[350px]  shadow-lg hover:shadow-2xl transition-shadow duration-300">
                        <img className="rounded-t-lg lg:w-[350px] lg:h-[270px] " src={latest.image} alt="" />
                        
                        <div className="p-[30px] ">
                                <p className="text-gray-500 text-xs">{latest.author}</p>
                                <h2 className="text-[#30314e] text-xl  pt-3 lg:w-[270px] ">{latest.title}</h2>
                                <p className="text-gray-500 pt-5 lg:w-[300px] ">{latest.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )

 }

 export default Latest