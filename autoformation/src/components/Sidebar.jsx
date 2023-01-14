import React from "react";
import { Link } from "react-router-dom";
import { SidebarData } from "./SidebarData";


function Sidebar() {
      
    return (
        <div className="menu_content">
            <ul className="menu_items">
                {SidebarData.map((item) => {
                    return (
                        <li><Link to={item.link}>{item.title}</Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;