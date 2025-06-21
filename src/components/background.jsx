import desktop from "/public/assets/bg-intro-desktop.svg"
import mobile from "/public/assets/bg-intro-mobile.svg"

function Background(){

    return(
        <div>
            <img className="hidden lg:flex translate-x-[600px] -translate-y-[250px] w-[ ] " src={desktop} alt="" />
            <img className="lg:hidden w-[530px] " src={mobile} alt="" />
        </div>
    )
}

export  default Background