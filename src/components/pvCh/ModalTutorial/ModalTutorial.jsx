import React, { Children, useEffect, useRef, useState } from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import arrowRight from '../../../assets/images/pv-challenge/images/arrow-right-solid (1).svg'
import doc from "../../../assets/images/pv-challenge/character/character-3.png"
import imagePath from "../../../assets/images/pv-challenge/images/background_22.png"
import Audio from "../day2/AudioPlayer/Audio";
import { Player } from 'video-react';
import 'video-react/dist/video-react.css';
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";
const Template1 = ({ pictureClass, listMsg, backGrandImage, endBtnText, personnageImage, index, next, prv, children }) => {

    const { t } = useTranslation();
    return (
        <div
            className={styles.modal_content}
            style={{
                backgroundImage: `linear-gradient(to bottom,rgba(12, 12, 12, 0.8),rgba(12, 12, 12, 0.43)),url('${backGrandImage}')`,
                // backgroundImage: `url('${backGrandImage}')`,
            }}
            onClick={e => e.stopPropagation()}>
            <picture className={`${pictureClass} ${listMsg[index]?.styleCharacter}`} >
                <img src={personnageImage} alt={""} />
            </picture>
            <div className={styles.modal_body}>
                <div className={styles.block} >
                    <div className={styles.msg}>
                        <h3>
                            {listMsg[index]?.title}
                        </h3>
                        <h4>
                            {listMsg[index]?.subtitle}
                        </h4>
                        <p dangerouslySetInnerHTML={{ __html: listMsg[index]?.text }} />
                    </div>
                    {listMsg[index]?.audio &&
                        <div className={styles.audio}>
                            <Audio src={listMsg[index]?.audio} />
                        </div>
                    }
                </div>

            </div>
            {Children.map(children, child =>
                <>
                    {child}
                </>
            )}
            <div className={styles.modal_footer}>
                {index > 0 && <button className={styles.prv_btn} onClick={prv}>
                    {t("btnBack")}
                </button>}
                <button className={styles.next_btn} onClick={next}  >
                    {listMsg.length - 1 === index ? endBtnText : t("btnSuivant")}
                    <img src={arrowRight} alt={""} />
                </button>
            </div>
        </div>
    )
}



const Template2 = ({ video = "", onClose, endBtnText, personnageImage, index, next, prv }) => {
    const refIframe = useRef();
    const { t } = useTranslation();


    return (
        <div
            className={styles.modal_content_t1}
            onClick={e => e.stopPropagation()}
        >

            <div className={styles.modal_body}>
                <h3 className={styles.title} >{video.title || ""} </h3>
                {video?.id &&
                    <iframe
                        id={"refIframe"}
                        src={`https://drive.google.com/file/d/${video.id}/preview`}
                        width="640"
                        height="360"
                        allow="autoplay"
                        allowFullScreen="true"
                        seamless=""
                        sandbox="allow-same-origin allow-scripts"
                    />

                }

            </div>
            <div className={styles.modal_footer} style={{ paddingRight: `calc((700px - 640px)/2)` }} >
                {/* {index > 0 && <button className={styles.prv_btn} onClick={prv}>*/}
                {/*    Précedent*/}
                {/*</button>} */}
                <button className={styles.next_btn} onClick={onClose}  >
                    {t("btnSuivant")}
                    <img src={arrowRight} alt={""} />
                </button>
            </div>
        </div>
    )
}
const ModalTutorial = props => {
    const { type_contrat } = useSelector((state) => state.PvChallenge.center);
    const { t } = useTranslation();

    const [index, setIndex] = useState(0);

    const { endBtnText = t("noted") } = props;

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);

    useEffect(() => {
        setIndex(0);
    }, [props.show]);

    if (!props.show) return null;

    const next = () => {
        if (index < props.listMsg.length - 1)
            setIndex(prv => prv + 1)
        else if (type_contrat !== 1 && typeof props.listMsg[index]?.onClose === "function") {
            props.listMsg[index]?.onClose();
        } else {
            props.onClose()
        }

    }

    const prv = () => {
        if (index > 0)
            setIndex(prv => prv - 1)

    }

    const { backGrandImage = imagePath, forceTemplate1 } = props

    if (type_contrat === 1 && !forceTemplate1)
        return ReactDOM.createPortal(
            <div className={styles.modal2} onClick={() => {
                props.onClose();
            }}>
                <Template2 {...props} endBtnText={endBtnText} index={index} next={next} prv={prv} />
            </div>,
            document.getElementById("root")
        );


    return ReactDOM.createPortal(
        <div className={styles.modal} onClick={() => {
            props.onClose();
        }}>
            <Template1 {...props} endBtnText={endBtnText} index={index} next={next} prv={prv} />
        </div>,
        document.getElementById("root")
    );
};

ModalTutorial.propTypes = {
    onClose: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    backGrandImage: PropTypes.element,
    personnageImage: PropTypes.element,
    listMsg: PropTypes.array,
    pictureClass: PropTypes.string,
    endBtnText: PropTypes.string,
    audio: PropTypes.element,
    backgroundImageStyle: PropTypes.object,
    forceTemplate1: PropTypes.bool

};


ModalTutorial.defaultProps = {
    backGrandImage: imagePath,
    personnageImage: doc,
    pictureClass: "",
    listMsg: [
        {
            title: "RESPONSABLE PHARMACOVIGILANCE INTERNE : 1",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
        },
        {
            title: "RESPONSABLE PHARMACOVIGILANCE INTERNE : 2",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
        },
        {
            title: "RESPONSABLE PHARMACOVIGILANCE INTERNE : 3",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
        },
        {
            title: "RESPONSABLE PHARMACOVIGILANCE INTERNE : 4",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit amet consectetur adipisci[ng] velit, sed quia non numquam [do] eius modi tempora inci[di]dunt, ut labore et dolore magnam aliquam quaerat voluptatem. "
        },
    ],
    backgroundImageStyle: {},
    forceTemplate1: false,
};

export default ModalTutorial;
