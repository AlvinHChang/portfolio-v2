/*
 * ComponentsPage
 *
 * List all the features
 */
import React, { useState }from 'react';
import YouTube from 'react-youtube';
import { motion } from 'framer-motion';

import styles from './ProjectPage.module.css';

const BreathingListItem = (props) => {
    const { children, selected, onClick } = props;
    return <motion.div 
            className={`${styles.showCaseListItem} ${selected ? styles.selected : ''}`}
            key = {children} 
            onClick={onClick}
            whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
        >
            <div className={styles.showCaseListText}>
            {children}
            </div>
        </motion.div>
}


const projectNames = ["Elven-Platform", "portfolio-v2", "chess", "ISRCafe", "Clearity"];

export default function ProjectPage() {
    const [selectedItem, setSelectedItem] = useState(projectNames[0]);
    const displayProjectObject = projectInfoObject[selectedItem];
    const { description, projectLink, youtube } = displayProjectObject;


    return (
        <div className={styles.showCaseContainer}>
            <div className={styles.showCaseListContainer}>
                {projectNames.map((projectName) => <BreathingListItem selected={selectedItem === projectName} onClick={() => {setSelectedItem(projectName)}}>{projectName}</BreathingListItem>)}
            </div>
            <div className={styles.showCaseDisplay}>
                {
                    !!displayProjectObject && 
                (<ul>
                    <div className={styles.projectName}>
                        {selectedItem}
                    </div>
                    <p className={styles.projectDescription}>
                        { description }
                    </p>
                    { !!youtube && <YouTube className={styles.video} videoId={youtube?.videoId}/> }
                    <div className={styles.githubLink}>
                        <a href={projectLink}>
                            Link
                        </a>
                    </div>
                </ul>)
                }
            </div>

        </div>
    
    )
}
const projectInfoObject = {
    [projectNames[0]]: {
        projectLink: "https://github.com/AlvinHChang/elven-platform",
        description:
            "I'm designing a new type of platform where platform developers can create standalone apps which can take use of platform metadata. One technology I'm trying out is to create multiple iframes but only show one at a time. This will allow you to preload resources and display them when you need to."
    },
    [projectNames[1]]: {
        projectLink: "https://github.com/AlvinHChang/Portfolio",
        description: "This is the link to the Github of my current website. The website is in ReactJS. There used to be an older version but I recently reworked it."
    },
    [projectNames[2]]: {
        projectLink: "https://github.com/ahchang6/chess",
        description: 
            ` 
                Chess is one of my passions, so it is only natural that I created
                a simple chess application. Inside the repo includes the
                testPlan the various files reflecting the designs I have
                for the game
            `
    },
    [projectNames[3]]: {
        projectLink: "https://github.com/AlvinHChang/ISRCafe",
        description: 
            `
                ISRCafe was named after one of the dormitories that I still visit
                after I graduated.The idea was to integrate Google Form/ Sheet API
                with a frontend. The end result allowed us to serve refreshments
                to the community in the dormitory in real time. Them sending their
                order, us fulfilling them and allowing them to see when to pick up
                their drink.
            `
    },
    [projectNames[4]]: {
        projectLink: "https://clearity-702b7.firebaseapp.com",
        description:
            `
              Clearity was a project I created with a group of people to help
              streamline questions from students to professors and vice versa.
              In this project, I handled all of backend and helped design the
              front end. I also edited, directed and narrated the demo video.
            `,
        youtube: { videoId: 'k-dqfchI0us' }
    }
}
