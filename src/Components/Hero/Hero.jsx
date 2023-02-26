import './hero.css';
import HeroImg from '../../assets/heroPicture.webp'
import Suuber from '../../assets/partners/suuber_logo.png';
import Wpengine from '../../assets/partners/wpengine.png';
import Demogency from '../../assets/partners/demogency.webp';

const Hero = () => {

    return (
        <>
            <div className='phormalabs__hero section-padding'>
                <div className='phormalabs__hero-content '>
                    <h1>Digitalize your Business</h1>
                    <p>Ready to take your brand on a journey of digital success? Let's create a unique digital strategy that sets you apart from the competition and delivers measurable results.</p>
                    <a href="#contact" className='button'>Get Started</a>
                </div>

                <img src={HeroImg} alt="Hero image" className='phormalabs__hero-image' />

            </div>
            <div className='phormalabs__proof'>
                <h4>Why Would you Trust us?</h4>
                <p>Here's some of our partners</p>
                <div className='phormalabs__proof-partners'>
                    <img src={Suuber} alt="suuber partner" />
                    <img src={Wpengine} alt="Wpengine partner" />
                    <img src={Demogency} alt="Demogency partner" />

                </div>
            </div>
        </>
    )
}

export default Hero
