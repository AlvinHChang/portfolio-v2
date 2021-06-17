/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';

import styles from './AboutPage.module.css';
import Pdf from './resume.pdf';

export default function AboutPage() {
    return <div>
        <title>About Me Page</title>
        <meta name="About Me" content="Short bio about Alvin" />
        <h1>
            About Me
        </h1>

        <div className={styles.description}>
            Welcome! I am Alvin, a Software Engineer currently in Chicago, IL. I
            enjoy developing and engineering new software and web apps. While I
            have experience in UI/UX design, my focus is on the Software
            Engineering and the best way to develop new technology/components. My
            main experiences focuses in Full-Stack development and Software
            Architecture.
        </div>
        <div className={styles.description}>
            Links to more information about me
            <div className={styles.githubLink}>
                <ul>
                    <a href="https://github.com/ahchang6">School Github</a>
                </ul>
                <ul>
                    <a href="https://github.com/AlvinHChang">Personal Github</a>
                </ul>
                <ul>
                    <a href={Pdf} target="_blank">
                        Resume
                    </a>
                </ul>
            </div>
        </div>
    </div>
}
