import styles from './ProjectsStyles.module.css';
import penguinLogo from '../../assets/penguin-7.png'
import adblockLogo from '../../assets/adblock-logo.png'
import blogLogo from '../../assets/django-logo.png'
import ProjectCard from '../../common/ProjectCard';

function Projects() {
    return (
        <section id='projects' className={styles.container}>
            <h1 className='sectionTitle'>Projects</h1>
            <div className={styles.projectsContainer}>
                <ProjectCard src={penguinLogo} link='https://github.com/jonah-eagleson/penguinSpeciesPredictor'
                    h3='Penguin Species Predictor'
                    p="Machine Learning Streamlit App"
                />
                <ProjectCard src={adblockLogo} link='https://github.com/jonah-eagleson/Chrome-AdBlocker'
                    h3='Chrome AdBlocker'
                    p="JavaScript AdBlocker For Chrome"
                />
                <ProjectCard src={blogLogo} link='https://github.com/jonah-eagleson/blog-app'
                    h3='Blog Web App'
                    p="Blog Web App Made With Jango"
                />
            </div>
        </section>
    );
}

export default Projects
