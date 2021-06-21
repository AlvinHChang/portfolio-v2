/*
 * ComponentsPage
 *
 * List all the features
 */
import React, { useEffect }from 'react';
import YouTube from 'react-youtube';
import { motion, useAnimation } from 'framer-motion';

import styles from './ProjectPage.module.css';

const breathingListItem = (text) => {
    return <motion.div key = {text} className={styles.showCaseListItem}
            whileHover={{
                scale: 1.05,
                transition: { duration: .5, repeat: Infinity, repeatType: "mirror", repeatDelay: 0 },
            }}
        >
            <div className={styles.showCaseListText}>

            {text}
            </div>
        </motion.div>
}

const createShowCaseDisplay = [];
const projects = ["elven-platform", "portfolio-v2", "chess"];

export default function ProjectPage() {
    const controls = useAnimation()


    return (
        <div className={styles.showCaseContainer}>
            <div className={styles.showCaseListContainer}>
                {projects.map((projectName) => breathingListItem(projectName))}
            </div>
            <div className={styles.showCaseDisplay}>
                text
            </div>

        </div>
    
    )
}
// export default function ProjectPage() {
//     return (
//       <div>
//           <title>Project Page</title>
//           <meta name="Project Page" content="Current Projects" />
//         <h1>
//             My Projects
//         </h1>

//         <div className={styles.description}>
//           Current Projects:
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://github.com/AlvinHChang/elven-platform">
//                   Elven-Platform
//                 </a>
//               </ul>
//             </div>
//             <p>
//               {
//                 "I'm designing a new type of platform where platform developers can create standalone apps which can take use of platform metadata. One technology I'm trying out is to create multiple iframes but only show one at a time. This will allow you to preload resources and display them when you need to."
//               }
//             </p>
//           </ul>
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://github.com/AlvinHChang/Portfolio">Portfolio</a>
//               </ul>
//             </div>
//             <p>
//               {
//                 'This is the link to the Github of my current website. I made a quick version of it to demonstrate to employers, but I plan on expanding and improving it as time goes on. The website is in ReactJS. '
//               }
//             </p>
//           </ul>
//         </div>
//         <div className={styles.description}>
//           Past Projects:
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://github.com/AlvinHChang/ISRCafe">ISRCafe</a>
//               </ul>
//             </div>
//             <p>
//               ISRCafe was named after one of the dormitories that I still visit
//               after I graduated. The idea was to integrate Google Form/Sheet API
//               with a frontend. The end result allowed us to serve refreshments
//               to the community in the dormitory in real time. Them sending their
//               order, us fulfilling them and allowing them to see when to pick up
//               their drink
//             </p>
//           </ul>
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://github.com/ahchang6/chess">Chess</a>
//               </ul>
//             </div>
//             <p>
//               Chess is one of my passions, so it is only natural that I created
//               a a simple chess application. Inside the repo includes the
//               testPlan testPlan the various files reflecting the designs I have
//               for the game
//             </p>
//           </ul>
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://clearity-702b7.firebaseapp.com/">Clearity</a>
//               </ul>
//             </div>
//             <YouTube videoId="k-dqfchI0us" />
//             <p>
//               Clearity was a project I created with a group of people to help
//               streamline questions from students to professors and vice versa.
//               In this project, I handled all of backend and helped design the
//               front end. I also edited, directed and narrated the demo video.
//             </p>
//           </ul>
//         </div>
//         <div className={styles.description}>
//           Scrapped Projects:
//           <ul>
//             <div className={styles.githubLink}>
//               <ul>
//                 <a href="https://github.com/AlvinHChang/PrettyHandwriting">
//                   PrettyHandwriting
//                 </a>
//               </ul>
//             </div>
//             <p>
//               I believe why most of our handwriting is messy is because the size
//               and position of each letter are not aligned. PrettyHandwriting
//               hopes to rescale each letter in a handwritten note to the same
//               size. I hope that it would make the handwriting more pleasing to
//               read.
//             </p>
//           </ul>
//         </div>
//       </div>
//     );
// }
