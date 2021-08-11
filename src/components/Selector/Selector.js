
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Selector.module.css';

function Selector(props) {
    const { children, onChange, value } = props;
    return (
        <select className={styles.selector} onChange={(e) => onChange(e)} value={value}>
            {children}
        </select>
    );
}

function Option(props) {
    const { children, key, value } = props;
    return <option value={value} key={key ? key : value}>{children}</option>
}

Selector.propTypes = {
    children: PropTypes.arrayOf(PropTypes.object).isRequired,
    onChange: PropTypes.func,
    value: PropTypes.any.isRequired,
};

Option.propTypes = {
    children: PropTypes.string.isRequired,
    key: PropTypes.string,
    value: PropTypes.any.isRequired,
};

Selector.Option = Option;

export default Selector;