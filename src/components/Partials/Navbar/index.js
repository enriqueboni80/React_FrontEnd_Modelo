import React, { useState } from "react";
import NavBarPresentation from "./NavBarPresentation"


const Index = () => {

    const [sideBar, setSideBar] = useState(false)
    
    // Toggle the side navigation - Migrado do template
    const sidebarToggle = (e) => {
        e.preventDefault();
        if (sideBar === false) {
            setSideBar(true)
        } else {
            setSideBar(false)
        }
        sideBar === false ? document.getElementsByTagName("body")[0].classList.add("sb-sidenav-toggled")
            : document.getElementsByTagName("body")[0].classList.remove("sb-sidenav-toggled")
    }

    return (
        <NavBarPresentation sidebarToggle={sidebarToggle} />
    )
}

export default Index