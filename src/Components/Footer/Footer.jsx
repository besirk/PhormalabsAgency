import './footer.css';
import Logo from "../../assets/viteWhite.svg";
import { motion } from 'framer-motion';
import fbb from '../../assets/social/Vector.svg'
import inst from '../../assets/social/insta.svg'
import lin from '../../assets/social/linkedin.svg'
import loc from '../../assets/social/loc.svg'


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
                <div className="footer__content">
                    <div className='logoFooter'>
                        <img src={Logo} alt="Phormalabs Logo" />
                        <span>Phormalabs</span>
                    </div>
                    <p>Turn your crazy ideas into the best business model</p>
                    <div className="social_media">
                        <ul>
                            <li><a href="https://www.facebook.com/phormalabs"><img src={fbb} alt="Facebook icon" /></a></li>
                            <li><a href="https://www.instagram.com/phormalabs"><img src={inst} alt="Instagram icon" /></a></li>
                            <li><a href="https://www.linkedin.com/company/phormalabs/"><img src={lin} alt="Linkedin icon" /></a></li>
                            <li><a href="https://www.facebook.com/phormalabs"><img src={loc} alt="Maps icon" /></a></li>
                        </ul>
                    </div>
                </div>
                <div className="phormalabs__footer-links">
                    <h3>Links</h3>
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
                <div className="phormalabs__footer-links aaa">
                    <h3>Services</h3>
                    <ul>
                        <li>Web Development</li>
                        <li>Logo Design</li>
                        <li>Social Media Management</li>
                        <li>Business Branding</li>
                        <li>Social Media Marketing</li>
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
