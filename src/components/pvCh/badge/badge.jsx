import React from 'react';
import styles from './badge.module.scss';

export default function Badge({ title = "", description = "", icon, isActive = false }) {
    return (<div className={styles.badge}>
        <div className={styles.image_wrapper} style={{ filter: `${isActive ? '' : 'grayscale(100%)'}` }} >
            <img alt={""} src={icon} />
        </div>
        <h4 className={styles.title}>
            {title}
        </h4>
        <p className={styles.paragraph}>
            {description}
        </p>
    </div>);
}
