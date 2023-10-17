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
    day2getDetail,
    dragDropUpdateDecisions,
    validDay
} from "../../../redux/levels/actions.js";
import ConfirmationModalDay2 from "../../../components/pvCh/day2/ConfirmationModal/ConfirmationModal.jsx";
import { Stack } from "@mui/material";
import { useHistory } from "react-router-dom";
import backImageMode from "../../../assets/images/pv-challenge/images/background_1_m22.png"
import ListChois from "../../../components/pvCh/ListChois/ListChois.jsx";
import Level2Audio from "../../../assets/audio/Niv2/index.js"
import ModalSteps from "../../../components/pvCh/day4/ModalSteps";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import _ from "lodash";
import Loader from "../../../components/Loader.jsx";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png";
import img2 from "../../../assets/images/pv-challenge/character/character_1.png"
import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
import img4 from "../../../assets/images/pv-challenge/character/character_c.png"




const DaySteper = forwardRef(({ t, modeEdit, ValidTask, setValidTask, history, dispatch, center }, ref) => {
    const { decisions, categories } = useSelector((state) => state.DaysPvCh.day2.part3);
    const decisions1 = useSelector((state) => state.DaysPvCh.day2.part4.decisions);
    const decisions2 = useSelector((state) => state.DaysPvCh.day2.part5.decisions);
    const decisions3 = useSelector((state) => state.DaysPvCh.day2.part6.decisions);



    const day2 = useSelector((state) => state.DaysPvCh.day2);

    const current = useRef({ day2 });

    useEffect(() => {
        ref.current.day2 = day2;
    }, [_.isEqual(ref?.current?.day2, day2)]);


    useEffect(() => {
        config.current.modeEdit = modeEdit;
    }, [modeEdit]);


    const save = () => {
        config.current.currentIndex += 1;
        if (config.current.modeEdit) {
            const option = {
                day_index: 1,
                parts: {
                    1: {},
                    2: {
                        type: "classement",
                        position: [
                            15,
                            16,
                            17,
                            18,
                            19,
                            20,
                            21,
                            22,
                            23,
                            24
                        ]
                    },
                    3: {
                        type: "dgd"
                    },
                    4: {
                        type: "select"
                    },
                    5: {
                        type: "select"
                    }
                    ,
                    6: {
                        type: "select"
                    }
                },
                correctResponse: [37, 41, 47]
            }
            dispatch(validDay(center.mission_id, 2, option, (success) => {
                if (!success) return history.push("/");

                setShowModal(true);
            }));

        } else {
            setShowModal(true)
        }
    }

    const [showModal, setShowModal] = useState(false);
    const config = useRef({
        messages: [
            {
                title: t("day2.messages.msg1.title"),
                text: t("day2.messages.msg1.text"),
                showCancel: false,
                textBtnValid: t("day2.messages.msg1.textBtnValid"),
                textBtnCancel: t("btnBack"),
                audio: Level2Audio.audio8,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text"),
                showCancel: true,
                textBtnValid: t("day2.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),

                audio: Level2Audio.audio9,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();

                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text"),
                showCancel: true,
                textBtnValid: t("day2.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),
                audio: Level2Audio.audio9,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text"),
                showCancel: true,
                textBtnValid: t("day2.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),

                audio: Level2Audio.audio9,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text"),
                showCancel: true,
                textBtnValid: t("day2.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),

                audio: Level2Audio.audio9,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text"),
                showCancel: true,
                textBtnValid: t("day2.messages.validation.textBtnValid"),
                textBtnCancel: t("btnBack"),

                audio: Level2Audio.audio9,
                valid: () => {

                    setShowModal(false);

                    setTimeout(save, 500);

                }
            },
            {
                title: t("day2.messages.validation.title"),
                text: t("day2.messages.validation.text1"),
                showCancel: false,
                textBtnValid: t("day2.messages.validation.textBtnValid2"),
                textBtnCancel: t("btnBack"),
                imgP: img2,
                audio: Level2Audio.bravo,
                valid() {
                    history.push("/")
                }
            },

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

    const { incrementCurrentStep, decrementCurrentStep, currentStep } = useStepper();
    const nextStep = () => {
        if (config.current.currentIndex === 1) {
            incrementCurrentStep();
            return;
        }

        setShowModal(true);
    }
    const closeModal = () => {
        setShowModal(false);
    }
    const validateModal = async () => {
        setShowModal(false);
    }
    const [showM1, setShowM1] = useState(true);


    return (
        <>
            {config.current.messages[config.current.currentIndex] &&
                <ConfirmationModalDay2
                    index={config.current.currentIndex}
                    show={showModal}
                    close={closeModal}
                    valid={validateModal}
                    {...config.current.messages[config.current.currentIndex]}
                />
            }
            <div className={`${currentStep === 3 ? "step_quiz_4" : "step_quiz"}`}>
                <Stepper style={{ flex: 1 }}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">

                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <ModalSteps
                                day={2}
                                part={2}
                                onClose={() => {
                                    decrementCurrentStep();
                                    setShowModal(false);
                                    config.current.currentIndex = 3;
                                }}
                                show={showM1}
                                modeEdit={modeEdit}
                                onValidate={() => {
                                    setShowModal(true);
                                }}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="3" name="Step 3">
                            <Dropzone
                                modeEdit={modeEdit}
                                day={2}
                                part={3}
                                callback={dragDropUpdateDecisions}
                                decisions={decisions}
                                categories={categories}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="4" name="Step 4">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day2"}
                                part={"part4"}
                                decisions={decisions1}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day2.part4.decisions_title")}
                                s_title={t("day2.part4.decisions_s_title")}
                                listQuestions={[37, 38, 39, 40].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day2.part4.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="5" name="Step 5">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day2"}
                                part={"part5"}
                                decisions={decisions2}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day2.part5.decisions_title")}
                                s_title={t("day2.part5.decisions_s_title")}
                                listQuestions={[41, 42, 43, 44].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day2.part5.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>

                        <Stepper.Step id="6" name="Step 6">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day2"}
                                part={"part6"}
                                decisions={decisions3}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day2.part6.decisions_title")}
                                s_title={t("day2.part6.decisions_s_title")}
                                listQuestions={[45, 46, 47, 48].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day2.part6.decisions.${elem}`)
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

const Day2 = (props) => {
    const history = useHistory();
    const refDaySteper = useRef();
    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const { center } = useSelector((state) => state.PvChallenge);
    const { loading } = useSelector((state) => state.DaysPvCh);
    const [showBolck, setShowBolck] = useState(false);
    const [ValidTask, setValidTask] = useState(false);
    const { currentStep } = useStepper();

    useEffect(() => {
        if (currentStep === 2) {
            setShowBolck(false);
        } else {
            setShowBolck(true);
        }
    }, [currentStep]);


    useEffect(() => {
        const currentDay = center.days?.find((d) => d.day_id === 2);

        if (currentDay?.status === -1) {
            history.push("/parcours");
        }

        if (currentDay?.status === 1) {
            setModeEdit(false);
            setValidTask(true);
            dispatch(day2getDetail(center.mission_id));
        } else {
            dispatch(clearDayData(2));
        }
    }, []);

    const listMsg = [
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg1"),
            audio: Level2Audio.audio1
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg2"),
            audio: Level2Audio.audio2
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg3"),
            audio: Level2Audio.audio3
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg4"),
            audio: Level2Audio.audio4
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg5"),
            audio: Level2Audio.audio5
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg6"),
            audio: Level2Audio.audio6
        },
        {
            title: t("day2.listMsg.title"),
            text: t("day2.listMsg.msg7"),
            audio: Level2Audio.audio7
        }

    ]


    return (

        <div className="container-day-4-pvch">
            {loading && <Loader />}

            <ModalTutorial
                personnageImage={img1}

                listMsg={listMsg}
                backGrandImage={backImageMode}
                title="My Modal"
                show={showTuto}
                onClose={() => {
                    setShowTuto(false);
                    refDaySteper.current.start();
                }}
                video={{
                    id: "1x8czN1ya8Utqm7V8r3Xc8r_vVu8URVns",
                    title: "Organisation et règlementation de la PV"
                }}
            />


            {showBolck && (
                <div className="box box-1">
                    <div className="pup">
                        <h3>{t("day2.leftMsg.title")}</h3>
                        <p>
                            {t(`day2.leftMsg.message${currentStep + 1}`)}
                        </p>
                    </div>
                    <div className="perso_image">
                        <img src={img3} className="imgPrs3" />
                        <img src={img4} className="imgPrs4" />
                    </div>
                </div>
            )}
            <div className="box box-2">
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
                        {t("day2.niveau")}
                    </h3>
                    <p>
                        {t(`day2.part${currentStep + 1}.title`)}
                    </p>


                </div>

                <div className="box-2-3">
                    <DaySteper
                        ref={refDaySteper}
                        t={t}
                        modeEdit={modeEdit}
                        ValidTask={ValidTask}
                        setValidTask={setValidTask}
                        dispatch={dispatch}
                        history={history}
                        center={center}
                    />
                </div>

            </div>
        </div>

    );
};

export default () => <StepperProvider> <Day2 /> </StepperProvider>;
