import React, { useState, useEffect } from "react";
import SideNavPresentation from "./SidenavPresentation"
import $ from 'jquery';

const Index = () => {

    const [path, setPath] = useState(window.location.pathname)

    const activeSideBarColor = () => {
        let _path = window.location.origin + path
        $("#layoutSidenav_nav .sb-sidenav a.nav-link").each(function () {
            if (this.href === _path) {
                $(this).addClass("active");
            } else {
                $(this).removeClass("active");
            }
        });
    }

    const redirectTo = (url, e) => {
        e.preventDefault()
        window.location.href = url
    }

    useEffect(() => {
        activeSideBarColor();
    }, [path])

    return (
        <SideNavPresentation redirectTo={redirectTo} setPath={setPath} />
    )
}

export default Index