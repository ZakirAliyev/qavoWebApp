import './index.scss'
import * as React from 'react';
import {Button, Drawer} from "antd";
import {FaBars, FaFacebook, FaInstagram, FaTelegram, FaTwitter, FaYoutube} from "react-icons/fa";
import logo from '/src/assets/logo.png'
import {Link, useLocation} from "react-router";

export default function BurgerMenu() {
    const [open, setOpen] = React.useState(false);
    const location = useLocation(); // useLocation hook'u ekleniyor

    React.useEffect(() => {
        setOpen(false); // URL değiştiğinde Drawer'ı kapat
    }, [location]);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        <section id={"burgerMenu"}>
            <div className={"img"}>
                <img src={logo} alt={"Logo"}/>
            </div>
            <div className={"lineWrapper"}>
                <div className={"greenLine"}></div>
            </div>
            <div className={"links"}>
                <Link to={`/`} className={"link"}>Giriş</Link>
                <Link to={`/`} className={"link"}>Tanıtım</Link>
                <Link to={`/`} className={"link"}>Portfolio</Link>
                <Link to={`/`} className={"link"}>Partnyorlar</Link>
                <Link to={`/`} className={"link"}>Əlaqə</Link>
            </div>
            <div className={"lineWrapper"}>
                <div className={"greenLine"}></div>
            </div>
            <div className={"social"}>
                <Link to={`/`} className={"icon"}><FaInstagram/></Link>
                <Link to={`/`} className={"icon"}><FaFacebook/></Link>
                <Link to={`/`} className={"icon"}><FaTwitter/></Link>
                <Link to={`/`} className={"icon"}><FaTelegram/></Link>
                <Link to={`/`} className={"icon"}><FaYoutube/></Link>
            </div>
        </section>
    );

    return (
        <div className={"burgerMenu"}>
            <Button className={"gizli"} onClick={toggleDrawer(true)}><FaBars className={"menuIcon"}/></Button>
            <Drawer headerStyle={{
                backgroundColor: 'black',
                color: 'white',
            }}
                    bodyStyle={{
                        backgroundColor: 'black',
                        padding: '20px',
                    }} open={open} onClose={toggleDrawer(false)} anchor={"right"}
                    sx={{
                        '& .MuiDrawer-paper': {
                            backgroundColor: '#111',
                            width: 260,
                            justifyContent: 'space-between',
                        },
                        '& .close-icon': {
                            color: '#fff'
                        },
                    }}>
                {DrawerList}
            </Drawer>
        </div>
    );
}