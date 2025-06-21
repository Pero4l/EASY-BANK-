import desktop from "/public/assets/bg-intro-desktop.svg"
import mobile from "/public/assets/bg-intro-mobile.svg"

function Background(){

    return(
        <div>
            <img className="lg:hidden w-[530px] sticky " src={mobile} alt="" /> 
        </div>
    )
}

export  default Background