import React from 'react';
import PropTypes from 'prop-types';
import arrowRight from '../../../assets/images/pv-challenge/images/arrow-right.svg'
import styles from './style.module.scss'
import { useTranslation } from 'react-i18next';
const NextButton = (props) => {
    const { t } = useTranslation();
    const { title = t("next_step") } = props;

    return (
        <button style={{ ...props.style }} className={`${styles.button} ${props.className}`} onClick={props.onClick}>
            {title}
            <img src={arrowRight} alt={""} />
        </button>
    );
};

NextButton.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
};
NextButton.defaultProps = {
    onClick: () => null,
    className: "",
    style: {}
};

export default NextButton;
