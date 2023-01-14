import React from "react";
import { SidebarData } from "./SidebarData";

import {
    createBrowserRouter,
    RouterProvider,
    Link
  } from "react-router-dom";

function Sidebar(props) {

    const router = createBrowserRouter ([
        {
          // path : {},
          element : <Sidebar/>
        }
      ])

      
    return (
        <div>
            <ul>
                {SidebarData.map((item) => {
                    return (
                        <li><Link to={item.props.link}></Link></li>
                    )
                })}
            </ul>
        </div>
    )
}

export default Sidebar;