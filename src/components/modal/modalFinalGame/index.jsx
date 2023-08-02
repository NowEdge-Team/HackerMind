import React from "react";
import {Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import style from "./style.module.scss";

const ModalFinalGame = ({
                            show,
                            close = () => null,
                            text = "xxxxxxx",
                            history,
                            onValidate = null,

                        }) => {
    const {t} = useTranslation();


    return (
        <Modal
            show={show}
            dialogClassName={style.daysModal}
            contentClassName={style.modalContent}
            centered
        >
            <Modal.Body>
                <div className={style.dayOneModal} style={{borderRadius: 15}}>
                    <div className={style.block1} style={{borderTopRightRadius: 15, borderTopLeftRadius: 15,}}>
                    </div>
                    <div className={style.block2}>
                        <h3> {t(`menu.finalGameTitle`)}</h3>
                        <p>{t(`menu.finalGameBody`)}</p>

                        <button
                            style={{backgroundColor: "#6E3EC4"}}
                            className={[
                                "btn btn-primary waves-effect width-md waves-light",
                            ].join(" ")}
                            onClick={() => {
                                close()
                            }}
                        >
                            {t("menu.notee")}
                            <i className=" fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default ModalFinalGame;
