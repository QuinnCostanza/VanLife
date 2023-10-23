import React from "react"
import { Link, NavLink } from "react-router-dom"
import imageUrl from "/assets/images/avatar-icon.png"
import { DocumentReference } from "firebase/firestore/lite"

export default function Header() {
    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "underline",
        color: "#161616"
    }
    const isLoggedIn = localStorage.getItem("loggedin")

    function fakeLogOut() {
        localStorage.removeItem("loggedin")
        window.location.reload()
    }

    function showMenu() {
        const menu = document.querySelector(".mobile-nav")

        console.log("clicked")
        menu.classList.toggle("show")
        // if(menu.classList.contains("show")) {
        //     menu.classList.remove(".show")
        //     console.log("removed")
        // }
        // else {
        //     menu.classList.add(".show")
        //     console.log("Added")
        // }
    }

    return (
        <header>
            <Link className="site-logo" to="/">#VanLife</Link>
            <nav className="desktop-nav">
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    <img
                        src={imageUrl}
                        className="login-icon"
                    />
                </Link>
                {isLoggedIn ? <button className="logout" onClick={fakeLogOut}>Log Out</button> : ""}
            </nav>

            {/* Mobile Navigation */}

            <nav className="mobile-nav">
                <NavLink
                    to="/host"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Host
                </NavLink>
                <NavLink
                    to="/about"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    About
                </NavLink>
                <NavLink
                    to="/vans"
                    style={({ isActive }) => isActive ? activeStyles : null}
                >
                    Vans
                </NavLink>
                <Link to="login" className="login-link">
                    Sign Up
                </Link>
                {isLoggedIn ? <button className="logout logout-mobile" onClick={fakeLogOut}>Log Out</button> : ""}
            </nav>
            <button className="mobile-menu-open" onClick={showMenu}>Menu</button>
        </header>
    )
}
