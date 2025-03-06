import './index.scss';

import img1 from '/src/assets/logos/1.png';
import img2 from '/src/assets/logos/2.png';
import img3 from '/src/assets/logos/3.png';
import img4 from '/src/assets/logos/4.png';
import img5 from '/src/assets/logos/5.png';
import img6 from '/src/assets/logos/6.png';
import img7 from '/src/assets/logos/7.png';
import img11 from '/src/assets/logos/11.png';
import img12 from '/src/assets/logos/12.png';
import img13 from '/src/assets/logos/13.png';
import img14 from '/src/assets/logos/14.png';
import img15 from '/src/assets/logos/15.png';
import img16 from '/src/assets/logos/16.png';
import img17 from '/src/assets/logos/17.png';
import img18 from '/src/assets/logos/18.png';
import img19 from '/src/assets/logos/19.png';
import img22 from '/src/assets/logos/22.png';
import img23 from '/src/assets/logos/23.png';
import img24 from '/src/assets/logos/24.png';
import img25 from '/src/assets/logos/25.png';
import img28 from '/src/assets/logos/28.png';
import img29 from '/src/assets/logos/29.png';
import img30 from '/src/assets/logos/30.png';


const imageUrls = [
    img1, img2, img3, img4, img5, img6, img7,
    img11, img12, img13, img14, img15, img16, img17,
    img18, img19, img22, img23, img24, img25,
    img28, img29, img30,
];

function Services() {
    return (
        <div className="col-12">
            <section id="services">
                <h2>PARTNYORLARIMIZ</h2>
                <div className="line"></div>
                <div className="row">
                    {imageUrls.map((url, index) => (
                        <div className="col-2 col-md-2 col-sm-6 col-xs-6" key={index}>
                            <div className="box">
                                <img src={url} alt={`Image ${index + 1}`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;
