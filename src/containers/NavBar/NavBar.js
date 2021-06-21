
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownLinks from '../../components/DropdownLinks/DropdownLinks';
import styles from './NavBar.module.css';
import RockPaperScissor from '../../services/RockPaperScissor/RockPaperScissor';
import DemoContainer from '../DemoContainer/DemoContainer';

const createRPSObject = () => {
    return { name: "Rock Paper Scissors", component: <RockPaperScissor /> };
}

function NavBar() {
    const [componentRendered, updateComponents] = useState([]);
    return (
        <div>
            <div className={styles.navBarContainer}>
                <div className={styles.navBarLeft}>
                    fiejfieeifjeifjej
                </div>
                <div className={styles.navBarCenter}>
                    <Link className={styles.headerLink} to="/">
                        Home
                    </Link>
                    <Dropdown
                        customButton={
                            <Link className={styles.headerLink} to="/about">
                                About
                            </Link>
                        }
                        dropdownBackgroundColor="#0277BD"
                    >
                        <DropdownLinks linkObject={
                            [
                                { route: "/about", textDisplay: "about" },
                                { route: "/project", textDisplay: "project" }
                            ]
                        } />
                    </Dropdown>
                    <Dropdown
                        customButton={
                            <Link className={styles.headerLink} to="/component">
                                Components
                            </Link>
                        }
                        dropdownBackgroundColor="#0277BD"
                    >
                        <ul className={styles.dropdownContainer}>
                        <div onClick={() => {
                            updateComponents([...componentRendered, createRPSObject()])
                        }} >RockPaperScissors</div>
                        </ul>

                    </Dropdown>
                </div>
                <div className={styles.navBarRight}>
                    fiejfiej
                </div>
            </div>
            <DemoContainer componentRendered={componentRendered} />
        </div>
    );
}

export default NavBar;
