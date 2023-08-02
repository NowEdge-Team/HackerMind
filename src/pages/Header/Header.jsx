import {useSelector} from "react-redux";
import styles from "../RapportActivite/style.module.scss";
import Profile from "../../components/pvCh/profile/profile.jsx";
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCubes , faCogs } from '@fortawesome/free-solid-svg-icons'

export default function Header(props) {
    const center = useSelector((state) => state.PvChallenge.center);
    const score = useSelector((state) => state.PvChallenge.score);

    return (
        <div className={styles.header} >
            <div className="d-flex flex-column sg-onHover">
                <div className="d-flex justify-content-center align-items-center">
                    <Profile colorText={"#ffffff"} title={center?.name} avatarId={center?.avatarId} />
                </div>
                <div className="sg-menu-item-btn-config-p" onClick={() => null}>
                    <div className="sg-menu-item-btn-config-sp">
                        <FontAwesomeIcon icon={faCubes} /> { score.score1}{" "}
                        {props.t(`parcours.point`)}
                    </div>
                    <div className="sg-menu-item-btn-config-sp">
                        <FontAwesomeIcon icon={faCogs} /> {score.score2}{" "}
                        {props.t(`parcours.point`)}
                    </div>
                </div>
            </div>
            <button className="parc-btnQ" onClick={() => props.history.push("/")}>
                {props.t(`parcours.quitter`)}
                <img src={runningSolid} style={{ marginLeft: "5px" }}  alt={""}/>
            </button>
        </div>
    );
};
