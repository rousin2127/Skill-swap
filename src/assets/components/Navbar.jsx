import React, { use } from 'react';
import { Link, NavLink } from 'react-router';

import { CgProfile } from 'react-icons/cg';
import { AuthContext } from '../../context/AuthContext';

const Navbar = () => {
    const { user, signOutUser } = use(AuthContext);

    const handleSignOut = () => {
        signOutUser()
            .then(() => {
            })
            .catch(error => {
                // console.log(error)
            })
    }
    const links =  <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          Home
        </NavLink>
      </li>
      
      {user && (
        <li>
        <NavLink
          to="/profile"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          My Profile
        </NavLink>
      </li>
      ) 
      }
      
      <li>
        <NavLink
          to="/skills"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          All Skills
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about-us"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          About us
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-blue-600 font-semibold underline"
              : "text-gray-700 hover:text-blue-500 transition"
          }
        >
          Contact
        </NavLink>
      </li>
    </>

    return (
        <div className="max-w-7xl mx-auto navbar bg-base-100 shadow-sm sticky top-0 z-50">

            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <Link to='/' className=" ml-5 md:text-4xl font-extrabold animate__animated animate__bounce animate__delay-2s">SkillSwap</Link >
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {
                        links
                    }
                </ul>
            </div>
            <div className="navbar-end gap-2">

                {
                    user ? (
                        <>
                            {/* profile tooltip */}
                            <div className="tooltip tooltip-bottom" data-tip={user.displayName || 'No Name'}>
                                <Link to="/profile">
                                    {user.photoURL ? (
                                        <img
                                            src={user.photoURL}
                                            alt="User"
                                            className="w-10 h-10 rounded-full border-2 border-gray-400 hover:scale-105 transition"
                                        />
                                    ) : (
                                        <CgProfile className="w-8 h-8" />
                                    )}
                                </Link>
                            </div>

                            <button onClick={handleSignOut} className="btn bg-blue-600">
                                Sign Out
                            </button>
                        </>
                    )
                        : <><Link to={'/login'} className="btn bg-blue-600 text-white">Login</Link>
                            <Link to={'/signup'} className="btn bg-blue-600 text-white">Sign Up</Link> </>
                }
            </div>
        </div>

    );
};

export default Navbar;