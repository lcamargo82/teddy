import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { ClientStore } from "../../stores/clients/client.store";
import { HeaderContainer, NavBar, NavBarLi, SidebarOverlay } from "./style";
import { Link, useLocation } from "react-router-dom";
import SideBar from "../sidebar/sidebar";

function Header() {
    const [sidebarOpen, setSidebarOpen] = useState(false); // Controla se o menu lateral está aberto
    const username = ClientStore((state) => state.username);
    const logout = ClientStore((state) => state.logout);
    const location = useLocation();
    
    const handleLogout = () => {
        localStorage.removeItem("auth");
        logout();
    };

    const selectedLocation = location.pathname;

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Alterna o estado do sidebar
    };

    return (
        <HeaderContainer>
            <div className="menu-logo">
                <AiOutlineMenu className="menu-iconz" onClick={toggleSidebar} />
                <img className="logo-image" src="images/logo.png" alt="Logo" />
            </div>

            <NavBar className="navbar">
                <ul className="ul-nav">
                    <NavBarLi>
                        <Link to="/" className={selectedLocation === "/" ? "active" : "disable"}>
                            Clientes
                        </Link>
                    </NavBarLi>
                    <NavBarLi>
                        <Link to="/selected-clients" className={selectedLocation === "/selected-clients" ? "active" : "disable"}>
                            Clientes selecionados
                        </Link>
                    </NavBarLi>
                    <NavBarLi onClick={handleLogout}>
                        <Link to="/login" className="disable">
                            Sair
                        </Link>
                    </NavBarLi>
                </ul>
            </NavBar>

            <SideBar handleLogout={handleLogout} sideBarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

            {sidebarOpen && <SidebarOverlay onClick={toggleSidebar} />}

            <p className="user-welcome">
                Olá, <span className="span-welcome"> {username}!</span>
            </p>
        </HeaderContainer>
    );
}

export default Header;
