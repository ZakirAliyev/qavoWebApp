import './index.scss'
import {Link} from "react-router";
import {FaBars, FaSearch} from "react-icons/fa";
import MiniDot from "../MiniDot/index.jsx";
import {TfiLayoutLineSolid} from "react-icons/tfi";
import {HiBars3BottomLeft} from "react-icons/hi2";

function Navbar() {
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
                        <img src={"/src/assets/logo.png"} alt={"Logo"}/>
                    </div>
                    <div className={"menu"}>
                        <FaSearch className={"span"}/>
                        <TfiLayoutLineSolid style={{
                            transform: "rotate(-90deg)",
                            fontSize: '18px'
                        }}/>
                        <div className={"wrapper"} style={{
                            gap: '10px'
                        }}>
                            <span className={"span"}>MENYU</span>
                            <HiBars3BottomLeft className={"span"}/>
                        </div>
                    </div>
                    <FaBars className={"menu2"}/>
                </div>
            </div>
        </section>
    );
}

export default Navbar;