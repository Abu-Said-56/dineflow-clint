import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const navlinks = <>
        <NavLink to="/"><li><a className="text-xl">Home</a></li></NavLink>
        <NavLink to="/allfoods"><li><a className="text-xl">All Foods</a></li></NavLink>
        <NavLink to="/gallery"><li><a className="text-xl">Gallery</a></li></NavLink>
        <NavLink to="/myprofile"><li><a className="text-xl">My Profile</a></li></NavLink>
        <NavLink to="/register"><li><a className="text-xl">Register</a></li></NavLink>
    </>

    return (
        <div className="navbar bg-slate-300">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navlinks}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl">DineFlow</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navlinks}
                </ul>
            </div>
            <div className="navbar-end">
                {user ?
                    <Link onClick={()=>logOut()} ><a className="btn btn-accent text-xl">Log Out</a></Link>
                    : <>
                        <Link to="/login"><a className="btn btn-accent text-xl">Login</a></Link>

                    </>
                }
            </div>
        </div>
    );
};
export default Navbar;
