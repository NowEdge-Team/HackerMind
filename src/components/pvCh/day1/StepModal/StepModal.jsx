import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {Modal} from "react-bootstrap";
import style from "./style.module.scss";

const StepModal = ({ show, close = () => null , total =0}) => {
    const [step, setStep] = useState(1);
    const { t } = useTranslation();
    return (
        <Modal show={show} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={style.dayOneModal}>
                    <div className={style.discussMessage}>
                        <span>Le ministre</span>
                        <p className={"mt-2"}>
                            {step === 1
                                ? t("pvgame.day1.StepModalstep1").replace(/@@/,total)
                                : t("pvgame.day1.StepModalstep2")}
                        </p>
                    </div>
                    <div
                        className={"budget_restant-mod"}
                        onClick={() => {
                            // if (step === 1)
                            close(false);

                            // setStep((prv) => prv + 1);
                        }}
                    >
                        <div className={style.btn} style={{ width: "115px" }}>
                          <span  >
                            {t("pvgame.day1.StepModalNote")}{" "}
                              <i className=" fas fa-arrow-right "></i>
                          </span>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};


export default StepModal;
