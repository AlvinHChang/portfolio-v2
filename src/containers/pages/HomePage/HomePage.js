import React from 'react';
import styles from './HomePage.module.css';

export default function Homepage() {
    return (
     <article>
          <title>Alvin Chang</title>
          <meta
            name="Alvin Chang's Portfolio"
            content="Portfolio that contains various React Components"
          />
        <div>
          <div className={styles.centered}>
            <h2>
              Hello! I'm Alvin Chang, a Software Engineer specializing in Full-Stack Development.
            </h2>
            <p>
              Click around to find out about me. Or Click on components to see a component in action.
            </p>
          </div>
        </div>
      </article>
    )
}
 
     