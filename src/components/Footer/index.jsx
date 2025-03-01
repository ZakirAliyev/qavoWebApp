import './index.scss'
import image1 from "/src/assets/logo.png"
import {FaArrowRight} from "react-icons/fa";

function Footer() {
    return (
        <section id={"footer"}>
            <div className={"container1"}>
                <div className={"row"}>
                    <div className={"box col-6 col-md-6 col-sm-12 col-xs-12"}>
                        <img src={image1} alt={"Logo"}/>
                        <button>Əlaqə saxla</button>
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
                                    <a href="#">FACEBOOK</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="#banner">LINKEDIN</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="#portfolio">INSTAGRAM</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="#services">TIKTOK</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                                <p>
                                    <a href="#contact">YOUTUBE</a>
                                    <FaArrowRight className={"icon"}/>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={"span"}>© 2025 Qavo Agency MMC. Bütün hüquqlar qorunur.</div>
            </div>
        </section>
    );
}

export default Footer;