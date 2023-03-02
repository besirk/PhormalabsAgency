import './footer.css';
import Logo from "../../assets/phormalabsLogoSVG.svg";
import { motion } from 'framer-motion';


const Footer = () => {
    const links = [
        { name: "Home", link: "#home" },
        { name: "About Us", link: "#aboutus" },
        { name: "Services", link: "#services" },
        { name: "Projects", link: "#projects" },
        { name: "Contact Us", link: "#contact" },
    ];
    const item = {
        hidden: { opacity: 0, x: -100 },
        show: { opacity: 1, x: 0 },
    };

    return (
        <>
            <div className='phormalabs__footer' id='footer'>
                <div className='logoFooter'>
                    <img src={Logo} alt="Phormalabs Logo" />
                    <span>Phormalabs</span>
                </div>
                <div className="phormalabs__footer-links">
                    <ul>
                        {links.map((link, index) => (
                            <motion.li key={index} variants={item}>
                                <a href={link.link} className={`linkText FooterLink${index + 1}`}>
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className='phormalabs__copyright'>
                <p>© 2023 Phormalabs™. All Rights Reserved.</p>
            </div>
        </>
    )
}

export default Footer
