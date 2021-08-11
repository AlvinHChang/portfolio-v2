import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
import DropdownLinks from '../../components/DropdownLinks/DropdownLinks';
import Selector from '../../components/Selector/Selector';
import styles from './NavBar.module.css';
import RockPaperScissor from '../../services/RockPaperScissor/RockPaperScissor';
import DemoContainer from '../DemoContainer/DemoContainer';

const createRPSObject = () => {
    return { name: "Rock Paper Scissors", component: <RockPaperScissor /> };
}

const themes = ["dark", "light"];

const themeColors = {
    dark: { 
        '--active': '#035388',
        '--background': '#52606D',
        '--component-background': '#1F2933',
        '--exit-background': '#780A0A',
        '--exit-text': '#ffebee',
        '--primary-text': '#CBD2D9',
        '--primary': '#52606D',
        '--link-text': '#1992D4',
        '--secondary': '#035388',
        '--warning-text': '#AB091E',
    },
    light: { 
        '--active': '#2CB1BC',
        '--background': '#BCCCDC',
        '--component-background': '#D9E2EC',
        '--exit-background': '#F29B9B',
        '--exit-text': '#ffebee',
        '--primary-text': '#102A43',
        '--primary': '#62B0E8',
        '--link-text': '#0F609B',
        '--secondary': '#38BEC9',
        '--warning-text': 'red'
    }
}

const applyTheme = (theme) => {
    const newThemeDefinitions = themeColors[theme];
    for(const cssVar in newThemeDefinitions) {
        document.body.style.setProperty(cssVar, newThemeDefinitions[cssVar]);
    }
}

const ThemeSelector = () => {
    const [themeSelected, setTheme] = useState(themes[0]);
    const setThemeWrapper = (e) => {
        const newTheme = e.target.value;
        setTheme(newTheme);
        applyTheme(newTheme);
    }
    return (
        <Selector onChange={setThemeWrapper} value={themeSelected}>
            {themes.map((theme) => <Selector.Option value={theme}>{theme}</Selector.Option>)}
        </Selector>
    )
}

function NavBar() {
    const [componentRendered, updateComponents] = useState([]);
    return (
        <div>
            <div className={styles.navBar}>
                <div className={styles.navBarLeft}>
                    Alvin Chang
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
                    >
                        <ul className={styles.dropdownContainer}>
                        <div onClick={() => {
                            updateComponents([...componentRendered, createRPSObject()])
                        }} >RockPaperScissors</div>
                        </ul>

                    </Dropdown>
                </div>
                <div className={styles.navBarRight}>
                    <ThemeSelector />
                </div>

            </div>
            <DemoContainer componentRendered={componentRendered} />
        </div>
    );
}

export default NavBar;
