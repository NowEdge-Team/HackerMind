import React, {useEffect, useRef, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import img1 from "../../assets/images/pv-challenge/images/days/Rectangle_2095.png";
import img1Gris from "../../assets/images/pv-challenge/images/days/Rectangle 2095_gris.svg";
import img2 from "../../assets/images/pv-challenge/images/days/Rectangle96.png";
import img2Gris from "../../assets/images/pv-challenge/images/days/Rectangle 2096_gris.svg";
import img3 from "../../assets/images/pv-challenge/images/days/Rectangle 2097.png";
import img3Gris from "../../assets/images/pv-challenge/images/days/Rectangle 2097.png";
import img4 from "../../assets/images/pv-challenge/images/days/Rectangle 2098.png";
import img4Gris from "../../assets/images/pv-challenge/images/days/Rectangle 2098.png";
import img5 from "../../assets/images/pv-challenge/images/days/icon5.png";
import img5Gris from "../../assets/images/pv-challenge/images/days/icon5.png";
import img6 from "../../assets/images/pv-challenge/images/days/icon6.png";
import img6Gris from "../../assets/images/pv-challenge/images/days/icon6.png";

import img7 from "../../assets/images/pv-challenge/images/days/Rectangle 2099.png";
import img7Gris from "../../assets/images/pv-challenge/images/days/Rectangle 2099.png";
import startI from "../../assets/images/pv-challenge/Group 5180.svg";
import startII from "../../assets/images/pv-challenge/Group 5181.svg";
import startIII from "../../assets/images/pv-challenge/Group 5183.svg";
import startIV from "../../assets/images/pv-challenge/Group 5184.svg";
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
import soundLoud from "../../assets/images/pv-challenge/sound-loud-filled-svgrepo-com.svg";
import soundOff from "../../assets/images/pv-challenge/sound-off-filled-svgrepo-com.svg";
import music from "../../assets/audio/main-music.mp3";
import {avatars, getLogoById} from "../../helpers/missionDataPvC.js";
import {getCenterInfoPvCh, getscorePVCh} from "../../redux/actions.js";
import styles from "./style.module.scss"
import {useCookies} from "react-cookie";
import {faCogs, faCubes} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const base_url = ""

const StartN = ({nbrS, position = true, hover = true, step = 0}) => {
    const [state, setState] = useState(startI);
    useEffect(() => {
        switch (nbrS) {
            case 0:
                setState(startI);
                break;
            case 1:
                setState(startIV);
                break;
            case 2:
                setState(startIII);
                break;
            case 3:
                setState(startII);
                break;
            default:
                break;
        }
    }, [nbrS]);

    const style = position
        ? {
            position: "absolute",
            marginTop: "-150px",
        }
        : {};

    if (nbrS !== -1)
        return (
            <div style={style} className={`${hover ? styles.show_starts : ""}`}>
                <img src={state}/>
            </div>
        );

    return (
        <div
            style={{
                position: "absolute",
                marginTop: "-150px",
            }}
        ></div>
    );
};

const ItemSercl = ({
                       img = img1,
                       title = "",
                       top,
                       left,
                       click = () => null,
                       style = {},
                       topBlock = null,
                       leftBlock = null,
                       dayObject,
                   }) => {
    const day = dayObject?.dayId;
    const step = dayObject?.status;
    const nbrS = step !== -1 ? dayObject?.stars : -1;

    const {t} = useTranslation();

    const customStyle = dayObject?.status === -1 ?
        {
            filter: "grayscale(100%)"
        } : {}
    return (
        <div
            onClick={click}
            className={styles.parcour_step}
            style={{
                position: "absolute",
                left: `${left}%`,
                top: `${top}%`,
                cursor: step === -1 ? "not-allowed" : "pointer",
            }}
        >
            <div className={styles.contene}>
                <StartN nbrS={nbrS}/>
                <img src={img} className="parc-box-img" style={{...style, ...customStyle}}/>
            </div>
            <div
                className={styles.example_contene_s}
                style={{
                    top: `${topBlock ? topBlock + "px" : "-20px"}`,
                    left: `${leftBlock ? leftBlock + "px" : "0px"}`,
                    paddingLeft: "16px",
                    justifyContent: "flex-start",
                }}
            >
                <img src={img} className="parc-box-img-2" style={{...style, ...customStyle}}/>
                <div className="d-flex flex-column ">
                    <div>
                        {t(`parcours.niveau`)} {day}
                    </div>
                    <div
                        style={{
                            // fontSize: "14px",
                            fontWeight: "bold",
                            // fontFamily: "Karla",
                            color: "#3F4351",
                            // lineHeight: "1",
                        }}
                    >
                        {title}
                    </div>
                    <div
                        style={{
                            fontSize: "14px",
                            fontFamily: "Karla",
                            color:
                                step === 1 ? "#10C469" : step === 0 ? "#F9C851" : "#9F9F9F",
                            fontWeight: "400",
                            textTransform: "uppercase",
                            letterSpacing: "20",
                            marginTop: "4px",
                            marginBottom: "4px",
                        }}
                    >
                        {step === 1
                            ? t(`parcours.termine`)
                            : step === 0
                                ? t(`parcours.encour`)
                                : t(`parcours.verouille`)}
                    </div>
                    <StartN nbrS={nbrS} position={false} hover={false}/>
                </div>
            </div>
        </div>
    );
};

const PlayButton = () => {
    const audioEl = useRef();
    const [paused, setPaused] = useState(false);

    useEffect(() => {
        audioEl.current = document.getElementsByClassName("audio-element")[0];
        audioEl.current.play();
        setPaused(audioEl.current.paused);
    }, []);

    const onEnded_ = () => {
        audioEl.current.currentTime = 0;
        audioEl.current.play();
    };
    const click_ = () => {
        audioEl.current.paused ? audioEl.current.play() : audioEl.current.pause();
        setPaused(audioEl.current.paused);
    };

    return (
        <div
            style={{
                width: "20px",
                height: "25px",
                position: "absolute",
                right: "35px",
                top: "18px",
                cursor: "pointer",
            }}
            onClick={click_}
        >
            <img src={paused ?soundOff : soundLoud} width={40} height={40} alt={""} />
            <audio autoPlay className="audio-element" onEnded={onEnded_}>
                <source src={music}></source>
            </audio>
        </div>
    );
};

export default function Parcours() {

    const [cookies, setCookie, removeCookie] = useCookies();
    const  gameSessionId = cookies.gameSessionId ;

    const history = useHistory();

    const {days = []} = useSelector((state) => state.PvChallenge.center);

    const center = useSelector((state) => state.PvChallenge.center);

    const {t} = useTranslation();

    const challengeId = useSelector((state) => state.PvChallenge.center.challengeId);

    const score = useSelector((state) => state.PvChallenge.score);

    // const {gameSessionId} = useSelector((state) => state.Module.module);


    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getscorePVCh(center.missionId));
        if (!days) {
            dispatch(getCenterInfoPvCh(gameSessionId));
        }
    }, [challengeId]);
    const to = (path) => {
        history.push(path);
    };


    return (
        <div className={styles.mainBackground}>
            <PlayButton/>
            <div className={`par-row1 ${styles.par_row_tb}`}>
                <div className="d-flex flex-column sg-onHover">
                    <div className="d-flex justify-content-center align-items-center">
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
                        <span className="sg-menu-item-title" style={{color: "#fff"}}>
                            {center.name}
                        </span>
                    </div>
                    <div className="sg-menu-item-btn-config-p" onClick={() => null}>
                        <div className="sg-menu-item-btn-config-sp">
                            <FontAwesomeIcon icon={faCubes} />{ score.score1}{" "}
                            {t(`parcours.point`)}
                        </div>
                        <div className="sg-menu-item-btn-config-sp">
                            <FontAwesomeIcon icon={faCogs} />{score.score2}{" "}
                            {t(`parcours.point`)}
                        </div>
                    </div>
                </div>
                <div className="parc-btnQ" onClick={() => history.push("/")}>
                    {t(`parcours.quitter`)}
                    <img src={runningSolid} style={{marginLeft: "5px"}}/>
                </div>
            </div>
            <div className={`par-row2 ${styles.row2}`}>
                <h3>
                    <span className={styles.title_x}>{t(`parcours.welcome`)}</span>{' '}
                    <span className={styles.title_x_2}>{t(`parcours.Aventure`)}</span>
                </h3>
                <div
                    className={styles.paragraph}
                >
                    <span>{t(`parcours.description`)}</span>
                </div>
            </div>
{/* 
            <img src={manPic} style={{
                position: "absolute",
                left: `0%`,
                bottom: `0`,
                height: "70%",

            }}/> */}


            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 1)?.status !== -1 &&
                    to(`${base_url}/day/1`);
                }}
                img={
                    days?.find((d) => d.dayId === 1)?.status === -1 ? img1Gris : img1}
                title={t(`parcours.day1title`)}
                left={12}
                top={82}
                dayObject={days?.find((d) => d.dayId === 1)}
            />


            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 2)?.status !== -1 &&
                    to(`${base_url}/day/2`);
                }}
                img={
                    days?.find((d) => d.dayId === 2)?.status === -1 ? img2Gris : img2}
                title={t(`parcours.day2title`)}
                left={22}
                top={32}
                dayObject={days?.find((d) => d.dayId === 2)}
            />


            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 3)?.status !== -1 &&
                    to(`${base_url}/day/3`);
                }}
                img={days?.find((d) => d.dayId === 3)?.status === -1 ? img3Gris : img3}
                title={t(`parcours.day3title`)}
                left={36}
                top={84}
                topBlock={-12}
                dayObject={days?.find((d) => d.dayId === 3)}
            />
            
            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 4)?.status !== -1 &&
                    to(`${base_url}/day/4`);
                }}
                img={
                    days?.find((d) => d.dayId === 4)?.status === -1 ? img4Gris : img4
                }
                title={t(`parcours.day4title`)}
                left={50}
                top={45}
                // left={66}
                // top={82}
                dayObject={days?.find((d) => d.dayId === 4)}
            />


            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 2)?.status !== -1 &&
                    to(`${base_url}/day/2`);
                }}
                img={
                    days?.find((d) => d.dayId === 2)?.status === -1 ? img5Gris : img5}
                title={t(`parcours.day2title`)}
                left={66}
                top={82}
                dayObject={days?.find((d) => d.dayId === 2)}
            />


            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 2)?.status !== -1 &&
                    to(`${base_url}/day/2`);
                }}
                img={
                    days?.find((d) => d.dayId === 2)?.status === -1 ? img6Gris : img6}
                title={t(`parcours.day2title`)}
                left={70}
                top={30}
                dayObject={days?.find((d) => d.dayId === 2)}
            />
              

            <ItemSercl
                click={() => {
                    days?.find((d) => d.dayId === 5)?.status !== -1 &&
                    to(`${base_url}/day/5`);
                }}
                img={
                    days?.find((d) => d.dayId === 5)?.status === -1 ? img7Gris : img7
                }
                title={t(`parcours.day5title`)}
                left={90}
                top={85}
                topBlock={-18}
                dayObject={days?.find((d) => d.dayId === 5)}
            />

            
            
           

        </div>
    );
}
