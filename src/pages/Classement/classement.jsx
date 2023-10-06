import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import badge1 from "../../assets/images/pv-challenge/Component25e311.svg";
import badge2 from "../../assets/images/pv-challenge/Component3581.svg";
import badge3 from "../../assets/images/pv-challenge/Componente3551.svg";
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
import { avatars, getLogoById } from "../../helpers/missionDataPvC.js";
import { getScoreGlobalPvCh, getscorePVCh } from "../../redux/actions.js";
import ClassementProfile from "../../components/pvCh/classement/classementProfile.jsx";
import Profile from "../../components/pvCh/profile/profile.jsx";
import styles from "./style.module.scss"
import { useCookies } from "react-cookie";
import { faCogs, faCubes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderProfile from "@/components/HeaderPrfile";

const ListClassItem = ({ t, active = false, onClick, index, item = {} }) => {
    return (
        <div
            className={`list-item-classment ${active ? "active-classment" : ""} ${styles.list_item_classment_pv5} mt-3`}
            onClick={() => onClick(index)}
        >
            <div className="list-item-classment-b1">
                <h3 className={"mb-0"} >{item?.position}</h3>
                <img
                    src={getLogoById(item.insightsMission?.avatar_id, avatars)?.logo}
                    style={{
                        backgroundColor: "aliceblue",
                        borderRadius: " 50%",
                        width: `34px`,
                    }}
                />
                <div>{item.insightsMission.name}</div>
            </div>
            <span style={{ color: `${item.insightsMission.finishDate ? "#10c469" : "#f9c851"}` }}>
                {item.insightsMission.finishDate ? "Terminé" : "En cours"}
            </span>
            <div className="list-item-classment-b2">
                <h3 className={"mb-0"}>{t(`classement.score`)} :</h3>
                <h4 className={"mb-0"}>{item.score1 + item.score2}</h4>
                <DetailsClassmentItemList
                    t={t}
                    score1={item.score1}
                    score2={item.score2}
                // score3={item.score3}
                />
            </div>
        </div>
    );
};

const ListClass = ({ t, scoreGlobal = [] }) => {
    const [indexActive, setindexActive] = useState(null);

    const challengeId = useSelector((state) => state.PvChallenge.center.challengeId);
    let list = scoreGlobal
        .map((value, index) => {
            const total = value.score1 + value.score2;
            return { ...value, total: total };
        })
        .sort(function (a, b) {
            return b.total - a.total;
        });

    list.splice(0, 3);

    useEffect(() => {
        const index = list.findIndex((s) => s.insightsMission.challengeId === challengeId)
        setindexActive(index)
    }, [list])

    const clickItem = (index) => {
        // setindexActive(index);
    };
    return (
        <div className="list-classment">
            {list.map((item, index) => {
                return (
                    <ListClassItem
                        t={t}
                        key={index}
                        index={index + 3}
                        active={index === indexActive}
                        onClick={clickItem}
                        item={item}
                    />
                );
            })}
        </div>
    );
};

const DetailsClassmentItem = ({ t, score1 = 0, score2 = 0, score3 = 0 }) => {
    return (
        <div className="clas-show-detail-hover">
            <div className="mb-2">
                <i className=" fas fa-cubes"></i> {score1} {t(`parcours.point`)}
            </div>
            <div className="mb-2">
                <i className=" fas fa-cogs"></i> {score2} {t(`parcours.point`)}
            </div>
            {/*<div className="mb-2">*/}
            {/*    <i className=" fas fa-chart-line"></i> {score3} {t(`parcours.point`)}*/}
            {/*</div>*/}
        </div>
    );
};
const DetailsClassmentItemList = ({ t, score1, score2, score3 }) => {
    return (
        <span
            className={`clas-show-detail-hover-li ${styles.clas_show_detail_hover_li}`}
            style={{ color: "color: rgb(7, 96, 165) !important" }}
        >
            <div className="mb-2">
                <i className=" fas fa-cubes mr-1"></i> {score1}{" "}
                {t(`parcours.point`)}
            </div>
            <div className="mb-2">
                <i className=" fas fa-cogs mr-1"></i> {score2}{" "}
                {t(`parcours.point`)}
            </div>
        </span>
    );
};

const DetailsClassment = ({
    t,
    scoreGlobal,
    mission_id,
    user1,
    user2,
    user3,
}) => {
    return (
        <div className="details-classment">
            <div style={{ position: "relative" }}>
                <>
                    <div
                        className="details-class-2"
                        style={{
                            justifyContent: "center",
                            alignContent: "center",
                            display: "flex",
                            alignItems: "center",
                            height: "140px",
                        }}
                    >
                        {/*<img*/}
                        {/*    src={getLogoById(user2.pvChallenge.avatarId, avatars)?.logo}*/}
                        {/*    style={{ width: "80px", height: "100px" }}*/}
                        {/*/>*/}
                        <img
                            src={badge2}
                            style={{ position: "absolute", right: "40px", top: "55px" }}
                        />
                        <p>qweqweqweqe</p>
                        <div>
                            <div className="text-score">
                                {" "}
                                {t(`classement.score`)} :
                            </div>
                            <div className="text-score-n">{123}</div>
                        </div>
                    </div>

                    <DetailsClassmentItem
                        t={t}
                        score1={user2.score1}
                        score2={user2.score2}
                    // score3={user2.score3}
                    />
                </>
                {user2 && (
                    <>
                        <div
                            className="details-class-2"
                            style={{
                                justifyContent: "center",
                                alignContent: "center",
                                display: "flex",
                                alignItems: "center",
                                height: "140px",
                            }}
                        >
                            <img
                                src={getLogoById(user2.insightsMission.avatar_id, avatars)?.logo}
                                style={{ width: "80px", height: "100px" }}
                            />
                            <img
                                src={badge2}
                                style={{ position: "absolute", right: "40px", top: "55px" }}
                            />
                            <p>{user2?.insightsMission.name}</p>
                            <div>
                                <div className="text-score">
                                    {" "}
                                    {t(`classement.score`)} :
                                </div>
                                <div className="text-score-n">{user2?.total}</div>
                            </div>
                        </div>

                        <DetailsClassmentItem
                            t={t}
                            score1={user2.score1}
                            score2={user2.score2}
                        // score3={user2.score3}
                        />
                    </>
                )}
            </div>
            <div style={{ position: "relative" }}>
                {user1 && (
                    <>
                        <div className="details-class-1" style={{ height: "161px" }}>
                            <img
                                src={getLogoById(user1.insightsMission.avatar_id, avatars)?.logo}
                                style={{ width: "80px", height: "100px", alignSelf: "center" }}
                            />
                            <img
                                src={badge1}
                                style={{ position: "absolute", right: "37px", top: "58px" }}
                            />
                            <p>{user1?.insightsMission.name}</p>
                            <div>
                                <div className="text-score">
                                    {t(`classement.score`)} :
                                </div>
                                <div className="text-score-n">{user1?.total}</div>
                            </div>
                        </div>

                        <DetailsClassmentItem
                            t={t}
                            score1={user1.score1}
                            score2={user1.score2}
                        // score3={user1.score3}
                        />
                    </>
                )}
            </div>
            <div style={{ position: "relative" }}>
                {user3 && (
                    <>
                        <div className="details-class-3" style={{ height: "140px" }}>
                            <img src={getLogoById(user3.insightsMission.avatar_id, avatars)?.logo}
                                style={{ width: "80px", height: "100px", alignSelf: "center" }} />
                            <img
                                src={badge3}
                                style={{ position: "absolute", right: "40px", top: "55px" }}
                            />
                            <p style={{ marginTop: "20px" }}>{user3?.insightsMission.name}</p>
                            <div>
                                <div className="text-score">
                                    {t(`classement.score`)} :
                                </div>
                                <div className="text-score-n">{user3?.total}</div>
                            </div>
                        </div>
                        <DetailsClassmentItem
                            t={t}
                            score1={user3.score1}
                            score2={user3.score2}
                        // score3={user3.score3}
                        />
                    </>
                )}
            </div>
        </div>
    );
};

export default function Classement() {
    const history = useHistory();
    const [cookies, setCookie, removeCookie] = useCookies();
    const game_session_id = cookies.game_session_id;
    const scoreGlobal = useSelector((state) => state.PvChallenge.scoreGlobal);

    const center = useSelector((state) => state.PvChallenge.center);
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const score = useSelector((state) => state.PvChallenge.score);
    useEffect(() => {
        dispatch(getscorePVCh(center.mission_id));
        dispatch(getScoreGlobalPvCh(game_session_id));
    }, []);

    let list = scoreGlobal
        .map((value, index) => {
            const total = value.score1 + value.score2;
            return { ...value, total: total };
        })
        .sort(function (a, b) {
            return b.total - a.total;
        });

    const currentUserMissionIndex = list.findIndex((elem) => elem.insightsMission.userId === center.userId);
    const CLASSEMENT = list[currentUserMissionIndex]?.position;

    const user1 = list.length >= 1 ? list[0] : null;
    const user2 = list.length >= 2 ? list[1] : null;
    const user3 = list.length >= 3 ? list[2] : null;

    return (
        <div className={styles.main_classement}>

            <div className="z-30 px-[65px] pt-2" >
                <HeaderProfile btnStyle="bg-white text-[#5CB962]" textStyle="text-white" />
            </div>
            <div className={styles.pvch_classement_content}>
                <div className="classement-content-block">


                    <div className="heder">
                        <h3
                            className={styles.classement_title}
                            style={{
                                fontSize: 26,
                            }}
                        >{t(`classement.title`)}</h3>
                        <h5 className={styles.classement_title_s}>
                            {CLASSEMENT ? `${t('classement.subTitle')} ${CLASSEMENT}` : ""}
                            {CLASSEMENT &&
                                (
                                    CLASSEMENT === 1
                                        ? t(`classement.first`)
                                        : t(`classement.second`)
                                )
                            }
                        </h5>
                    </div>

                    <div className={styles.classement_content_heder_pvch}>
                        {user2 && <ClassementProfile name={user2?.insightsMission?.name} score={user2.score1 + user2.score2}
                            classement={2} item={user2} />}
                        {user1 && <ClassementProfile name={user1?.insightsMission?.name} score={user1.score1 + user1.score2}
                            classement={1} item={user1} />}
                        {user3 && <ClassementProfile name={user3?.insightsMission?.name} score={user3.score1 + user3.score2}
                            classement={3} item={user3} />}
                    </div>
                    <ListClass t={t} scoreGlobal={scoreGlobal} />
                </div>
            </div>
        </div>
    );
}
