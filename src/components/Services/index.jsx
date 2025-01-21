import './index.scss';

const imageUrls = [
    '1.png', '2.png', '3.png', '4.png', '5.png',
    '6.png', '7.png', '8.png', '9.png', '10.png', '11.png',
    '12.png', '13.png', '14.png', '15.png', '16.png', '17.png'
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
                                <img src={"/src/assets/" + url} alt={`Image ${index + 1}`}/>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
}

export default Services;