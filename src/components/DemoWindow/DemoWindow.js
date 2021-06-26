import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './DemoWindow.module.css';
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
}
// class that contains the component passed in to be demoed. It provides a show/hide button with a close button
function DemoWindow(props) {
    const [isOpen, setIsOpen] = useState(false);
    const [isMounted, setIsMounted] = useState(true);
    const { componentName, componentItem } = props;
    return (
      <>
        {isMounted && (
            <motion.div 
            style={{position: 'absolute', zIndex: 100}}
             drag
             dragMomentum={false}
             >
                <div className={styles.demo}>
                <div className={styles.demoLabel}>
                    <span>
                    {componentName}
                    <button
                        className={styles.toggleButton}
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                    >
                        Show
                    </button>
                    <button
                        className={styles.closeButton}
                        type="button"
                        onClick={() => setIsMounted(false)}
                    >
                        Close
                    </button>
                    </span>
                </div>
                <motion.div
             variants={variants}
             animate={isOpen ? "open" : "closed"}
                >
                {isOpen ? (
                    <div className={styles.demoItem}>{componentItem}</div>
                ) : null}
                    </motion.div>
                </div>
            </motion.div>
        )}
      </>
    );
}

DemoWindow.propTypes = {
  // Name of the component demoed
  componentName: PropTypes.string,
  // The object of the component demoed
  componentItem: PropTypes.object,
  // Optional callback that can be called when this object removes itself, it can be used to remove from parent
  removeCallback: PropTypes.func,
};

export default DemoWindow;