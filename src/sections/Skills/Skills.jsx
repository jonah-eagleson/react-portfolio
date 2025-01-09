import styles from './SkillsStyles.module.css'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import checkMarkLight from '../../assets/checkmark-light.svg'
import SkillList from '../../common/SkillList.jsx'
import { useTheme } from '../../common/ThemeContext';

function Skills() {
  const { theme, toggleTheme } = useTheme();
  
  const checkMarkIcon = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id='skills' className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <hr />
        <h2>Languages</h2>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML"/>
            <SkillList src={checkMarkIcon} skill="CSS"/>
            <SkillList src={checkMarkIcon} skill="JavaScript"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
            <SkillList src={checkMarkIcon} skill="Python"/>
            <SkillList src={checkMarkIcon} skill="Java"/>
            <SkillList src={checkMarkIcon} skill="C/C++"/>
            <SkillList src={checkMarkIcon} skill="SQL"/>
            <SkillList src={checkMarkIcon} skill="R"/>
        </div>
        <hr />
        <h2>Frameworks</h2>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React"/>
            <SkillList src={checkMarkIcon} skill="Tailwind CSS"/>
            <SkillList src={checkMarkIcon} skill="Django"/>
            <SkillList src={checkMarkIcon} skill="Bootstrap"/>
            <SkillList src={checkMarkIcon} skill="Node"/>
        </div>
        <hr />
        <h2>Technologies</h2>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Docker"/>
            <SkillList src={checkMarkIcon} skill="Microsoft Office 365"/>
            <SkillList src={checkMarkIcon} skill="Power BI"/>
            <SkillList src={checkMarkIcon} skill="Git"/>
            <SkillList src={checkMarkIcon} skill="Linux (Ubuntu)"/>
        </div>
        <hr />
    </section>
  );
}

export default Skills
