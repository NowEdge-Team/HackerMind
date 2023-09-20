import Audio from "@/components/pvCh/day2/AudioPlayer/Audio";
import React, { useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import style from "./style.module.scss";
import Level1Audio from "@/assets/audio/Niv1/index.js";
import img1 from "@/assets/images/pv-challenge/character/character_1_11.png"


const confirmAction = {
    current: () => Promise.resolve(true),
};

export function mModalConfirmSteps(props) {
    return confirmAction.current(props);
}


const ConfirmationModalSteps = () => {


    const [isOpen, setIsOpen] = useState(false);
    const [props, setProps] = useState({
        textBtnValid: "oui",
        textBtnNotValid: "non",
        showCancelBtn: true,
        title: "Le ministre",
        text: "",
        imgBackground: img1,
        audio: Level1Audio.audio1,
        rotateImage: false,
        classImg: "",
    });
    const resolveRef = useRef(() => null);


    confirmAction.current = (props) =>
        new Promise((resolve) => {

            const initProps = {
                textBtnValid: "oui",
                textBtnNotValid: "non",
                showCancelBtn: true,
                title: "Le ministre",
                text: "",
                imgBackground: img1,
                rotateImage: false,
                classImg: "",
                ...props
            }

            console.log("----initProps--->>", initProps);

            setProps(initProps)
            setIsOpen(true);
            resolveRef.current = resolve;
        });

    const closeModal = (resolve = true) => (e) => {
        resolveRef?.current(resolve);
        setIsOpen(false);
    };



    return (
        <Modal show={isOpen} dialogClassName={"daysModal"} centered>
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={style.dayOneModal}  >
                    <div className={`${style.img_user} ${props.classImg}`}>
                        <img src={props.imgBackground} alt={""} className={`${props.rotateImage === true ? style.img_roœtate : null} `} />
                    </div>
                    <div className={style.discussMessage}>

                        <span>{props.title}</span>

                        <p className={"mt-2"} dangerouslySetInnerHTML={{ __html: props.text }} />

                    </div>
                    {props.audio && <div className={style.audio}>
                        <Audio src={props.audio} />
                    </div>}
                    <div
                        className={style.control}
                        onClick={() => { close(false); }}
                    >
                        {props.showCancelBtn && <button className={style.btn_close} onClick={closeModal(false)}>
                            {props.textBtnNotValid}
                        </button>}
                        <button className={style.btn} onClick={closeModal(true)} >
                            {props.textBtnValid}
                            <i className=" fas fa-arrow-right "></i>
                        </button>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};


export default ConfirmationModalSteps;
