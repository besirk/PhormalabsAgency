import './projects.css'
import Imikop from '../../assets/projects/imikop.jpg';
import Galaxy from '../../assets/projects/galaxy.jpg';
import Suuber from '../../assets/projects/suuber.jpg';
import Mommy from '../../assets/projects/mommy.jpg';
import Zenit from '../../assets/projects/30.jpg';
import Hte from '../../assets/projects/hteMk.jpg'
import Sigurnost from '../../assets/projects/sigurnost.jpg'

const Projects = () => {
    const projects = [{
        projectName: "IMI-KOP Website",
        projectDesc: "Built a contemporary website for a construction company that reflects their quality and improves their online presence with an outstanding user experience.",
        projectAttr: "Website",
        projectLink: "https://imikop.com.mk",
        projectImg: Imikop
    }, {
        projectName: "Galaxy Restaurant Website",
        projectDesc: "Unleashed 500% growth for a Skopje events restaurant with a sleek, modern website and unbeatable user experience.",
        projectAttr: "Website",
        projectLink: "https://galaxy.com.mk",
        projectImg: Galaxy
    },
    {
        projectName: "High Tech Energy Website",
        projectDesc: "Created a modern and sleek website for a solar energy company located in Skopje, North Macedonia",
        projectAttr: "Wordpress",
        projectLink: "https://hte.mk",
        projectImg: Hte
    },   {
        projectName: "Avtoskola Sigurnost Website",
        projectDesc: "Created a modern and sleek website for a driving school located in Skopje, North Macedonia",
        projectAttr: "Website",
        projectLink: "https://avtoskola-sigurnost.mk",
        projectImg: Sigurnost
    },{
        projectName: "Suuber.ch Landing Pages",
        projectDesc: "We have created two innovative and user-friendly landing pages: Jobs City and Cleaners City. Both landing pages have been designed with the latest UI/UX trends to ensure a seamless and enjoyable experience for the users.",
        projectAttr: "Landing Pages",
        projectLink: "https://suuber.ch/haushaltshilfe-zuerich",
        projectImg: Suuber
    }, {
        projectName: "MommyToBe Website",
        projectDesc: "Designed and created a website for a construction company in Skopje, North Macedonia",
        projectAttr: "Wordpress",
        projectLink: "https://mommytobe.se",
        projectImg: Mommy
    }, {
        projectName: "Zenit.mk Social Media",
        projectDesc: "Created their Logo, Facebook Cover and currently designing facebook posts for their page and launching their ad campaigns. The result of the new rebrand scaled up to 500% more clients and 850% more sales.",
        projectAttr: "Social Media",
        projectLink: "https://facebook.com/zenit.mk",
        projectImg: Zenit
    },
    {
        projectName: "Sigurnost Avtoskola Logo",
        projectDesc: "Created their Logo, Facebook Cover and currently designing facebook posts for their page and launching their ad campaigns.",
        projectAttr: "Social Media",
        projectLink: "https://www.facebook.com/avtoskolasigurnost",
        projectImg: Sigurnost
    }]
    return (
        <div className='phormalabs__projects' id='projects'>
            <h2>Don't just take our word for it.</h2>
            <h6>Here, you'll find a showcase of the incredible projects we've completed for our clients. </h6>

            <div className='phormalabs__projects-project'>
                {projects.map((project, index) =>
                (
                    <div className="projectSingle" key={index}>
                        <img src={project.projectImg} alt={`Project ${project.projectName}`} />
                        <h4>{project.projectName}</h4>
                        <p>{project.projectDesc}</p>
                        <div className="projectSingle_last">
                            <p className='SingleAttr'>{project.projectAttr}</p>
                            <a href={project.projectLink}>Learn More</a>
                        </div>
                    </div>
                )
                )}
            </div>

        </div>
    )
}

export default Projects
