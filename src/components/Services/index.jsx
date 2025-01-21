import './index.scss';

// Resimleri import edin
import img1 from '/src/assets/1.png';
import img2 from '/src/assets/2.png';
import img3 from '/src/assets/3.png';
import img4 from '/src/assets/4.png';
import img5 from '/src/assets/5.png';
import img6 from '/src/assets/6.png';
import img7 from '/src/assets/7.png';
import img8 from '/src/assets/8.png';
import img9 from '/src/assets/9.png';
import img10 from '/src/assets/10.png';
import img11 from '/src/assets/11.png';
import img12 from '/src/assets/12.png';
import img13 from '/src/assets/13.png';
import img14 from '/src/assets/14.png';
import img15 from '/src/assets/15.png';
import img16 from '/src/assets/16.png';
import img17 from '/src/assets/17.png';

// Resimleri bir diziye ekleyin
const imageUrls = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9,
    img10, img11, img12, img13, img14, img15, img16, img17
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
                                <img src={url} alt={`Image ${index + 1}`} />
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;
