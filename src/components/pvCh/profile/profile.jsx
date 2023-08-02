import React from 'react';
import styles from './profile.module.scss';
import {avatars, getLogoById} from "../../../helpers/missionDataPvC";

export default function Profile({title = "Nabil Moujjane", colorText = "", avatarId = 1}) {
    return (<div className={styles.profile}>
        <img
            src={getLogoById(avatarId, avatars)?.logo}
            alt="user-img"
            width={41}
            height={41}
            style={{
                backgroundColor: "#fff",
                borderRadius: "50px",
            }}
        />
        <span style={{color: colorText}}>
                    {title}
        </span>
    </div>);
}
