import React, {useEffect, useRef} from "react";
import { useTranslation } from "react-i18next";
import { Modal } from "react-bootstrap";
import style from "./style.module.scss";
import start1 from "./group_7844.svg";
import emoji from "../../../assets/images/pv-challenge/images/emoji-sad-svgrepo-com.svg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUndo } from '@fortawesome/free-solid-svg-icons'

const FieldModal = ({ show, close = () => null }) => {
    const { t } = useTranslation();

    // const audio = useRef(new Audio(audioF));
    // audio.current.loop = false;

    // useEffect(() => {
    //     if (show)
    //     audio.current.play();
    //     return ()=>{
    //         audio.current.pus();
    //         audio.current = null;
    //     }
    // }, [show]);


    if (!show) return null;
    return (
        <Modal show={show} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={style.step_modal}>
                    <h1 className={style.title}>OUPS!</h1>
                    <div className={style.score_body}>
                        <img src={emoji} alt={""} width={120} height={120} />
                        <div className={style.score_start}>
                            {[...Array(3).keys()].map(() => {
                                return <img src={start1} width={40} alt={""} />
                            })}
                        </div>
                        <div className={style.row_score}>
                            <p>
                                {t("msg_field_part_1")}
                            </p>

                            <p className={style.p1}>
                                {t("msg_field_part_2")}
                            </p>
                        </div>

                    </div>
                    <button className={style.btn} onClick={close}>
                        <span>
                            {t("rejouer")}
                        </span>
                        <FontAwesomeIcon icon={faUndo} />
                    </button>
                </div>
            </Modal.Body>
        </Modal>
    );
};


export default FieldModal;
