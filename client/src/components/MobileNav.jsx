import React from "react";
import { AiOutlineHome, AiOutlineSearch, AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import {
    LayoutDashboard,
    Users,
    CalendarClock,
    FileText,
    GraduationCap,
    Home
} from "lucide-react";

const MobileNav = () => {
    return (
        // TODO: Do something about the Re render
        <section className="fixed bottom-0 left-0 w-full bg-white shadow-xl md:hidden z-10">
      <ul className="flex justify-around items-center py-3">
        {/* Dashboard */}
        <li>
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-600"
              }`
            }
          >
            <LayoutDashboard size={20} />
            <span className="text-xs mt-1">Dashboard</span>
          </NavLink>
        </li>

        {/* Patients */}
        <li>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-600"
              }`
            }
          >
            <Users size={20} />
            <span className="text-xs mt-1">Patients</span>
          </NavLink>
        </li>

        {/* Risk Check */}
        <li className="relative -mt-5">
          <NavLink
            to="/check-risk"
            className={({ isActive }) =>
              `flex flex-col items-center justify-center w-12 h-12 rounded-full mx-auto ${
                isActive ? "bg-blue-500" : "bg-blue-500"
              }`
            }
          >
            <Home size={22} className="text-white" />
          </NavLink>
          <span className="block text-xs text-center mt-1 text-blue-500 font-medium">Risk Check</span>
        </li>

        {/* Appointments */}
        <li>
          <NavLink
            to="/appointments"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-600"
              }`
            }
          >
            <CalendarClock size={20} />
            <span className="text-xs mt-1">Appointments</span>
          </NavLink>
        </li>

        {/* Resources */}
        <li>
          <NavLink
            to="/resources"
            className={({ isActive }) =>
              `flex flex-col items-center ${
                isActive ? "text-blue-500 font-semibold" : "text-gray-600"
              }`
            }
          >
            <GraduationCap size={20} />
            <span className="text-xs mt-1">Resources</span>
          </NavLink>
        </li>
      </ul>
    </section>
    );
};

export default MobileNav;
