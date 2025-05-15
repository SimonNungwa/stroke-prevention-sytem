import React from "react";
import { Bell, Settings } from "lucide-react";

const Header = () => {
  return (
    <header className="hidden md:flex items-center justify-between px-6 py-3 bg-white shadow-sm rounded-t-2xl">
      {/* Logo & Navigation */}
      <div className="flex items-center gap-10">
        <div className="flex items-center gap-2">
          <div className="bg-blue-500 rounded-full p-2">
            <span className="text-white font-bold text-lg">+</span>
          </div>
          <span className="font-semibold text-lg">Stroke</span>
        </div>
        <nav className="flex gap-4 bg-gray-100 rounded-full px-2 py-1">
          {["Dashboard", "Patients", "Appointments", "Docs", "Study materials"].map(
            (item, index) => (
              <button
                key={item}
                className={`px-4 py-1 rounded-full text-sm font-medium ${
                  index === 0
                    ? "bg-black text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item}
              </button>
            )
          )}
        </nav>
      </div>

      {/* Actions & Profile */}
      <div className="flex items-center gap-4">
        <button className="text-gray-600 hover:text-black">
          <Bell size={20} />
        </button>
        <button className="text-gray-600 hover:text-black">
          <Settings size={20} />
        </button>
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Dr. Robert Fox"
            className="w-8 h-8 rounded-full object-cover"
          />
          <div className="text-sm">
            <div className="font-medium">Dr. Robert Fox</div>
            <div className="text-gray-500 text-xs">Surgeon</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
