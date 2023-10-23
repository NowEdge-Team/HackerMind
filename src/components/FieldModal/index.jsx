import emoji from "@/assets/images/pv-challenge/images/emoji-sad-svgrepo-com.svg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import start1 from "./group_7844.svg";
import style from "./style.module.scss";
import { faUndo } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { closeDaySuccess } from "@/redux/actions";


const confirmAction = {
    current: () => Promise.resolve(true),
};

export function mFieldLevel(props) {
    return confirmAction.current(props);
}


const FieldLevel = () => {

    const { t } = useTranslation();

    const [isOpen, setIsOpen] = useState(false);

    const resolveRef = useRef(() => null);
    const dispatch = useDispatch();


    confirmAction.current = (props) => new Promise(() => {

        setIsOpen(true);
        resolveRef.current = resolve;
    });

    const closeModal = (resolve = true) => {
        dispatch(closeDaySuccess(null));
        resolveRef?.current(resolve);
        setIsOpen(false);

    };


    if (!isOpen) return null;
    return (
        <Modal show={isOpen} dialogClassName={"daysModal"} centered>
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
                            <p dangerouslySetInnerHTML={{ __html: t("msg_field_part_1") }} />
                            <p className={style.p1}>
                                {t("msg_field_part_2")}
                            </p>
                        </div>
                    </div>
                    <button className={style.btn} onClick={closeModal}>
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


export default FieldLevel;
