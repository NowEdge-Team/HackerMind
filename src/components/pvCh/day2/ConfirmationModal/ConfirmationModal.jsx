import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Modal} from "react-bootstrap";
import style from "./style.module.scss";
import img1 from "../../../../assets/images/pv-challenge/images/background_3_m4.svg"
import imgPerso2 from "../../../../assets/images/pv-challenge/character/character-3.png"
import Audio from "../AudioPlayer/Audio";
const ConfirmationModalDay2 = ({
                                    imgP=imgPerso2,
                                   show,
                                   close = () => null ,
                                   valid= ()=> null,
                                   title = "RESPONSABLE PHARMACOVIGILANCE INTERNE :",
                                   text = "Es-tu sûr de ton choix ?",
                                   showCancel = false,
                                   textBtnValid = "oui",
                                   textBtnCancel = "non",
                                   showAudio = false,
                                   index=-1,
                                   audio


}) => {
    return (
        <Modal show={show} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={style.dayOneModal}>
                    <div className={style.block1} >
                        <img src={imgP} alt="" className={style.imgPerso} />
                    </div>
                    <div className={style.block2} >
                        <div className={style.back} />
                        <img  src={img1}  alt={""} />
                    </div>

                    <div className={style.discussMessage}>
                        <span>{title}</span>
                        <p className={"mt-2"} dangerouslySetInnerHTML={{__html: text}} />
                        {audio && <div className={style.audio}>
                                    <Audio src={audio}/>
                                  </div>
                        }
                    </div>

                    <div
                        className={style.control}
                    >
                        {showCancel && <button className={style.btn_close} onClick={close}>
                            {textBtnCancel}
                        </button>
                        }
                        <button className={style.btn} onClick={valid} >
                            {textBtnValid}
                              <i className=" fas fa-arrow-right "></i>
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};


export default ConfirmationModalDay2;
