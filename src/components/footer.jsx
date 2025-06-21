

function Footer() {
  return (
    <div className='bg-[#2d314e]  '>
      <div className=' p-10 lg:mx-36 flex flex-col lg:flex-row lg:justify-between lg:items-center lg:p-20 gap-10 text-center lg:text-left'>
        <div>
            <div className="flex justify-center lg:justify-start">
            <img src="/public/assets/Screenshot from 2025-06-21 03-09-31.png" className='text-white w-40' alt="logo" />
            </div>
            <div className='flex gap-4 mt-8 justify-center lg:justify-start'>
                <img src="/assets/icon-facebook.svg" alt="facebook" />
                <img src="/assets/icon-youtube.svg" alt="youtube" />
                <img src="/assets/icon-twitter.svg" alt="twitter" />
                <img src="/assets/icon-pinterest.svg" alt="pinterest" />
                <img src="/assets/icon-instagram.svg" alt="instagram" />
            </div>
        </div>
        <div className='mt-0 lg:flex lg:gap-40'>
            <div>
                <p className='text-white hover:text-green-500'>About Us</p>
                <p className='text-white hover:text-yellow-500 pt-4'>Contact</p>
                <p className='text-white hover:text-blue-500 pt-4'>Blog</p>
            </div>
            <div className="pt-3 lg:pt-0">
                <p className='text-white hover:text-pink-500'>Careers</p>
                <p className='text-white hover:text-purple-500 pt-4'>Support</p>
                <p className='text-white hover:text-orange-500 pt-4'>Privacy Policy</p>
            </div>
        </div>
        <div className='items-end'>
            <button className='rounded-full h-12 w-40 bg-gradient-to-r from-green-400 to-blue-400 text-white -mt-4 hover:bg-gradient-to-r hover:from-slate-400 hover:to-lime-200'>Request Invite</button>
            <p className='pt-4 text-white'>&copy; Easybank. All Rights Reserved</p>
        </div>
      </div>
    </div>
  )
}

export default Footer