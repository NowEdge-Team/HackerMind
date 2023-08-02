import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { useTranslation } from "react-i18next";

import badge1 from "../../../assets/images/pv-challenge/logo.png";
import badge2 from "../../../assets/images/pv-challenge/logo_ambassadeur_color.png";
import style from "./style.module.scss";

const PvChModalBadge = ({
    show,
    close = () => null,
    badges,
}) => {
    const [Pharma5Badge, setPharma5Badge] = useState(false);
    const [AmbassadeurBadge, setAmbassadeurBadge] = useState(false);
    const [currentBadge, setCurrentBadge] = useState(null);
    const { t } = useTranslation();

    useEffect(() => {
        if (Pharma5Badge) {
            setCurrentBadge(1);
        } else if (AmbassadeurBadge) {
            setCurrentBadge(2);
        } else {
            close();
        }
    }, [Pharma5Badge, AmbassadeurBadge]);

    useEffect(() => {
        if (badges.length > 0) {
            const Pharma5BadgeID = badges.find((b) => b.badgeId === 1);
            if (Pharma5BadgeID) setPharma5Badge(true);

            const AmbassadeurBadgeID = badges.find((b) => b.badgeId === 2);
            if (AmbassadeurBadgeID) setAmbassadeurBadge(true);
        }
    }, [badges]);

    const getImg = () => {
        switch (currentBadge) {
            case 1:
                return { img: badge1, width: '40%' };
            case 2:
                return { img: badge2, width: '40%' };
            default:
                return { img: badge2, width: '40%' };
        }
    };
    const getTitle = () => {
        switch (currentBadge) {
            case 1:
                return t("badges.modal.badge1.title");
            case 2:
                return t("badges.modal.badge2.title");
            default:
                break;
        }
    };

    const getBody = () => {
        switch (currentBadge) {
            case 1:
                return t("badges.modal.badge1.body");
            case 2:
                return t("badges.modal.badge2.body");
            default:
                break;
        }
    };
    return (
        <Modal
            show={show}
            dialogClassName={style.daysModal}
            contentClassName={style.modalContent}
            centered
        >
            <Modal.Body>
                <div className={style.dayOneModal}>
                    <div className={style.block1}>
                        <div className={style.poligon}>
                            <img src={getImg()?.img} style={{ width: getImg().width }}  alt={""}/>
                        </div>
                    </div>
                    <div className={style.block2}>
                        <h3>{getTitle()}</h3>
                        <p>{getBody()}</p>

                        <button
                            className={`btn btn-primary waves-effect width-md waves-light ${style.btn}`}
                            onClick={() => {
                                // close();
                                if (currentBadge === 1) {
                                    setPharma5Badge(false);
                                } else if (currentBadge === 2) {
                                    setAmbassadeurBadge(false);
                                }
                            }}
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
export default PvChModalBadge;
