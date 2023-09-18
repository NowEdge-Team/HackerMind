import React from "react";

import { faCogs, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
import { avatars, getLogoById } from "../../helpers/missionDataPvC.js";
import styles from "./style.module.scss";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import { twMerge } from "tailwind-merge";

function HeaderProfile({ showCancel = true, textStyle }) {

    const history = useHistory();

    const { t } = useTranslation();

    const center = useSelector((state) => state.PvChallenge.center);

    const score = useSelector((state) => state.PvChallenge.score);


    return (
        <div className="flex flex-row py-1 justify-between ">
            <div className="group relative d-flex flex-column ">
                <div className=" flex flex-row items-center">
                    <img
                        src={getLogoById(center.avatarId, avatars)?.logo}
                        alt="user-img"
                        width={41}
                        height={41}
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "50px",
                        }}
                    />
                    <h3 className={twMerge('sg-menu-item-title text-[#323a46] font-bold text-[15px]', textStyle)} >
                        {center.name ?? 'Nabil Moujjane'}
                    </h3>
                </div>
                <div className="group-hover:flex absolute top-10 z-20 flex-col  hidden  gap-2 mt-2 -left-5">
                    <div className="flex flex-row items-center bg-white p-1 min-w-fit rounded-[8px] text-[14px] text-[#0760a5]">
                        <FontAwesomeIcon icon={faCubes} className="" /> <p className="mx-1" >{score?.score1 ?? 0}</p> <p>{t('parcours.point')}</p>
                    </div>
                    <div className="flex flex-row items-center bg-white p-1 min-w-fit rounded-[8px] text-[14px] text-[#0760a5]">
                        <FontAwesomeIcon icon={faCogs} />
                        <p className="mx-1">{score?.score2 ?? 0}</p> <p>{t('parcours.point')}</p>
                    </div>
                </div>
            </div>
            {showCancel && <button className="parc-btnQ cursor-pointer " onClick={() => history.push("/")}>
                {t(`parcours.quitter`)}
                <img src={runningSolid} style={{ marginLeft: "5px" }} />
            </button>}

        </div>
    );
}

export default HeaderProfile;