import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import ProductSearch from "../ProductSearch"; // Import the ProductSearch component
import ProminentAppBar from "../Product/Product/ProminentAppBar";

function Navbar() {
  const [isNavigation, setIsNavigation] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const handleShowMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <Fragment>
      {/* Navigation bar */}
      <nav className="bg-blue-700 text-white border-b border-gray-200 lg:px-20 px-2">
        <div className="mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            
            <Link to="/" className="flex items-center py-6">
              <img
                src="https://res.cloudinary.com/ddkso1wxi/image/upload/v1675919455/Logo/Copy_of_Zosh_Academy_nblljp.png"
                alt="Sparkling Gems"
                className="h-8 w-8 mr-2"
              />
              
              <span className="font-bold text-white text-lg">
                Sparkling Gems
              </span>
            </Link>

            {/* Navigation menu */}
            <ul className="hidden md:flex items-center space-x-6">
              {/* Menu items */}
              
            </ul>

            {/* Search bar */}
            <ProminentAppBar/> {/* Include the ProductSearch component here */}
            <div className="flex">
              <span className="px-2">User</span>
              <span className="px-2">Cart</span>
            </div>

            {/* Mobile navigation menu */}
            <div className="md:hidden flex items-center">
              <button onClick={handleShowMenu} className="text-white p-2">
                {/* Mobile menu icon */}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile navigation menu */}
      {showMenu && (
        <div className="md:hidden bg-white">
          <ul className="flex flex-col py-4 space-y-2 px-5">
            {/* Mobile menu items */}
          </ul>
        </div>
      )}
    </Fragment>
  );
}

export default Navbar;
