import React, { useEffect, useState } from "react";
import badge1 from "../../assets/images/pv-challenge/Badges/Avatar.png";
import badge2 from "../../assets/images/pv-challenge/Badges/Contrat.png";
import badge3 from "../../assets/images/pv-challenge/Badges/Recon.png";
import badge4 from "../../assets/images/pv-challenge/Badges/Intrusion.png";
import badge5 from "../../assets/images/pv-challenge/Badges/Admin.png";
import badge6 from "../../assets/images/pv-challenge/Badges/Hacked.png";
import badge7 from "../../assets/images/pv-challenge/Badges/Cybercrime.png";
import { useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { httpClient_get } from "../../helpers/api.js";
import { useTranslation } from "react-i18next";
import { getscorePVCh, getscorePvChSuccess } from "../../redux/actions.js";
import Badge from "../../components/pvCh/badge/badge.jsx";
import styles from "./style.module.scss"
import HeaderProfile from "@/components/HeaderPrfile";


const listBadges = [
    badge1,
    badge2,
    badge3,
    badge4,
    badge5,
    badge6,
    badge7
]
export default function Bradges() {
    const [badges, setBadges] = useState([]);
    const center = useSelector((state) => state.PvChallenge.center);
    const { mission_id } = useSelector((state) => state.PvChallenge.center);
    const score = useSelector((state) => state.PvChallenge.score);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getscorePVCh(center.mission_id));
        httpClient_get(`/participant/hackermind/getbadgesstatus?mission_id=${mission_id}`)
            .then((data) => {
                setBadges(data.data);
            })
            .catch((error) => {
            });
    }, []);

    const history = useHistory();
    return (
        <div className={styles.main_badge}>

            <div className="px-[70px]" >
                <HeaderProfile btnStyle="bg-white text-[#5CB962]" />
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
                    {badges.map((item, index) => index < 7 && <Badge
                        isActive={item.status === 1}
                        icon={listBadges[index]}
                        title={t(`badges.badge${index + 1}.title`)}
                        description={t(`badges.badge${index + 1}.description`)}
                    />)
                    }

                </div>
            </div>
        </div>
    );
}
