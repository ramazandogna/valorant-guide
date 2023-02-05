import { useContext, useEffect } from 'react';

import AppLevelContext from '../../contex/AppLevelContext';
import styles from '../../styles/card.module.css';

function Card() {
   const { fetchAgents, agents } = useContext(AppLevelContext);
   console.log(agents);

   useEffect(() => {
      fetchAgents();
   }, []);

   return (
      <div className={styles.container}>
         <div className={styles.card}>
            <h2 className={styles.agentTitle}>Agent Name</h2>
            <p className={styles.agentDesc}>
               "Turkish bounty hunter Fade unleashes the power of raw nightmare
               to seize enemy secrets. Attuned with terror itself, she hunts
               down targets and reveals their deepest fears - before crushing
               them in the dark."
            </p>
            <p className={styles.agentRole}>Agent Role</p>
            <div className={styles.agentSkills}>
               <div className={styles.agentSkill}>Skill1</div>
               <div className={styles.agentSkill}>Skill2</div>
               <div className={styles.agentSkill}>Skill3</div>
            </div>
         </div>
         <div className={styles.card}>
            <h2 className={styles.agentTitle}>Agent Name</h2>
            <p className={styles.agentDesc}>
               "Turkish bounty hunter Fade unleashes the power of raw nightmare
               to seize enemy secrets. Attuned with terror itself, she hunts
               down targets and reveals their deepest fears - before crushing
               them in the dark."
            </p>
            <p className={styles.agentRole}>Agent Role</p>
            <div className={styles.agentSkills}>
               <div className={styles.agentSkill}>Skill1</div>
               <div className={styles.agentSkill}>Skill2</div>
               <div className={styles.agentSkill}>Skill3</div>
            </div>
         </div>
         <div className={styles.card}>
            <h2 className={styles.agentTitle}>Agent Name</h2>
            <p className={styles.agentDesc}>
               "Turkish bounty hunter Fade unleashes the power of raw nightmare
               to seize enemy secrets. Attuned with terror itself, she hunts
               down targets and reveals their deepest fears - before crushing
               them in the dark."
            </p>
            <p className={styles.agentRole}>Agent Role</p>
            <div className={styles.agentSkills}>
               <div className={styles.agentSkill}>Skill1</div>
               <div className={styles.agentSkill}>Skill2</div>
               <div className={styles.agentSkill}>Skill3</div>
            </div>
         </div>
         <div className={styles.card}>
            <h2 className={styles.agentTitle}>Agent Name</h2>
            <p className={styles.agentDesc}>
               "Turkish bounty hunter Fade unleashes the power of raw nightmare
               to seize enemy secrets. Attuned with terror itself, she hunts
               down targets and reveals their deepest fears - before crushing
               them in the dark."
            </p>
            <p className={styles.agentRole}>Agent Role</p>
            <div className={styles.agentSkills}>
               <div className={styles.agentSkill}>Skill1</div>
               <div className={styles.agentSkill}>Skill2</div>
               <div className={styles.agentSkill}>Skill3</div>
            </div>
         </div>
      </div>
   );
}

export default Card;
