import styles from './SkillsStyles.module.css'
import checkMarkIcon from '../../../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1>Skills</h1>
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="HTML" />
            <SkillList src={checkMarkIcon} skill="CSS" />
            <SkillList src={checkMarkIcon} skill="JavaScript" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="Node" />
            <SkillList src={checkMarkIcon} skill="Npm" />
            <SkillList src={checkMarkIcon} skill="Terminal" />
        </div>
        <hr />
        <div className={styles.skillList}>
            <SkillList src={checkMarkIcon} skill="React" />
            <SkillList src={checkMarkIcon} skill="Git" />
        </div>
    </section>
  )
}

export default Skills

// html css javascript
// node npm terminal
// react
// git