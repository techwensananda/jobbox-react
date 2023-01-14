import { signOut } from "firebase/auth";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Link, useLocation } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import auth from "../../firebase/firebase.config";

const Navbar = () => {
  const { pathname } = useLocation();
  const dispatch = useDispatch()
  const { email, role } = useSelector(state => state.auth)
  const handleSignOut = () => {
    signOut(auth).then(() => {

      dispatch(logout())
    })



  }

  return (
    <nav
      className={`h-14 fixed w-full z-[999] ${pathname === "/" ? null : "bg-white"
        }`}
    >
      <ul className='max-w-7xl mx-auto flex gap-3 h-full items-center'>
        <li className='flex-auto font-semibold text-2xl'>
          <Link to='/'>JobBox</Link>
        </li>
        <li>
          <Link className='hover:text-primary' to='/jobs'>
            Jobs
          </Link>
        </li>
        {email ?
          <li>
            <button
              className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
              onClick={() => handleSignOut()}
            >
              Logout
            </button>
          </li>
          :
          <li>
            <Link
              className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
              to='/login'
            >
              Login
            </Link>
          </li>}
        {email && <li>
          <Link
            className='border border-black px-2 py-1 rounded-full hover:border-primary hover:text-white hover:bg-primary hover:px-4 transition-all '
            to={role ? '/dashboard' : '/register'}
          >
            {role ? 'Dashboard' : 'Register'}
          </Link>
        </li>}
      </ul>
    </nav>
  );
};

export default Navbar;
