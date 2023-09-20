import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import style from "./style.module.scss";
import AVATARS from "@/assets/images/pv-challenge/Badges";



const confirmAction = {
    current: () => Promise.resolve(true),
};

export function mBadgePopup(props) {
    return confirmAction.current(props);
}



const BadgePopup = ({ }) => {

    const { t } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [props, setProps] = useState({});
    const resolveRef = useRef(() => null);

    confirmAction.current = (props) =>
        new Promise((resolve) => {
            const initProps = {
                currentBadge: 1,
                ...props,
            }

            setProps(initProps)
            setIsOpen(true);
            resolveRef.current = resolve;
        });

    const closeModal = (resolve = true) => {
        resolveRef?.current(resolve);
        setIsOpen(false);
    };


    const getImgBadge = (id) => AVATARS[`badge${id}`];


    const getTitle = (id) => t(`badges.modal.badge${id}.title`)


    const getBody = (id) => t(`badges.modal.badge${id}.body`)

    return (
        <Modal
            show={isOpen}
            dialogClassName={style.daysModal}
            contentClassName={style.modalContent}
            centered
        >
            <Modal.Body>
                <div className={style.dayOneModal}>
                    <div className={style.block1}>
                        <div className="w-1/2">
                            <img src={getImgBadge(props.badgeIndex)} alt={""} />
                        </div>
                    </div>
                    <div className={style.block2}>
                        <h3>{getTitle(props.badgeIndex)}</h3>
                        <p>{getBody(props.badgeIndex)}</p>

                        <button
                            className={`btn btn-primary waves-effect width-md waves-light ${style.btn} mt-3`}
                            onClick={closeModal}
                        >
                            {t("badges.modal.btnText")}
                            <i className=" fas fa-arrow-right ml-1"></i>
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};
export default BadgePopup;
