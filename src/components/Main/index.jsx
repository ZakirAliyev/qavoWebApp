import './index.scss'
import MiniDot1 from "../MiniDot1/index.jsx";
import {useState} from "react";

function Main() {

    const imageUrls = [
        "MARKETİNG", "DİJİTALLAŞMA", "BRENDİNQ", "E-TİCARƏT", "KREATİV DİZAYN", "ui/ux"
    ];

    const [brands] = useState(() => {
        const repeatedBrands = [];
        for (let i = 0; i < 100; i++) {
            repeatedBrands.push(...imageUrls);
        }
        return repeatedBrands;
    });

    return (
        <div className={"col-12"}>
            <section id={"main"}>
                <h2>Rəqəmsal <span>Dünyada</span></h2>
                <h2>Realistik Həllər</h2>
                <h2>& Daha Çoxu</h2>
                <div className="whiteBanner">
                    <div className="wrapper left">
                        {brands.map((brand, index) => (
                            <>
                                <div className="box" key={index}>{brand}</div>
                                <MiniDot1/>
                            </>

                        ))}
                    </div>
                </div>
                <div className="blackBanner">
                    <div className="wrapper left1">
                        {brands.map((brand, index) => (
                            <>
                                <div className="box" key={index}>{brand}</div>
                                <MiniDot1/>
                            </>

                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Main;