import React from 'react';
import styles from './badge.module.scss';

export default function Badge ({title="",description = "",icon,isActive=false}) {
    return (<div className={styles.badge}>
               <div className={styles.image_wrapper} >
                   {/*{icon && React.createElement(icon, {})}*/}
                   <img alt={""} src={icon}  style={{filter: `${ isActive ?  "" : 'grayscale(100%)'}`}}  />
               </div>
               <h4 className={styles.title}>
                   {title}
               </h4>
                <p className={styles.paragraph}>
                    {description}
                </p>
            </div>);
}
