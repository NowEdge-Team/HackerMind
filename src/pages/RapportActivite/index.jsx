import i18n from "i18next";
import _ from "lodash";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import img12 from "../../assets/images/pv-challenge/cogs-solid.svg";
import img11 from "../../assets/images/pv-challenge/cubes-solid.svg";
import img14 from "../../assets/leader.png";
import { getCenterInfoPvCh, getscorePVCh } from "../../redux/actions.js";
import data_history from "./data.json";
import styles from "./style.module.scss";
import { getHistoricScoresPvCh } from "../../redux/levels/service.js";
import { useCookies } from "react-cookie";
// import imagePers2 from "../../assets/images/pv-challenge/character/expert.png";
import imagePers3 from "../../assets/images/pv-challenge/character/character_1_11.png";
import imagePers4 from "../../assets/images/pv-challenge/character/leader.png";
import img1 from "../../assets/images/pv-challenge/images/days/Rectangle_2095.png";
import img2 from "../../assets/images/pv-challenge/images/days/Rectangle96.png";
import img3 from "../../assets/images/pv-challenge/images/days/Rectangle 2097.png";
import img4 from "../../assets/images/pv-challenge/images/days/Rectangle 2098.png";
import img5 from "../../assets/images/pv-challenge/images/days/icon5.png";
import img6 from "../../assets/images/pv-challenge/images/days/icon6.png";
import img7 from "../../assets/images/pv-challenge/images/days/Rectangle 2099.png";
import HeaderProfile from "@/components/HeaderPrfile";


const loadImg = (key) => {
    switch (key) {
        case 1:
            return { img: img1 }

        case 2:
            return { img: img2 }

        case 3:
            return { img: img3 }

        case 4:
            return { img: img4 }

        case 5:
            return { img: img5 }
        case 6:
            return { img: img6 }
        case 7:
            return { img: img7 }

        default:
            return { img: img11 }
            break;
    }
}

// status,day_id,text
const Item = ({ item, title, text, onClick, index, activeIndex }) => {
    console.log("🚀 ~ file: index.jsx:57 ~ Item ~ item:", item)

    const { img } = loadImg(index)
    return (
        <li className="py-2" onClick={() => {
            if (item.status === 1) {
                onClick(index)
            }
        }}

            style={{ backgroundColor: `${activeIndex === index ? '#f1f5f7' : ''}` }}
        >
            <div className={styles.li_img}>
                <img src={img} alt="" style={item.status === 1 ? {} : { filter: "grayscale(100%)" }} />
            </div>
            <div className={`${styles.li_content}`}>
                <h5>{title}</h5>
                <h3> {item.text}</h3>
            </div>
        </li>
    );
};
const List = ({ days = [], clickDay, t }) => {
    const [activeIndex, setActiveIndex] = useState(0)

    const onClickItem = (index) => {
        console.log("🚀 ~ file: index.jsx:160 ~ Container ~ state:", index)

        clickDay(index)
        setActiveIndex(index)
    }
    return (
        <div className={styles.block_1_rep}>
            <header>
                <h3>
                    Etapes du jeu
                </h3>
            </header>
            <div className={styles.list_days}>
                <ul className="flex flex-col">
                    {
                        days.map((elem, index) => {
                            return (<Item
                                key={index}
                                item={elem}
                                index={index + 1}
                                activeIndex={activeIndex}
                                img={img4}
                                title={`NIVEAU ${elem.day_id}`}
                                text="Le système de collecte "
                                onClick={onClickItem} />)
                        })
                    }
                </ul>
            </div>
        </div>
    );
};

const Messg = ({ item }) => {
    return (
        <div className="d-flex flex-row mb-3">
            <div
                className="d-flex"
                style={{
                    alignItems: "flex-end",
                }}
            >
                <img src={img14} width={42} height={43} alt="" style={{
                    backgroundColor: "#E4E4E4",
                    borderRadius: 30
                }} />
            </div>
            <div
                className="pr-3 ml-4 msg-block"
                style={{
                    backgroundColor: "#F8F9FA",
                    borderRadius: "4px",
                    padding: "10px",
                    width: "100%"
                }}
            >
                <h3 style={{ font: " normal normal bold 16px/17px Karla" }}>
                    LE LEADER
                </h3>
                <p
                    style={{
                        textAlign: "left",
                        font: "normal normal normal 14px/17px Karla",
                        letterSpacing: "0.28px",
                        color: "#3F4351",
                        opacity: "1",
                    }}
                >
                    {item.description}
                </p>
                {/* <GroupBtn /> */}
            </div>
        </div>
    );
};


const Container = ({ days, listDescriptions, score, t }) => {

    const [state, setState] = useState(0)
    const clickDay = (day) => {
        setState(day)
    }

    return (

        <>
            <h4 style={{ zIndex: 10000 }}> {t(`activityReport.rapport_activite`)} </h4>
            <p className={styles.description}> {t(`activityReport.description`)} </p>
            <div className={styles.container_rap}>
                <List days={days} clickDay={clickDay} t={t} />
                <div className={styles.block_2}>
                    <header>
                        <div className={styles.img_block}>
                            <img src={img11} alt="" />
                            <div className={styles.img_block_text}>
                                <span>{t("activityReport.s_connaissance")}</span>
                                <h4>{score.score1} {t("activityReport.points")}</h4>
                            </div>
                        </div>
                        <div className={styles.img_block}>
                            <img src={img12} alt="" />
                            <div className={styles.img_block_text}>
                                <span>{t("activityReport.s_action")}</span>
                                <h4>{score.score2} {t("activityReport.points")}</h4>
                            </div>
                        </div>

                    </header>
                    <div className={`${styles.container_blk} pl-4 pr-4 pt-2`}>
                        {listDescriptions[state - 1]?.desc?.map((elem, index) => {
                            return <Messg key={index} item={elem} />
                        })}

                    </div>
                </div>
            </div>
        </>
    );
};

function RapportActivite(props) {
    const { t } = useTranslation();

    const [cookies, setCookie, removeCookie] = useCookies();
    const game_session_id = cookies.game_session_id;
    const [data, setData] = useState([]);
    const [days_, setDays] = useState([
        { status: 1, day_id: 1, text: t(`parcours.day1title`) },
        { status: 0, day_id: 2, text: t(`parcours.day2title`) },
        { status: 0, day_id: 3, text: t(`parcours.day3title`) },
        { status: 0, day_id: 4, text: t(`parcours.day4title`) },
        { status: 0, day_id: 5, text: t(`parcours.day5title`) },
        { status: 0, day_id: 6, text: t(`parcours.day6title`) },
        { status: 0, day_id: 7, text: t(`parcours.day7title`) }

    ]);
    const [listDescriptions, setListDescriptions] = useState([]);
    const score = useSelector((state) => state.PvChallenge.score);
    const days = useSelector((state) => state.PvChallenge.center.days);
    const { mission_id } = useSelector((state) => state.PvChallenge.center);
    // const {game_session_id} = useSelector((state) => state.Module.module);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getscorePVCh(mission_id));

        if (!days) {
            dispatch(getCenterInfoPvCh(game_session_id));
        }
    }, [game_session_id]);

    useEffect(() => {
        getHistoricScoresPvCh(mission_id).then((res) => {
            setData(res);

            const data_history_ = data_history[i18n.language]?.map((elem, index) => {
                const res_ = res.find(item => item.story_id === elem.id)
                let desc = elem.description.replace(/##/gi, res_ ? res_.X : 0).replace(/@@/gi, res_ ? res_.Y : 0);
                return { ...elem, description: desc }
            })

            const list = _.chain(data_history_)
                .groupBy("day")
                .map((value, key) => ({ day: key, desc: value }))
                .value();


            setListDescriptions(list);
        })
        const days_title = [
            t("parcours.day1title"),
            t("parcours.day2title"),
            t("parcours.day3title"),
            t("parcours.day4title"),
            t("parcours.day5title"),
            t("parcours.day6title"),
            t("parcours.day7title")
        ]

        if (days !== null) {
            const days__ = days?.map((elem, index) => {
                return { ...elem, text: days_title[index] }
            })
            // setDays(days__)
        }

    }, []);

    return (
        <div className={styles.rapport_activite}>
            <div className="z-30 px-[70px] pt-2" >
                <HeaderProfile btnStyle="bg-white text-[#5CB962]" textStyle="text-white" />
            </div>
            <Container t={t} days={days_} listDescriptions={listDescriptions} score={score} />
            <div className={styles.img1_content}>
                <img src={imagePers4} className={styles.img2} alt="" />
                {/* <img src={imagePers2} className={styles.img2} alt=""/> */}
            </div>
            <div className={styles.img2_content}>
                <img src={imagePers3} className={styles.img1} alt="" />
            </div>
            <div className={styles.back_image}></div>
        </div>
    );
}

export default RapportActivite;
