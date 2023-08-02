import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Modal} from "react-bootstrap";
import style from "./style.module.scss";
import img1 from "../../../../assets/images/pv-challenge/character/character_1_c.png"
import Audio from "../../day2/AudioPlayer/Audio";
const ConfirmationModal = ({
                               show,
                               close = () => null ,
                               valid=()=>null,
                               total =0,
                               textBtnValid="Valider mes choix" ,
                               textBtnNotValid="Pas encore",
                               showCancelBtn = true,
                               title="Le ministre",
                               text="",
                               imgBackground= img1,
                               audio,
                               rotateImage = false,
                               classImg=""
}) => {

    return (
        <Modal show={show} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{minWidth: "100%",backgroundColor: "transparent"}}>
                <div className={style.dayOneModal}  >
                    <div className={`${style.img_user} ${classImg}`}>
                        <img src={imgBackground} alt={""} className={`${rotateImage === true ? style.img_roœtate : null} `} />
                    </div>
                    <div className={style.discussMessage}>

                           <span>{title}</span>

                           <p className={"mt-2"}  dangerouslySetInnerHTML={{__html: text}} />

                    </div>
                    {audio && <div className={style.audio}>
                        <Audio src={audio}/>
                    </div>}
                    <div
                        className={style.control}
                        onClick={() => {
                            // if (step === 1);
                            close(false);
                            // setStep((prv) => prv + 1);
                        }}
                    >
                        {showCancelBtn && <button className={style.btn_close} onClick={close}>
                            {textBtnNotValid}
                        </button>}
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


export default ConfirmationModal;
