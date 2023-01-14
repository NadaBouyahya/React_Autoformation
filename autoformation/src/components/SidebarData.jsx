import React from "react";
import Home from './pages/Home';
import About from './pages/About'
import Contact from './pages/Contact'


export const SidebarData = [
    {
        title: "Home",
        link: "/",
        component: <Home></Home>
    },

    {
        title: "About",
        link: "/about",
        component: <About></About>
    },

    {
        title: "Contact",
        link: "/contact",
        component: <Contact></Contact>
    }

]