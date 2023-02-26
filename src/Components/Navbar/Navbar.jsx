import "./Navbar.css";
import Logo from "../../assets/phormalabsLogoSVG.svg";
import { motion } from "framer-motion";
import { useState } from "react";
import Hamburger from 'hamburger-react';
const Navbar = () => {

    const [showMobile, setShowMobile] = useState(false);
    const hamburgerClick = () => {
        setShowMobile(!showMobile);
    }

    const links = [
        { name: "Home", link: "#home" },
        { name: "About Us", link: "#aboutus" },
        { name: "Services", link: "#services" },
        { name: "Projects", link: "#projects" },
        { name: "Contact Us", link: "#contact" },
    ];

    const container = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                when: "beforeChildren",
            },
        },
    };
    const item = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    };

    const mobileNav = {
        hidden: { opacity: 0, scaleY: 0 },
        show: {
            opacity: 1, scaleY: 1, transition: {
                duration: 0.25,
                staggerChildren: 0.15
            }
        }
    }
    const mobileNavItem = {
        hidden: { opacity: 0, x: "-100%" },
        show: { opacity: 1, x: 0 }
    }

    return (
        <motion.div className="phormalabs__navbar" variants={container} initial="hidden" animate="show">
            <div className="phormalabs__navbar-logoDiv"  >
                <motion.img
                    variants={item}
                    src={Logo}
                    alt="Phormalabs Logo"
                    className="phormalabs__navbar-logo"
                />
                <motion.span variants={item} className="phormalabs__navbar-logoText">Phormalabs</motion.span>
            </div>
            <motion.span className='phormalabs__hamburger-mobileNav' variants={item}><Hamburger onToggle={hamburgerClick} /></motion.span>

            <div className="phormalabs__navbar-links">
                <ul>
                    {links.map((link, index) => (
                        <motion.li key={index} variants={item}>
                            <a href={link.link} className={`linkText linkText${index + 1}`}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </div>
            <motion.div variants={mobileNav} initial="hidden" animate={showMobile ? "show" : "hidden"} className="phormalabs__navbar-links_mobile">
                <ul>
                    {links.map((link, index) => (
                        <motion.li key={index} variants={mobileNavItem}>
                            <a href={link.link} className={`linkText linkText${index + 1}`}>
                                {link.name}
                            </a>
                        </motion.li>
                    ))}
                </ul>
            </motion.div>
        </motion.div>
    );
};

export default Navbar;
