
import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import Dropdown from '../../components/Dropdown/Dropdown';
// import ComponentDropdown from '../ComponentDropdown/ComponentDropdown';
import DropdownLinks from '../../components/DropdownLinks/DropdownLinks';
import styles from './NavBar.module.css';
import RockPaperScissor from '../../services/RockPaperScissor/RockPaperScissor';
import DemoContainer from '../DemoContainer/DemoContainer';
// import DemoCreated from '../DemoCreated/DemoCreated';

// class NavBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       componentRendered: [],
//     };
//   }

//   renderComponent = newComponent => {
//     // appending the new component
//     this.setState(prevState => ({
//       componentRendered: [...prevState.componentRendered, newComponent],
//     }));
//   };

//   render() {
//     const { componentRendered } = this.state;
//     return (
//       <div>
//         <div className={styles.navBar}>
//             <Link className={styles.headerLink} to="/">
//                 Home
//             </Link>
//           <Dropdown
//             isHover
//             customButton={
//             <Link className={styles.headerLink} to="/about">
//                 About
//             </Link>
//             }
//             dropdownItem={<DropdownLinks linkObject={
//                 [
//                     { route: "/about", textDisplay: "about" },
//                     { route: "/components", textDisplay: "components" }
//                 ]
//             }/>}
//             dropdownBackgroundColor="#0277BD"
//           />
//           <Dropdown
//             isHover
//             customButton={
//                 <Link className={styles.headerLink} to="/components">
//                     Components
//                 </Link>
//             }
//             dropdownItem={
//                 <button onClick={() => {comp} } >lcick here</button>
//                 <RockPaperScissor />
//             }
//             dropdownBackgroundColor="#0277BD"
//           />
//         </div>
//         <DemoContainer componentRendered={componentRendered} />
//       </div>
//     );
//   }
// }

const createRPSObject = () => {
    return { name: "Rock Paper Scissors", component: <RockPaperScissor /> };
}

function NavBar() {
    const [componentRendered, updateComponents ] = useState([]);
    return (
      <div>
        <div className={styles.navBar}>
            <Link className={styles.headerLink} to="/">
                Home
            </Link>
          <Dropdown
            customButton={
            <Link className={styles.headerLink} to="/about">
                About
            </Link>
            }
            dropdownItem={<DropdownLinks linkObject={
                [
                    { route: "/about", textDisplay: "about" },
                    { route: "/components", textDisplay: "components" }
                ]
            }/>}
            dropdownBackgroundColor="#0277BD"
          />
          <Dropdown
            customButton={
                <Link className={styles.headerLink} to="/components">
                    Components
                </Link>
            }
            dropdownItem={
                <button onClick={() => {
                    updateComponents([...componentRendered, createRPSObject()])
                } } >lcick here</button>
            }
            dropdownBackgroundColor="#0277BD"
          />
        </div>
        <DemoContainer componentRendered={componentRendered} />
      </div>
    );
}

export default NavBar;
