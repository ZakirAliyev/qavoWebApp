import './index.scss'
import image1 from "/src/assets/logo.png"
import {FaArrowRight} from "react-icons/fa";
import {useNavigate} from "react-router";

function Footer() {

    const navigate = useNavigate()

    return (
        <section id={"footer"}>
            <div className={"container1"}>
                <div className={"row"}>
                    <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <img src={image1} alt={"Logo"}/>
                        <button onClick={() => {
                            navigate('/contact')
                        }}>Əlaqə saxla
                        </button>
                    </div>
                    <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <div className={"row"}>
                            <div className={"col-6"}>
                                <p>
                                    <a href="#">GİRİŞ</a>
                                </p>
                                <p>
                                    <a href="#banner">TANITIM</a>
                                </p>
                                <p>
                                    <a href="#portfolio">PORTFOLIO</a>
                                </p>
                                <p>
                                    <a href="#services">PARTNYORLAR</a>
                                </p>
                                <p>
                                    <a href="#contact">ƏLAQƏ</a>
                                </p>
                            </div>
                            <div className={"col-6 col-md-6 col-sm-12 col-xs-12"}>
                                <p>
                                    <a href="https://www.facebook.com/share/16DrUzzN8c/">FACEBOOK</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="https://www.instagram.com/qavoagency?igsh=aGsxcTF3eTAyYWdq">LINKEDIN</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="https://www.instagram.com/qavoagency?igsh=aGsxcTF3eTAyYWdq">INSTAGRAM</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="https://www.tiktok.com/@qavo.agency?_t=ZS-8uQfdmCCaO8&_r=1">TIKTOK</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"span"}>© 2025 Created by : <span className={"span1"} onClick={()=> {
                    navigate('https://qavo.codes/')
                }}>qavo.codes</span></div>
            </div>
        </section>
    );
}

export default Footer;