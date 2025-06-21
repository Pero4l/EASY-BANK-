import phones from "/public/assets/image-mockups.png"

function Hero(){

    return(

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:p-32">

            <div >
                <h1 className=" text-center lg:text-start text-[#30314e] text-5xl lg:text-7xl leading-snug lg:leading-[90px]">Next generation <br />digital banking</h1>

                <p className=" p-5 py-4 text-[19px] lg:py-5   text-gray-500 lg:text-xl lg:w-[500px] leading-8 lg:leading-snug "> Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>

                <div className="text-center pt-4 lg:pt-4">
                <button className=' lg:flex items-center justify-center font-semibold rounded-full h-12 w-48 bg-gradient-to-r from-green-400 to-blue-400 text-white  hover:bg-gradient-to-r hover:from-gray-400 hover:to-green-200'>Request Invite</button>
                </div>
               
            </div>

        <img src={phones} alt="" />

        </div>

    )
}

export default Hero