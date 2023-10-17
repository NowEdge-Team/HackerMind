import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import img3 from "../../assets/images/pv-challenge/images/days/Rectangle 2097.png";
import img4 from "../../assets/images/pv-challenge/images/days/Rectangle 2098.png";
import img2 from "../../assets/images/pv-challenge/images/days/Rectangle96.png";
import img1 from "../../assets/images/pv-challenge/images/days/Rectangle_2095.png";
import img5 from "../../assets/images/pv-challenge/images/days/icon5.png";
import img6 from "../../assets/images/pv-challenge/images/days/icon6.png";

import HeaderProfile from "@/components/HeaderPrfile";
import LevelCard from "@/components/LevelCard";
import { useCookies } from "react-cookie";
import { twMerge } from "tailwind-merge";
import music from "../../assets/audio/main-music.mp3";
import img7 from "../../assets/images/pv-challenge/images/days/Rectangle 2099.png";
import soundLoud from "../../assets/images/pv-challenge/sound-loud.svg";
import soundOff from "../../assets/images/pv-challenge/sound-off.svg";
import { getCenterInfoPvCh, getscorePVCh } from "../../redux/actions.js";
import styles from "./style.module.scss";




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
            <img src={paused ? soundOff : soundLoud} width={40} height={40} alt={""} />
            <audio autoPlay className="audio-element" onEnded={onEnded_}>
                <source src={music}></source>
            </audio>
        </div>
    );
};

export default function Parcours() {

    const [cookies, setCookie, removeCookie] = useCookies();
    const game_session_id = cookies.game_session_id;

    const history = useHistory();

    const { days = [] } = useSelector((state) => state.PvChallenge.center);

    const center = useSelector((state) => state.PvChallenge.center);

    const { t } = useTranslation();

    const challengeId = useSelector((state) => state.PvChallenge.center.challengeId);

    const score = useSelector((state) => state.PvChallenge.score);
    const [listLevles, setListLevels] = useState([
        { left: "left-[9%]", top: "top-[56%] xl:top-[60%]", urlId: '1', title: t(`parcours.day1title`), img: img1, statue: 0, numberOfStart: 0, },
        { left: "left-[19%] xl:left-[20%]", top: "top-[1%] xl:top-[-5%]", urlId: '2', title: t(`parcours.day2title`), img: img2, statue: -1, numberOfStart: 0, },
        { left: "lg:left-[31%] xl:left-[33%]", top: "lg:top-[67%] md:top-[66%]", urlId: '3', title: t(`parcours.day3title`), img: img3, statue: -1, numberOfStart: 0, },
        { left: "left-[46%]", top: "top-[18%]  ", urlId: '4', title: t(`parcours.day4title`), img: img4, statue: -1, numberOfStart: 0, },
        { left: "right-[28%]", top: "top-[59%]", urlId: '5', title: t(`parcours.day5title`), img: img5, statue: -1, numberOfStart: 0, },
        { left: "right-[24%]", top: "top-[-1%] min-[1151px]:top-[-8%] ", urlId: '6', title: t(`parcours.day6title`), img: img6, statue: -1, numberOfStart: 0, },
        { left: "right-[6%]", top: "top-[57%] min-[1151px]:top-[63%]", urlId: '7', title: t(`parcours.day7title`), img: img7, statue: -1, numberOfStart: 0, directions: "right" },

    ]);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getscorePVCh(center.mission_id));
        if (!days) {
            dispatch(getCenterInfoPvCh(game_session_id));
        }
    }, [challengeId]);
    const to = (path) => {
        history.push(path);
    };


    const navTo = (urlId) => (e) => {
        to(`/day/${urlId}`)
    }


    return (
        <div className={styles.mainBackground}>
            <PlayButton />

            <div className="px-[7%] ">
                <HeaderProfile btnStyle="bg-white text-[#5CB962]" textStyle="text-white" />
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





            <div className={styles.path}>
                {listLevles.map((item, index) => <div onClick={navTo(item.urlId)} key={index} className={twMerge(`absolute`, item.left, item.top)}>
                    <LevelCard index={index + 1} title={item.title} directions={item.directions} numberOfStart={item.numberOfStart} state={item.statue} icon={item.img} />
                </div>)}
            </div>



            {/* <ItemSercl
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
                dayIndex={1}
            /> */}
        </div>
    );
}
