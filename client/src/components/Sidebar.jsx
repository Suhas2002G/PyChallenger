import React, { useState } from "react";
import {
  Settings,
  User,
  Menu,
  X,
  Bell,
  HelpCircle,
  LogOut,
  LayoutDashboard,
  Database,
  ChartNoAxesCombined,
  FileChartPie,
} from "lucide-react";
import Home from "../pages/Home";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeItem, setActiveItem] = useState("Home");

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const navItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard" },
    { icon: <Database size={20} />, label: "Explore Database" },
    { icon: <ChartNoAxesCombined size={20} />, label: "Analytics" },
    { icon: <FileChartPie size={20} />, label: "Projects" },
    { icon: <Bell size={20} />, label: "Notifications" },
    { icon: <User size={20} />, label: "Profile" },
    { icon: <Settings size={20} />, label: "Settings" },
    { icon: <HelpCircle size={20} />, label: "Support" },
    { icon: <LogOut size={20} />, label: "Logout" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <div
        className={`h-screen bg-[#2c6492] text-white transition-all duration-300 ease-in-out flex flex-col ${
          isCollapsed ? "w-20" : "w-64"
        }`}
      >
        {/* Toggle Button */}
        <div className="flex items-center justify-end p-4 mr-3">
          <button
            onClick={toggleSidebar}
            className="text-white hover:text-gray-300 focus:outline-none"
          >
            {isCollapsed ? <Menu size={24} /> : <X size={24} />}
          </button>
        </div>

        {/* Navigation Items */}
        <nav className="flex-1 flex flex-col items-start gap-2 px-2">
          {navItems.map((item) => (
            <SidebarItem
              key={item.label}
              icon={item.icon}
              label={item.label}
              collapsed={isCollapsed}
              active={activeItem === item.label}
              onClick={() => setActiveItem(item.label)}
            />
          ))}
        </nav>
      </div>

      {/* Main Content Placeholder */}
      <div className="flex-1 p-4">
        {/* <h2 className="text-2xl font-semibold">{activeItem}</h2>
        <p className="mt-4 text-gray-700">Content for {activeItem} page goes here.</p> */}
        <Home />
      </div>
    </div>
  );
};

const SidebarItem = ({ icon, label, collapsed, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center w-full gap-3 p-3 rounded-lg transition-all duration-200 
        ${collapsed ? "justify-center" : ""}
        ${
          active
            ? "bg-[#ffd43b] text-[#3776ab] font-semibold"
            : "hover:bg-[#fff0b9] hover:text-[#3776ab]"
        }
      `}
    >
      {icon}
      {!collapsed && <span className="text-sm">{label}</span>}
    </button>
  );
};

export default Sidebar;
