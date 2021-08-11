/*
 * ComponentsPage
 *
 * List all the features
 */
import React from 'react';

import styles from './AboutPage.module.css';
import Pdf from './resume.pdf';

export default function AboutPage() {
    return <div className={styles.aboutPage}>
        <title>About Me Page</title>
        <meta name="About Me" content="Short bio about Alvin" />
        <h1>
            Alvin Chang
        </h1>

        <div className={styles.description}>
            <p>
            My passion as a Software Engineer is to learn new technology and seeing where new technology take us.
            I enjoy developing and engineering new software and web apps. I
            have experience in UI/UX design, but my focus is on the Software
            Engineering and the best way to develop new technology/components using the latest technology. My
            main experiences focuses in Full-Stack development.
            </p>
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
                    <a href={Pdf} rel="noreferrer" target="_blank">
                        Resume
                    </a>
                </ul>
            </div>
        </div>
    </div>
}
