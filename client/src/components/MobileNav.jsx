import React from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const MobileNav = () => {
    return (
        // TODO: Do something about the Re render
        <section className="fixed bottom-0 left-0 w-full bg-black shadow-xl md:hidden">
            <ul className="flex justify-around items-center py-3">
                {/* Home */}
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${
                                isActive ? "text-orange-500 font-semibold" : "text-white"
                            }`
                        }
                    >
                        <AiOutlineHome size={24} />
                        <span>Home</span>
                    </NavLink>
                </li>

                {/* Search */}
                <li>
                    <NavLink
                        to="/Search"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${
                                isActive ? "text-orange-500 font-semibold" : "text-white"
                            }`
                        }
                    >
                        <AiOutlineSearch size={24} />
                        <span>Search</span>
                    </NavLink>
                </li>

                {/* Saved */}
                <li>
                    <NavLink
                        to="/Saved"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${
                                isActive ? "text-orange-500  font-semibold" : "text-white"
                            }`
                        }
                    >
                        <AiOutlineHeart size={24} />
                        <span>Saved</span>
                    </NavLink>
                </li>

                {/* Account */}
                <li>
                    <NavLink
                        to="/Account"
                        className={({ isActive }) =>
                            `flex flex-col items-center ${
                                isActive ? "text-orange-500  font-semibold" : "text-white"
                            }`
                        }
                    >
                        <AiOutlineUser size={24} />
                        <span>Account</span>
                    </NavLink>
                </li>
            </ul>
        </section>
    );
};

export default MobileNav;
