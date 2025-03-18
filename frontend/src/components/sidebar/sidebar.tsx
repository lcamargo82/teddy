import { RiHome5Fill } from "react-icons/ri";
import { SidebarContainer, SideBarLi } from "./style";
import { IoPerson } from "react-icons/io5";
import { PiSquaresFourFill } from "react-icons/pi";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link, useNavigate } from "react-router";
import { HiLogout } from "react-icons/hi";

function SideBar({ sideBarOpen = false, handleLogout, setSidebarOpen }: { sideBarOpen: boolean, handleLogout: () => void, setSidebarOpen: (sideBarOpen: boolean) => void }) {
    const selectedLocation = location.pathname;
    const navigate = useNavigate()

    const logoutBySidebar = () => {
        setSidebarOpen(!sideBarOpen);
        handleLogout()
        navigate("/login")
    };

    return (
        <SidebarContainer isOpen={sideBarOpen}>
            {
                sideBarOpen &&
                <div onClick={() => setSidebarOpen(!sideBarOpen)} className="rounded-close-sidebar">
                    <div className="black-circle">
                        <div>
                            <FaArrowLeftLong />
                        </div>
                    </div>
                </div>
            }
            <div className="image-container">
                <img src="images/logo.png" alt="logo teddy" />
            </div>
            <div className="ul-container">
                <ul className="ul-nav">
                    <SideBarLi>
                        <RiHome5Fill color={selectedLocation === "/" ? "#EC6724" : "#333"} />
                        <Link to="/" className={selectedLocation === "/" ? "active" : "disable"}>
                            Clientes
                        </Link>
                    </SideBarLi>
                    <SideBarLi>
                        <IoPerson color={selectedLocation === "/selected-clients" ? "#EC6724" : "#333"} />
                        <Link to="/selected-clients" className={selectedLocation === "/selected-clients" ? "active" : "disable"}>
                            Clientes selecionados
                        </Link>
                    </SideBarLi>
                    <SideBarLi>
                        <PiSquaresFourFill color={selectedLocation === "/products" ? "#EC6724" : "#333"} />
                        <span className={selectedLocation === "/products" ? "active" : "disable not-to-click"}>
                            Produtos
                        </span>
                    </SideBarLi>
                    <SideBarLi className="get-out" onClick={() => logoutBySidebar()}>
                        <HiLogout />
                        <Link to="/login" >
                            Sair
                        </Link>
                    </ SideBarLi>
                </ul>
            </div>
        </SidebarContainer>
    )
}

export default SideBar;