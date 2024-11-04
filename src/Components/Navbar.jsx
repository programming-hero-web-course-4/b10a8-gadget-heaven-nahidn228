import { BsCart3 } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="border-t-2 border-x-2 bg-white/30 backdrop-blur-xl mt-2 rounded-t-xl text-white max-w-screen-xl  mx-auto">
      <div className="mx-2 mt-2 bg-[#9538E2] rounded-t-xl">
        <div className="navbar  ">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex="0"
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex="0"
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                <NavLink  className="btn bg-[#9538E2]" to="/">
                  Home
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/statistics">
                  Statistics
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/dashboard">
                  Dashboard
                </NavLink>
                <NavLink className="btn bg-[#9538E2]" to="/gadgets">
                Gadgets
                </NavLink>
              </ul>
            </div>
            <Link className="btn btn-ghost text-xl text-white hover:text-black bg-[#9538E2]">
              Gadget Heaven
            </Link>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal space-x-4 text-lg font-medium">
              <NavLink
                className="btn border-none text-white hover:text-black bg-[#9538E2]"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                className="btn border-none text-white hover:text-black bg-[#9538E2]"
                to="/statistics"
              >
                Statistics
              </NavLink>
              <NavLink
                className="btn border-none text-white bg-[#9538E2] hover:text-black"
                to="/dashboard"
              >
                Dashboard
              </NavLink>
              <NavLink
                className="btn  border-none text-white bg-[#9538E2] hover:text-black"
                to="/gadgets"
              >
                Gadgets
              </NavLink>
            </ul>
          </div>
          <div className="navbar-end space-x-4">
            <NavLink className="btn btn-ghost btn-circle text-xl">
              <div className="indicator">
                <BsCart3 />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </NavLink>
            <NavLink className="btn btn-ghost btn-circle text-xl">
              <div className="indicator">
                <FaRegHeart />
                <span className="badge badge-xs badge-primary indicator-item"></span>
              </div>
            </NavLink>
          </div>
        </div>

        {/* Nav text */}
        
      </div>
    </div>
  );
};

export default Navbar;