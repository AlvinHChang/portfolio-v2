import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './DropdownLinks.module.css';

function DropdownLinks(props) {
    const { linkObject } = props;
    return (
      <div className={styles.linkContainer}>
        {
          linkObject.map(({ route, textDisplay }) => (
            <ul>
              <Link to={route}>
                {textDisplay}
              </Link>
            </ul>
          ))
        }
      </div>
    );
}

DropdownLinks.propTypes = {
  linkObject: PropTypes.arrayOf(PropTypes.shape({
    // route to link to
    route: PropTypes.string,
    // string to display
    textDisplay: PropTypes.string,
   })).isRequired
};

export default DropdownLinks;