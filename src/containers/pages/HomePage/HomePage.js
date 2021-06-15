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
              Welcome to Alvin Chang's Portfolio"
            </h2>
            <p>
              Using React Boilerplate listed below, any extra
              features/components is created solely by me to demonstrate and
              practice my abilities in using React/Programming. This website
              will be periodically to reflect my current work, experience, and
              inspiration!
            </p>
            <p>
              I understand the design is not the most aesthetically pleasing and
              using a bootstrap or pre-made theme might make look better, but
              this website is to primarily demonstrate my ability as a Software
              Engineer and not UI/UX designer. That being said, all
              feedback/suggestions are welcome!
            </p>
          </div>
        </div>
      </article>
    )
}
 
     