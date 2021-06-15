import React from 'react';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';
import styles from './DemoWindow.module.css';

// class that contains the component passed in to be demoed. It provides a show/hide button with a close button
class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggled: false,
      isUnmounted: false,
    };
  }

  toggleDropdown = () => {
    this.setState(prevState => ({ toggled: !prevState.toggled }));
  };

  // this function will remove self but will call a callback (to remove from parent class) if provided
  removeSelf = () => {
    const { removeCallback } = this.props;
    if (removeCallback) {
      removeCallback();
    }
    this.setState({
      isUnmounted: true,
    });
  };

  render() {
    const { objectType, componentName, componentItem } = this.props;
    const { toggled, isUnmounted } = this.state;
    return (
      <div>
        {!isUnmounted && (
            <motion.div drag>
                <div className={styles.demo}>
                <div className={styles.demoLabel}>
                    <span>
                    {componentName}
                    <button
                        className={styles.toggleButton}
                        type="button"
                        onClick={this.toggleDropdown}
                    >
                        Show {objectType}
                    </button>
                    <button
                        className={styles.closeButton}
                        type="button"
                        onClick={this.removeSelf}
                    >
                        Close {objectType}
                    </button>
                    </span>
                </div>
                {toggled ? (
                    <div className={styles.demoItem}>{componentItem}</div>
                ) : null}
                </div>
            </motion.div>
        )}
      </div>
    );
  }
}

Demo.propTypes = {
  // Name of the component demoed
  componentName: PropTypes.string,
  // The object of the component demoed
  componentItem: PropTypes.object,
  // Optional tag that user can pass in, will display so that the Demo will identify type of component
  objectType: PropTypes.string,
  // Optional callback that can be called when this object removes itself, it can be used to remove from parent
  removeCallback: PropTypes.func,
};

export default Demo;