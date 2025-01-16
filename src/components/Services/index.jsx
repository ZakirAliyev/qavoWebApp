import './index.scss';

const imageUrls = [
    'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png',
    'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png',
    'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png',
    'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png',
    'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png', 'expo.png',
    'expo.png', 'expo.png', 'expo.png', 'expo.png',
];

function Services() {
    const getRowCounts = () => {
        return [5, 6, 5, 6, 5, 6];
    };

    const rowCounts = getRowCounts();

    return (
        <div className="col-12">
            <section id="services">
                <h2>PARTNYORLARIMIZ</h2>
                <div className="line"></div>
                {rowCounts.map((count, rowIndex) => (
                    <div className="row" key={rowIndex}>
                        {imageUrls.slice(rowIndex * count, rowIndex * count + count).map((url, index) => (
                            <div className="col-2 col-md-2 col-sm-6 col-xs-6" key={index}>
                                <div className="box">
                                    <img src={"/src/assets/" + url} alt={`Image ${index + 1}`}/>
                                </div>
                            </div>
                        ))}
                    </div>
                ))}
            </section>
        </div>
    );
}

export default Services;