import styles from './HeroStyles.module.css';
import heroImage from '../../assets/jonah-mii.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.hero} src={heroImage} alt="Profile picture of Jonah Eagleson" />
                <img className={styles.colorMode} src={themeIcon} alt="Color mode icon" onClick={toggleTheme}/>
                </div>
                <div className={styles.info}>
                    <h1>Jonah<br />Eagleson</h1>
                    <h2>Aspiring Developer and Analyst</h2>
                    <span>
                        <a href="https://www.linkedin.com/in/jonah-eagleson/" target='_blank'>
                            <img src={linkedinIcon} alt="Linkedin icon" />
                        </a>
                        <a href="https://github.com/jonah-eagleson" target='_blank'>
                            <img src={githubIcon} alt="Github icon" />
                        </a>
                    </span>
                    <p className={styles.description}>
                        3rd Year CS student with a passion for development and data analysis
                    </p>
                    <a href={CV} download>
                        <button className='hover'>Resume</button>
                    </a>
                </div>
        </section>
  )
}

export default Hero
