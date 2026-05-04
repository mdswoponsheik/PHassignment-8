

const Banner = () => {
  return (
    <div className="hover:animate__backInDown " >
      
        <img
            src="https://i.ibb.co.com/TDh2xkzf/banner.png"
            alt="banner"
            className="w-full h-130 object-cover rounded-sm"
          />

          {/* Overlay */}
          <div className="absolute inset-y-35  flex flex-col items-center justify-center">
            <h1 className="text-black text-5xl md:text-7xl font-bold text-center px-4 animate-fadeIn animate__animated animate__bounce animate__delay-3s hover:animate__backInDown">
             Upgrade Your <span className="text-green-500 ">Skills</span> Today
            </h1>
            <br />
            <h3 className="text-blue-400 text-3xl md:text-4xl font-semibold text-center animate-fadeIn animate__backInDown">
            Learn from Industry Experts
            </h3>
           
          </div>

    </div>
  )
}

export default Banner

