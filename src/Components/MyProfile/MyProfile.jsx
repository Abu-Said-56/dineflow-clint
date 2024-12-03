import { NavLink } from "react-router-dom";

const MyProfile = () => {
    const navlinks = <>
        <NavLink to="/addedfooditem"><li><a className="text-xl">My Added Food Items</a></li></NavLink>
        <NavLink to="/addfooditem"><li><a className="text-xl">Add a Food Item</a></li></NavLink>
        <NavLink to="/orderedfood"><li><a className="text-xl">Ordered Food Item</a></li></NavLink>
    </>
    return (
        <div className="">
            <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mx-auto bg-red-400 rounded-box z-[1] mt-8 w-64 p-2 shadow">
                {navlinks}
            </ul>
        </div>
    );
};

export default MyProfile;