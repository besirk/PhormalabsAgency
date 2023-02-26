import './hero.css';
import HeroImg from '../../assets/heroPicture.webp'

const Hero = () => {
    return (
        <div className='phormalabs__hero section-padding'>
            <div className='phormalabs__hero-content '>
                <h1>Digitalize your Business</h1>
                <p>Ready to take your brand on a journey of digital success? Let's create a unique digital strategy that sets you apart from the competition and delivers measurable results.</p>
                <a href="#contact" className='button'>Get Started</a>
            </div>

            <img src={HeroImg} alt="Hero image" className='phormalabs__hero-image' />

        </div>
    )
}

export default Hero
