import { useState } from "react";

function Header() {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header className="py-4 px-4 sm:px-10 z-50 min-h-[70px]">
        <div className="relative flex items-center justify-between">
          <a href="#">
            <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
          </a>

          {/* Collapse Menu */}
          <div
            id="collapseMenu"
            className={`${
              isMenuOpen ? 'block' : 'hidden'
            } lg:block fixed lg:relative lg:bg-transparent bg-white top-0 left-0 w-full lg:w-auto lg:h-auto h-full lg:p-0 p-6 shadow-md lg:shadow-none z-50`}
          >
            <button onClick={handleClick} className="lg:hidden absolute top-4 right-4 z-[100] bg-white p-3 rounded-full">
              {/* Close button for mobile */}
              <svg xmlns="http://www.w3.org/2000/svg" className="w-4 fill-black" viewBox="0 0 320.591 320.591">
                <path
                  d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                ></path>
                <path
                  d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                ></path>
              </svg>
            </button>

            <ul className="flex flex-col lg:flex-row gap-x-6 space-y-3 lg:space-y-0">
              <li className="lg:hidden mb-6">
                <a href="#">
                  <img src="https://readymadeui.com/readymadeui.svg" alt="logo" className="w-36" />
                </a>
              </li>
              <li onClick={() => handleScroll("section2")} className="px-3">
                <a href="#" className="hover:text-blue-600 text-blue-600 block font-semibold transition-all">
                  Features
                </a>
              </li>
              <li onClick={() => handleScroll("section3")} className="px-3">
                <a href="#" className="hover:text-blue-600 block font-semibold transition-all">
                  Testimonials
                </a>
              </li>
              <li onClick={() => handleScroll("section4")} className="px-3">
                <a href="#" className="hover:text-blue-600 block font-semibold transition-all">
                  Pricing
                </a>
              </li>
              <li onClick={() => handleScroll("section5")} className="px-3">
                <a href="#" className="hover:text-blue-600 block font-semibold transition-all">
                  Team
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us and Open Menu Button */}
          <div className="flex items-center ml-auto">
            <button onClick={() => handleScroll("section6")} className="px-6 py-3 rounded-xl text-white bg-cyan-900 transition-all hover:bg-cyan-800">
              Contact Us
            </button>
            <button onClick={handleClick} className="lg:hidden ml-7">
              {/* Hamburger Menu for mobile */}
              <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
