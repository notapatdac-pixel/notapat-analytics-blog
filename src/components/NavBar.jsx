import logoImage from "../assets/images/hh..png";

function NavBar() {
  return (
    <nav className="w-full min-h-20 bg-color-brown-100 border-b border-color-brown-300">
      <div className="max-w-[1440px] min-h-20 mx-auto flex items-center justify-between pt-4 pb-4 px-4 sm:px-8 md:px-16 lg:px-[120px]">
        {/* Logo */}
        <div className="relative">
          <img 
            src={logoImage} 
            alt="hh. logo" 
            className="w-[41.56px] h-[21.91px] ml-[1.61px]"
          />
        </div>
        
        {/* Action Buttons */}
        <div className="w-[276px] h-12 flex items-center gap-2">
          <button className="w-[127px] h-12 py-3 px-10 bg-color-white text-color-brown-600 text-body-1 font-medium rounded-full border border-color-brown-400 hover:bg-color-brown-100 transition-colors cursor-pointer leading-6">
            Log in
          </button>
          <button className="w-[141px] h-12 py-3 px-10 bg-color-brown-600 text-color-white text-body-1 font-medium rounded-full hover:bg-color-brown-500 transition-colors cursor-pointer leading-6">
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

