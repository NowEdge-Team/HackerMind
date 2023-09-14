import React, { useEffect, useState } from "react";


// import badge1 from "../../assets/images/pv-challenge/group_3875.svg";
// import badge2 from "../../assets/images/pv-challenge/logo_ambassadeur_color.png";
import badge1 from "../../assets/images/pv-challenge/Badges/Avatar.png";
import badge2 from "../../assets/images/pv-challenge/Badges/Contrat.png";
import badge3 from "../../assets/images/pv-challenge/Badges/Recon.png";
import badge4 from "../../assets/images/pv-challenge/Badges/Intrusion.png";
import badge5 from "../../assets/images/pv-challenge/Badges/Admin.png";
import badge6 from "../../assets/images/pv-challenge/Badges/Hacked.png";
import badge7 from "../../assets/images/pv-challenge/Badges/Cybercrime.png";






import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
import { httpClient_get } from "../../helpers/api.js";
import { useTranslation } from "react-i18next";
import { getscorePVCh, getscorePvChSuccess } from "../../redux/actions.js";
import Profile from "../../components/pvCh/profile/profile.jsx";
import Badge from "../../components/pvCh/badge/badge.jsx";
import styles from "./style.module.scss"
import { faCogs, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Bradges() {
    const [Badges, setBadges] = useState([]);
    const center = useSelector((state) => state.PvChallenge.center);
    const { missionId } = useSelector((state) => state.PvChallenge.center);
    const score = useSelector((state) => state.PvChallenge.score);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getscorePVCh(center.missionId));
        httpClient_get(`/participant/digital_ambassadors/getbadgesstatus?missionId=${missionId}`)
            .then((data) => {
                setBadges(data.data);
            })
            .catch((error) => {
            });
    }, []);

    const history = useHistory();
    return (
        <div className={styles.main_badge}>
            <div className={styles.par_row1}>
                <div className="d-flex flex-column sg-onHover">
                    <Profile title={center?.name} avatarId={center?.avatarId} />
                    <div className="sg-menu-item-btn-config-p" onClick={() => null}>
                        <div className="sg-menu-item-btn-config-sp">
                            <FontAwesomeIcon icon={faCubes} />{score.score1}{" "}
                            {t(`parcours.point`)}
                        </div>
                        <div className="sg-menu-item-btn-config-sp">
                            {" "}
                            <FontAwesomeIcon icon={faCogs} /> {score.score2}{" "}
                            {t(`parcours.point`)}
                        </div>
                    </div>
                </div>
                <div className="parc-btnQ" onClick={() => history.push("/")}>
                    {t(`parcours.quitter`)}
                    <img src={runningSolid} style={{ marginLeft: "5px" }} />
                </div>
            </div>
            <div className={styles.par_row2}>
                <h4 className={`badge-title ${styles.badge_title}`} >{t(`badges.title`)}</h4>
                <p
                    className={styles.badge_title_s}
                    style={{
                        margin: "0px 27%",
                    }}
                >
                    {t(`badges.description`)}
                </p>
            </div>
            <div className={styles.bdg_row1}>
                <div className={styles.bloc2} >
                    <Badge
                        isActive={Badges.find(b => b?.badgeId === 1)?.status === 1}
                        icon={badge1}
                        title={t(`badges.badge1.title`)}
                        description={t(`badges.badge1.description`)}
                    />
                    <Badge
                        isActive={Badges.find(b => b?.badgeId === 2)?.status === 1}
                        icon={badge2}
                        title={t(`badges.badge2.title`)}
                        description={t(`badges.badge2.description`)}
                    />
                     <Badge
                        isActive={Badges.find(b => b?.badgeId === 3)?.status === 1}
                        icon={badge3}
                        title={t(`badges.badge3.title`)}
                        description={t(`badges.badge3.description`)}
                    />
                     <Badge
                        isActive={Badges.find(b => b?.badgeId === 4)?.status === 1}
                        icon={badge4}
                        title={t(`badges.badge4.title`)}
                        description={t(`badges.badge4.description`)}
                    />
                     <Badge
                        isActive={Badges.find(b => b?.badgeId === 5)?.status === 1}
                        icon={badge5}
                        title={t(`badges.badge5.title`)}
                        description={t(`badges.badge5.description`)}
                    />
                    <Badge
                        isActive={Badges.find(b => b?.badgeId === 6)?.status === 1}
                        icon={badge6}
                        title={t(`badges.badge6.title`)}
                        description={t(`badges.badge6.description`)}
                    />
                     <Badge
                        isActive={Badges.find(b => b?.badgeId === 7)?.status === 1}
                        icon={badge7}
                        title={t(`badges.badge7.title`)}
                        description={t(`badges.badge7.description`)}
                    /> 
                </div>
            </div>
        </div>
    );
}
