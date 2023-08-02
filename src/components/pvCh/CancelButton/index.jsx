import React from 'react';
import PropTypes from 'prop-types';
import running from '../../../assets/images/pv-challenge/running-solid2.svg'
import styles from './style.module.scss'
import NextButton from "../NextButton/index.jsx";
import { useTranslation } from 'react-i18next';
const CancelButton = (props) => {
    const {t} = useTranslation();
    const {title = t("exit")} = props;
    return (
        <button className={styles.button} onClick={props.onClick}>
            {title}
            {props.withIcon && <img src={running} alt={""}/>}
        </button>
    );
};

CancelButton.propTypes = {
    onClick:PropTypes.func,
    title:PropTypes.string,
    withIcon:PropTypes.bool,
};
CancelButton.defaultProps = {
    onClick:()=> null,
    withIcon:true,
};

export default CancelButton;
