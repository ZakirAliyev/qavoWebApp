import { useEffect, useState } from 'react';
import './index.scss';

function LeftBar() {
    const [rotation, setRotation] = useState(0);

    useEffect(() => {
        let lastScrollY = window.scrollY;

        const handleScroll = () => {
            const currentScrollY = window.scrollY;
            const scrollDirection = currentScrollY > lastScrollY ? 1 : -1;
            setRotation(prevRotation => prevRotation + scrollDirection * 5);
            lastScrollY = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="col-1">
            <section id="leftBar">
                <div className="wrapper">
                    <div className="logo" style={{ transform: `rotate(${rotation}deg)`, transformOrigin: 'center center' }}>
                        <img src="/src/assets/circle.png" alt="Logo"/>
                    </div>
                    <nav className="menu">
                        <a href="#">GİRİŞ</a>
                        <a href="#">TANITIM</a>
                        <a href="#">RƏYLƏR</a>
                        <a href="#">PORTFOLIO</a>
                        <a href="#">ƏLAQƏ</a>
                    </nav>
                </div>
            </section>
        </div>
    );
}

export default LeftBar;
