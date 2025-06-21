import phones from "/public/assets/image-mockups.png"
import desktop from "/public/assets/bg-intro-desktop.svg"

function Hero(){

    return(

        <div className="flex flex-col-reverse lg:flex-row lg:items-center justify-between lg:p-32 lg:pb-0 mt-[-637px] lg:mt-0 relative">

            <div className="flex flex-col items-center lg:items-start lg:w-[500px] lg:translate-x-20 lg:translate-y-[-240px] mt-14 lg:mt-0">
                <h1 className=" text-center lg:text-start text-[#30314e] text-5xl lg:text-7xl leading-snug lg:leading-[90px] lg:w-[700px] ">Next generation digital banking</h1>

                <p className=" p-5 py-4 text-[19px] lg:py-5   text-gray-500 lg:text-xl lg:w-[500px] leading-8 lg:leading-snug "> Take your financial life online. Your Easybank account will be a one-stop-shop 
                for spending, saving, budgeting, investing, and much more.</p>

                <div className="text-center pt-4 lg:pt-4">
                <button className=' lg:flex items-center justify-center font-semibold rounded-full h-12 w-48 bg-gradient-to-r from-green-400 to-blue-400 text-white  hover:bg-gradient-to-r hover:from-gray-400 hover:to-green-200'>Request Invite</button>
                </div>
               
            </div>

            <div className="flex">
            <img className="hidden lg:flex translate-x-72  -translate-y-[360px]" src={desktop} alt="" />

            <img className="relative lg:right-[510px] lg:bottom-60 " src={phones} alt="" />
            </div>
            

        </div>

    )
}

export default Hero