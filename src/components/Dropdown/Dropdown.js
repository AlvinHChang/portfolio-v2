import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from "framer-motion"
import styles from './Dropdown.module.css';

// requires react transition group and css modules

// Dropdown item, this item act as a dropdown. Only requires passing in a button/text as the dropdown button
// Also requires the items that show up when the dropdown is shown.
function Dropdown(props) {
    const [isOpen, setIsOpen] = useState(false);
    const { children, customButton, dropdownItem, dropdownBackgroundColor } = props;
      const variants = {
          open: { opacity: 1, x: 0 },
          closed: { opacity: 0, y: "-100%" },
      }
    return (
        <div
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
            className={styles.dropdown}
        >
            <button
                className={styles.dropdownButton}
                type="button"
            >
                {customButton}
            </button>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={variants}
            >
                <div
                    style={{ backgroundColor: dropdownBackgroundColor }}
                    className={styles.dropdownItem}
                >
                    {dropdownItem}
                    {children}
                </div>
            </motion.div>
        </div>
    );
}

Dropdown.propTypes = {
  // Can be text, or can pass object in for the button to be the dropdown button
  customButton: PropTypes.node,
  // the object that will show up when the dropdown is opened
  dropdownItem: PropTypes.object,
  // Optional color of the dropdown item
  dropdownBackgroundColor: PropTypes.string,
};

export default Dropdown;
