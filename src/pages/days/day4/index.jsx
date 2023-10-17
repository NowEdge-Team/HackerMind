import React, { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import "./style.scss";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Profile from "../../../components/pvCh/profile/profile.jsx";
import ShowTuto from "../../../components/pvCh/showTuto/ShowTuto.jsx";
import Stepper from "../../../components/pvCh/Stepper/Stepper.jsx";
import { useStepper } from "../../../components/pvCh/Stepper/hook.js";
import { StepperProvider } from "../../../components/pvCh/Stepper/context/index.jsx";
import NextButton from "../../../components/pvCh/NextButton/index.jsx";
import CancelButton from "../../../components/pvCh/CancelButton/index.jsx";
import ModalTutorial from "../../../components/pvCh/ModalTutorial/ModalTutorial.jsx";
import {
    ChangeSelectedRadio,
    clearDayData,
    day4getDetail,
    dragDropUpdateDecisions,
    validDay
} from "../../../redux/levels/actions.js";
import ConfirmationModalDay2 from "../../../components/pvCh/day2/ConfirmationModal/ConfirmationModal.jsx";
import { Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import backImageMode from "../../../assets/images/pv-challenge/images/background_55_m3.png"
import ListChois from "../../../components/pvCh/ListChois/ListChois.jsx";
import Level4Audio from "../../../assets/audio/Niv4/index.js";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import Loader from "../../../components/Loader.jsx";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png";
import img2 from "../../../assets/images/pv-challenge/character/character_1.png"
import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
import img4 from "../../../assets/images/pv-challenge/character/character_c.png"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const DaySteper = forwardRef(({ t, modeEdit, ValidTask, setValidTask, setShowBolck, setStp, history, dispatch }, ref) => {

    const { decisions, categories } = useSelector((state) => state.DaysPvCh.day4.part1);
    const decisions2 = useSelector((state) => state.DaysPvCh.day4.part2.decisions);
    const decisions3 = useSelector((state) => state.DaysPvCh.day4.part3.decisions);
    const decisions4 = useSelector((state) => state.DaysPvCh.day4.part4.decisions);
    const { center } = useSelector((state) => state.PvChallenge);
    const [showModal, setShowModal] = useState(false);


    useEffect(() => {
        config.current.modeEdit = modeEdit;
    }, [modeEdit]);

    const sendData = () => {
        config.current.currentIndex += 1;
        if (config.current.modeEdit) {
            const option = {
                parts: {
                    1: {
                        type: "dgd",
                    },
                    2: {
                        type: "select",
                    },
                    3: {
                        type: "select",
                    },
                    4: {
                        type: "select",
                    },
                },
                correctResponse: [106, 109, 113]
            }
            dispatch(validDay(center.mission_id, 4, option, (success) => {

                if (!success) return history.push("/");

                setShowModal(true);

            }));
        } else {
            setShowModal(true);
        }
    }

    const config = useRef({
        messages: [
            {
                title: t("day4.messages.title"),
                text: t("day4.messages.message1"),
                showCancel: false,
                textBtnValid: t("noted"),
                audio: Level4Audio.audio9,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                }

            },
            {
                title: t("day4.messages.validation.title"),
                text: t("day4.messages.validation.text"),
                textBtnValid: t("day4.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),
                showCancel: true,
                audio: Level4Audio.audio10,
                valid: async () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    setShowBolck(true);
                    incrementCurrentStep();

                    await sleep(500)
                }

            },
            {
                title: t("day4.messages.validation.title"),
                text: t("day4.messages.validation.text"),
                textBtnValid: t("day4.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),
                showCancel: true,
                audio: Level4Audio.audio10,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();

                }
            },
            {
                title: t("day4.messages.validation.title"),
                text: t("day4.messages.validation.text"),
                textBtnValid: t("day4.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),
                showCancel: true,
                audio: Level4Audio.audio10,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }

            },
            {
                title: t("day4.messages.validation.title"),
                text: t("day4.messages.validation.text"),
                textBtnValid: t("day4.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),
                showCancel: true,
                audio: Level4Audio.audio10,
                valid: () => {
                    setShowModal(false);
                    setTimeout(sendData, 500);
                }
            },
            {
                title: t("day4.messages.validation.title"),
                text: t("day4.messages.validation.text1"),
                textBtnValid: t("day4.messages.validation.textBtnValid2"),
                showCancel: false,
                imgP: img2,
                audio: Level4Audio.audio12,
                valid: () => {
                    history.push("/");
                }
            }

        ],
        currentIndex: 0,
        enableNextBtn: true,
        modeEdit
    });

    useImperativeHandle(ref, () => {
        return {
            start() {

                if (config.current.currentIndex === 0)
                    setShowModal(true);
            },
        };
    }, []);


    const { incrementCurrentStep, currentStep } = useStepper();


    const nextStep = () => {

        if (currentStep === 1 && config.current.currentIndex === 6) {
            setShowBolck(false);
            incrementCurrentStep();
        }

        setShowModal(true);

    }

    const closeModal = () => {
        setShowModal(false);
    }


    return (
        <>
            <ConfirmationModalDay2
                index={config.current.currentIndex}
                show={showModal}
                close={closeModal}
                {...config.current.messages[config.current.currentIndex]}
            />
            <div className={`${currentStep === 3 ? "step_quiz_4" : "step_quiz"}`}>
                <Stepper style={{ flex: 1 }}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">
                            <Dropzone
                                day={4}
                                part={1}
                                callback={dragDropUpdateDecisions}
                                decisions={decisions}
                                categories={categories}
                                flex_siz={1.2}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day4"}
                                part={"part2"}
                                decisions={decisions2}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day4.part2.decisions_title")}
                                s_title={t("day4.part2.decisions_s_title")}
                                listQuestions={[105, 106, 107].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day4.part2.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="3" name="Step 3">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day4"}
                                part={"part3"}
                                decisions={decisions3}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day4.part3.decisions_title")}
                                s_title={t("day4.part3.decisions_s_title")}
                                listQuestions={[108, 109, 110].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day4.part3.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="4" name="Step 4">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day4"}
                                part={"part4"}
                                decisions={decisions4}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day4.part4.decisions_title")}
                                s_title={t("day4.part4.decisions_s_title")}
                                listQuestions={[111, 112, 113].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day4.part4.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>
                    </Stepper.Steps>
                </Stepper>
                <div className={"step_quiz_btn"}>
                    <CancelButton onClick={() => history.push("/parcours")} />
                    <NextButton className={"step_quiz_btn_2"} onClick={config.current.enableNextBtn ? nextStep : null} />
                </div>
            </div>
        </>)
})

const Day4 = (props) => {
    const history = useHistory();
    const refDaySteper = useRef();


    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);

    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { center } = useSelector((state) => state.PvChallenge);
    const { loading } = useSelector((state) => state.DaysPvCh);

    const [showBolck, setShowBolck] = useState(false);
    const [stp_, setStp] = useState(0);
    const [ValidTask, setValidTask] = useState(false);
    const { currentStep } = useStepper();

    useEffect(() => {
        const currentDay = center.days?.find((d) => d.day_id === 4);

        if (currentDay?.status === -1) {
            history.push("/parcours");
        }

        if (currentDay?.status === 1) {
            setModeEdit(false);
            setValidTask(true);
            dispatch(day4getDetail(center.mission_id));
        } else {
            dispatch(clearDayData(4));
        }

    }, []);

    const listMsg = [
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message1`),
            audio: Level4Audio.audio1
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message2`),
            audio: Level4Audio.audio2
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message3`),
            audio: Level4Audio.audio3
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message4`),
            audio: Level4Audio.audio4
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message5`),
            audio: Level4Audio.audio5
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message6`),
            audio: Level4Audio.audio6
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message7`),
            audio: Level4Audio.audio7
        },
        {
            title: t(`day4.message_tuto.title`),
            text: t(`day4.message_tuto.message8`),
            audio: Level4Audio.audio8
        },
    ]


    return (

        <div className="container-day-4-ins">
            {loading && <Loader />}

            <ModalTutorial
                personnageImage={img1}
                listMsg={listMsg}
                backGrandImage={backImageMode}
                title="My Modal"
                show={showTuto}
                onClose={() => {
                    setShowTuto(false);
                    refDaySteper.current.start()
                }}
                video={{
                    id: "1UXLVL5XbcEOFiMLxgHW7Xlr6nMS3g2Gh",
                    title: "La notification"
                }}
            />


            {showBolck && (
                <div className="box box-1">
                    <div className="pup">
                        <h3>{t("day3.leftMsg.title")}</h3>
                        <p>
                            {t(`day3.leftMsg.message${currentStep + 1}`)}
                        </p>
                    </div>
                    <div className="perso_image">
                        <img src={img3} className="imgPrs3" />
                        <img src={img4} className="imgPrs4" />
                    </div>
                </div>
            )}
            <div className="box box-2" style={{ paddingTop: `${currentStep === 1 ? "75px" : ""}` }}>
                <div className="box-2-1_ew pt-2">
                    <div className="d-flex justify-content-center align-content-center align-items-center ">
                        <Profile title={center?.name} avatar_id={center?.avatar_id} />
                    </div>
                    <Stack direction={"row"} spacing={1}>
                        <ShowTuto onClick={() => setShowTuto(true)} />
                    </Stack>
                </div>
                <div className="box-2-2_ew pt-0 pb-0">
                    <h3>
                        {t("day4.niveau")}
                    </h3>
                    <p>
                        {t(`day4.part${currentStep + 1}.title`)}
                    </p>
                </div>


                <div className="box-2-3">
                    <DaySteper
                        ref={refDaySteper}
                        t={t}
                        modeEdit={modeEdit}
                        ValidTask={ValidTask}
                        setValidTask={setValidTask}
                        setShowBolck={setShowBolck}
                        setStp={setStp}
                        dispatch={dispatch}
                        history={history}
                    />
                </div>

            </div>
        </div>

    );
};

export default () => <StepperProvider> <Day4 /> </StepperProvider>;
