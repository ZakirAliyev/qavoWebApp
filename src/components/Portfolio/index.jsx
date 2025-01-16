import './index.scss';
import MiniDot from "../MiniDot/index.jsx";

function Portfolio() {
    return (
        <div className="col-12">
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div className="line"></div>

                <img src={"/src/assets/p.png"} alt="P" className={"png"}/>

                <div className={"boxWrapper"}>
                    <div className={"row"}>
                        <div className={"col-3-5 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <img src={"/src/assets/sekil.jpeg"} alt={"Image"}/>
                                <h3>Macis Consulting</h3>
                                <div className={"dotWrapper"}>
                                    <MiniDot/>
                                    <h4>Social media</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3-5 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <img src={"/src/assets/sekil.jpeg"} alt={"Image"}/>
                                <h3>Sweji Cake House</h3>
                                <div className={"dotWrapper"}>
                                    <MiniDot/>
                                    <h4>Social media</h4>
                                </div>
                            </div>
                        </div>
                        <div className={"col-3-5 col-md-4 col-sm-12 col-xs-12"}>
                            <div className={"box"}>
                                <img src={"/src/assets/sekil.jpeg"} alt={"Image"}/>
                                <h3>Lucky Office Support</h3>
                                <div className={"dotWrapper"}>
                                    <MiniDot/>
                                    <h4>Social media</h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Portfolio;