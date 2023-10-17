import React from 'react';
import PropTypes from 'prop-types';
import arrowRight from '../../../assets/images/pv-challenge/images/arrow-right.svg'
import styles from './style.module.scss'
import { useTranslation } from 'react-i18next';
const BackButton = (props) => {
    const { t } = useTranslation();
    const { title = t("back_step") } = props;

    return (
        <button style={{ ...props.style }} className={`${styles.button} ${props.className}`} onClick={props.onClick}>
            <img className="rotate-180" src={arrowRight} alt={""} />

            {title}
        </button>
    );
};

BackButton.propTypes = {
    onClick: PropTypes.func,
    title: PropTypes.string,
    className: PropTypes.string,
};
BackButton.defaultProps = {
    onClick: () => null,
    className: "",
    style: {}
};

export default BackButton;
