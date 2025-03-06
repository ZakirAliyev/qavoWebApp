import { useState } from "react";
import "./index.scss";

function Sponsor() {
    const imageUrls = [
        "asd", "123"
    ];

    const [brands] = useState(() => {
        const repeatedBrands = [];
        for (let i = 0; i < 100; i++) {
            repeatedBrands.push(...imageUrls);
        }
        return repeatedBrands;
    });

    return (
        <section id="logoScroll" data-aos="fade-up">
            <div className="wrapper left">
                {brands.map((brand, index) => (
                    <div className="box" key={index}>{brand}</div>
                ))}
            </div>
        </section>
    );
}

export default Sponsor;
