import './index.scss'
import {Link} from "react-router";
import {FaBars, FaSearch} from "react-icons/fa";
import MiniDot from "../MiniDot/index.jsx";
import {TfiLayoutLineSolid} from "react-icons/tfi";
import {useState} from "react";
import {RxCrossCircled} from "react-icons/rx";
import BurgerMenu from "../BurgerMenu/index.jsx";
import image1 from "/src/assets/logo.png"

function Navbar() {
    const [isModalOpen, setModalOpen] = useState(false);

    const openModal = () => setModalOpen(true);
    const closeModal = () => setModalOpen(false);

    return (
        <section id={"navbar"}>
            <div className={"container"}>
                <div className={"wrapper"}>
                    <FaBars className={"menu1"}/>
                    <div className={"links"}>
                        <Link className={"link"} to={`/`}>FB</Link>
                        <MiniDot/>
                        <Link className={"link"} to={`/`}>IG</Link>
                        <MiniDot/>
                        <Link className={"link"} to={`/`}>IN</Link>
                        <MiniDot/>
                    </div>
                    <div className={"logo"}>
                        <img src={image1} alt={"Logo"}/>
                    </div>
                    <div className={"menu"} onClick={openModal}>
                        <FaSearch className={"span"}/>
                        <TfiLayoutLineSolid style={{
                            transform: "rotate(-90deg)",
                            fontSize: '18px'
                        }}/>
                        <span className={"span"}>AXTAR</span>
                    </div>
                    <BurgerMenu className={"menu2"}/>
                </div>
            </div>

            {/* Modal */}
            {isModalOpen && (
                <div className="modal">
                    <div className="modal-content">
                        <button className="close-btn" onClick={closeModal}>
                            <RxCrossCircled className={"icon"}/>
                        </button>
                        <input placeholder={"Axtar..."}/>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Navbar;
