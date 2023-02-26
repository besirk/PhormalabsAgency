
import './aboutus.css';
import Imagee from '../../assets/Services/image.svg';
import Service1 from '../../assets/Services/code.svg';
import Service2 from '../../assets/Services/presention-chart.svg';
import Service3 from '../../assets/Services/designtools.svg';
const AboutUs = () => {

    const services = [{
        icon: Service1,
        title: 'Web Development',
        desc: 'We will create websites using the latest trends in the industry. Our goal is to provide affordable and quality websites that exceed your expectations at a great value.'
    }, {
        icon: Service2,
        title: 'Social Media Marketing',
        desc: 'If you want to reach out of your potential customers and grow in a bigger way, we would love to help you with your social media marketing. We are the right people for you!'
    }, {
        icon: Service3,
        title: 'Logo Design',
        desc: 'Our design team can create incredible logos and branding for your business. With our years of experience, we will bring an elegant touch to your brand.'
    }]

    return (
        <div className='phormalabs__aboutus'>
            <div className='phormalabs__aboutus-content'>
                <h2>We make strategies, design & development to create valuable products.</h2>
                <p>Phormalabs helps businesses go digital with website creation, marketing, branding, e-commerce, and more. We believe a strong online presence is key to success.</p>
                <div className='phormalabs__aboutus-content_div'>
                    {services.map((service, index) => (
                        <div key={index} className={`phormalabs__aboutus-content_service`} >
                            <img src={service.icon} alt="Service Image" />
                            <div>
                                <h4>{service.title}</h4>
                                <p>{service.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <img src={Imagee} alt='About Us picture' className='phormalabs__aboutus-image' />
        </div>
    )
}

export default AboutUs
