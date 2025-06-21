function Article1(props) {
    return (
        <div className="pt-32 lg:pt-0">
            <div className="bg-[#f4f5f7] lg:p-32 lg:px-60">
                <div className="">
                    <div>
                        <h1 className="font-light text-5xl text-[#30314e] text-center lg:text-left leading-[60px] lg:leading-[70px] pt-20 lg:pt-0">
                            Why choose Easybank?
                        </h1>
                        <br />
                        <p className="text-gray-500 text-[19px] lg:text-xl text-center lg:text-left lg:w-[700px] leading-8 lg:leading-snug">
                            We leverage Open Banking to turn your bank account into your financial hub. Control your finances like never before.
                        </p>
                    </div>
                </div>
                

                <div  className=" flex flex-col lg:flex-row lg:justify-between lg:items-center lg:p-gap-10 lg:gap-0 pt-20">
                    {props.article.map((article) => (
                        <div>

                            <div>
                                <div className="flex justify-center lg:justify-start">
                            <img className="" src={article.image} alt="" />
                            </div>
                            <h2 className="text-gray-600 text-2xl text-center lg:text-left pt-10">{article.name}</h2>

                            <p className="p-3 lg:p-0 text-gray-500 text-center lg:text-left text-xl lg:w-[320px] leading-8 lg:leading-[32px] pt-7 pb-10">{article.title}</p>
                                                        </div>
                           
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
}

export default Article1;