import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import start2 from "./group_7843.svg";
import start1 from "./group_7844.svg";
import style from "./style.module.scss";

const ChartLine = ({ fill = "#ff5b5b" }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23.414"
        height="17.56"
        fill={fill}
        viewBox="0 0 23.414 17.56"
    >
        <path
            className="a"
            d="M22.682,78.633H2.927v-13.9A.731.731,0,0,0,2.2,64H.732A.731.731,0,0,0,0,64.732V80.1A1.464,1.464,0,0,0,1.463,81.56H22.682a.731.731,0,0,0,.732-.732V79.365A.731.731,0,0,0,22.682,78.633Zm-1.463-13.17h-5.4a1.1,1.1,0,0,0-.776,1.874l1.482,1.482L13.17,72.174,9.815,68.819a1.463,1.463,0,0,0-2.069,0L4.6,71.96A.732.732,0,0,0,4.6,73l1.034,1.034a.732.732,0,0,0,1.035,0L8.78,71.923l3.355,3.355a1.463,1.463,0,0,0,2.069,0l4.39-4.39,1.482,1.482a1.1,1.1,0,0,0,1.874-.776V66.2A.731.731,0,0,0,21.219,65.463Z"
            transform="translate(0 -64)"
        />
    </svg>
);

const RowScore = ({ title, points = 0, state = 1, t }) => {
    const color = state === 1 ? "#10C469" : "#FF5B5B";
    const background = state === 1 ? "#CFF2E1" : "#FFDEDE";
    return (
        <div
            style={{
                display: "flex",
                // marginLeft: "29px",
                // marginRight: "29px",
                justifyContent: "space-between",
                alignItems: "baseline",
                flex: 1,
                padding: '0 15px'

            }}
        >
            <span>{title}</span>
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: " 113px",
                    height: "37px",
                    background: `${background} 0% 0% no-repeat padding-box`,
                    borderRadius: "23px",
                }}
            >
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ChartLine fill={color} />
                    <span
                        style={{
                            textAlign: "left",
                            font: "normal normal normal 10px/9px Karla",
                            letterSpacing: "0px",
                            color: color,
                            marginLeft: "5px",
                            marginTop: "5px",
                        }}
                    >
                        {points} {t("menu.points")}
                    </span>
                </div>
            </div>
        </div>
    );
};


const confirmAction = {
    current: () => Promise.resolve(true),
};

export function mScoreLevel(props) {
    return confirmAction.current(props);
}



const ScoreLevel = () => {
    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const resolveRef = useRef(() => null);

    const [props, setProps] = useState({
        total: 0,
        number_of_start: 1,
    });

    confirmAction.current = (props) =>
        new Promise((resolve) => {
            const initProps = {
                total: 0,
                number_of_start: 1,
                scoreDay: { score1: 123, score2: 200, stars: 2 },
                ...props
            }
            setProps(initProps)
            setIsOpen(true);
            resolveRef.current = resolve;
        });

    const closeModal = (resolve = true) => {
        resolveRef?.current(resolve);
        setIsOpen(false);

    };

    if (!isOpen) return null;
    return (
        <Modal show={isOpen} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={style.step_modal}>
                    <h1 className={style.title}>BRAVO ! VOUS AVEZ REUSSI CE NIVEAU 👏🏽</h1>
                    <div className={style.score_body}>
                        <div className={style.score_start}>
                            {[...Array(props.scoreDay?.stars).keys()].map(() => {

                                return <img src={start2} width={100} alt={""} />
                            })}

                            {[...Array(3 - props.scoreDay?.stars).keys()].map(() => <img src={start1} width={68} alt={""} />)}
                        </div>
                        <div className={style.row_score} >
                            <RowScore
                                title={"Score de Connaissance"}
                                points={
                                    props.scoreDay?.score1
                                }
                                state={props.scoreDay?.score1 > 0 ? 1 : 2}
                                t={t}
                            />
                        </div>
                        <div className={style.row_score} >
                            <RowScore
                                title={"Score d'Action"}
                                points={
                                    props.scoreDay?.score2
                                }
                                state={props.scoreDay?.score2 > 0 ? 1 : 2}
                                t={t}
                            />
                        </div>
                    </div>
                    <button className={style.btn} onClick={closeModal} >
                        C'est noté
                        <i className=" fas fa-arrow-right "></i>
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};


export default ScoreLevel;
