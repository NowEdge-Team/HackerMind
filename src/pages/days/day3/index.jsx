import React, {forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";
import "./style.scss";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Profile from "../../../components/pvCh/profile/profile.jsx";
import ShowTuto from "../../../components/pvCh/showTuto/ShowTuto.jsx";
import Stepper from "../../../components/pvCh/Stepper/Stepper.jsx";
import {useStepper} from "../../../components/pvCh/Stepper/hook.js";
import {StepperProvider} from "../../../components/pvCh/Stepper/context/index.jsx";
import NextButton from "../../../components/pvCh/NextButton/index.jsx";
import CancelButton from "../../../components/pvCh/CancelButton/index.jsx";
import ModalTutorial from "../../../components/pvCh/ModalTutorial/ModalTutorial.jsx";
import {
    ChangeSelectedRadio,
    clearDayData,
    day3getDetail,
    dragDropUpdateDecisions,
    validDay
} from "../../../redux/daysPvCh/actions.js";
import ConfirmationModalDay2 from "../../../components/pvCh/day2/ConfirmationModal/ConfirmationModal.jsx";
import {Stack} from "@mui/material";
import {useHistory} from "react-router-dom";
import backImageMode from "../../../assets/images/pv-challenge/images/background_5_m33.png"
import Level3Audio from "../../../assets/audio/Niv3/index.js";
import ListSelect from "../../../components/pvCh/ListSelect/index.jsx";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import Loader from "../../../components/Loader.jsx";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png";
import img2 from "../../../assets/images/pv-challenge/character/character_1.png"
import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
import img4 from "../../../assets/images/pv-challenge/character/character_c.png"


function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const DaySteper = forwardRef(({t, modeEdit, ValidTask, setValidTask, setShowBolck, setStp, history, dispatch}, ref) => {
    const {day3, loading} = useSelector((state) => state.DaysPvCh);
    const {decisions, categories} = useSelector((state) => state.DaysPvCh.day3.part2);

    const {center} = useSelector((state) => state.PvChallenge);
    const decisions1 = useSelector((state) => state.DaysPvCh.day3.part1.decisions);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        config.current.modeEdit = modeEdit;

    }, [modeEdit]);

    const sendData = () => {

        config.current.currentIndex += 1;
        if (config.current.modeEdit) {

            const option = {
                day_index: 1,
                parts: {
                    1: {
                        type: "select",
                    },
                    2: {
                        type: "dgd",
                    }
                },
                correctResponse: [49, 52, 55, 58, 61]
            }

            dispatch(validDay(center.missionId, 3, option, (success) => {

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
                title: t("day3.messages.title"),
                text: t("day3.messages.message1"),
                showCancel: false,
                textBtnValid: t("day3.messages.validation.textBtnValid2"),
                audio: Level3Audio.audio8,
                valid: () => {

                    config.current.currentIndex += 1;
                    setShowModal(false);

                }

            },
            {
                title: t("day3.messages.validation.title"),
                text: t("day3.messages.validation.text"),
                textBtnValid: t("day3.messages.validation.textBtnValid"),
                textBtnCancel:t("btnBack"),

                showCancel: true,
                audio: Level3Audio.audio10,
                valid: () => {
                    setShowBolck(false);
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }

            },
            {
                title: t("day3.messages.validation.title"),
                text: t("day3.messages.validation.text"),
                textBtnValid: t("day3.messages.validation.textBtnValid"),
                textBtnCancel:t("btnBack"),
                showCancel: true,
                audio: Level3Audio.audio10,
                valid: () => {
                    setShowModal(false);

                    setTimeout(sendData, 500);
                }

            },

            {
                title: t("day3.messages.validation.title"),
                text: t("day3.messages.validation.text1"),
                textBtnValid: t("day3.messages.validation.textBtnValid2"),
                showCancel: false,
                imgP: img2,
                audio: Level3Audio.audio9,
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


    const {incrementCurrentStep, decrementCurrentStep, currentStep} = useStepper();


    const nextStep = () => {

        if (currentStep === 1 && config.current.currentIndex === 6) {
            setShowBolck(true);
            incrementCurrentStep();
        }


        setShowModal(true);


    }

    const closeModal = () => {
        setShowModal(false);
    }


    const validateModal = async () => {

        setShowModal(true);
        return;
        setShowModal(false);

        await sleep(200)
        config.current.currentIndex += 1;

        if (config.current.currentIndex >= 2) {
            if (currentStep === 0) {
                setShowBolck(false);
                incrementCurrentStep();
                setShowModal(true);
            } else if (currentStep === 1 && config.current.currentIndex === 3) {
                setShowModal(true);
            } else if (currentStep === 1 && config.current.currentIndex === 5) {
                if (config.current.modeEdit) {

                    const option = {
                        day_index: 1,
                        parts: {
                            1: {
                                type: "select",
                            },
                            2: {
                                type: "dgd",
                            }
                        },
                        correctResponse: [65, 68, 71, 73, 77]
                    }

                    dispatch(validDay(center.missionId, 3, option, () => {
                        return history.push("/");
                    }));

                } else {
                    history.push("/");
                }

                setShowBolck(true);
                config.current.currentIndex += 1;
                incrementCurrentStep();
                setTimeout(() => {
                    setShowModal(true);
                }, 200)


            }
        }
    }

    const handleChange = (ListDecision) => {
        dispatch(ChangeSelectedRadio(ListDecision, 'day3', 'part1'));
    }

    return (
        <>
            <ConfirmationModalDay2
                index={config.current.currentIndex}
                show={showModal}
                close={closeModal}
                valid={validateModal}
                {...config.current.messages[config.current.currentIndex]}

            />
            <div className={`${currentStep === 3 ? "step_quiz_4" : "step_quiz"}`}>
                <Stepper style={{flex: 1}}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">
                            <ListSelect
                                data={t("day3.part1.decisions", {returnObjects: true})}
                                modeEdit={modeEdit}
                                handleChange={handleChange}
                                chooses={decisions1}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <Dropzone
                                modeEdit={modeEdit}
                                day={3}
                                part={2}
                                callback={dragDropUpdateDecisions}
                                decisions={decisions}
                                categories={categories}
                            />
                        </Stepper.Step>
                    </Stepper.Steps>
                </Stepper>
                <div className={"step_quiz_btn"}>
                    <CancelButton onClick={() => history.push("/parcours")}/>
                    <NextButton className={"step_quiz_btn_2"} onClick={config.current.enableNextBtn ? nextStep : null}/>
                </div>
            </div>
        </>)
})

const Day3 = (props) => {
    const history = useHistory();
    const refDaySteper = useRef();


    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {center} = useSelector((state) => state.PvChallenge);
    const {loading} = useSelector((state) => state.DaysPvCh);

    const [showBolck, setShowBolck] = useState(true);
    const [stp_, setStp] = useState(0);
    const [ValidTask, setValidTask] = useState(false);
    const {currentStep} = useStepper();

    useEffect(() => {
        const currentDay = center.days?.find((d) => d.dayId === 3);

        if (currentDay?.status === -1) {
            history.push("/parcours");
        }

        if (currentDay?.status === 1) {
            setModeEdit(false);
            setValidTask(true);
            dispatch(day3getDetail(center.missionId));
        } else {
            dispatch(clearDayData(3));
        }

    }, []);

    const listMsg = [
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message1`),
            audio: Level3Audio.audio1

        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message2`),
            audio: Level3Audio.audio2
        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message3`),
            audio: Level3Audio.audio3
        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message4`),
            audio: Level3Audio.audio4
        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message5`),
            audio: Level3Audio.audio5
        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message6`),
            audio: Level3Audio.audio6
        },
        {
            title: t(`day3.message_tuto.title`),
            text: t(`day3.message_tuto.message7`),
            audio: Level3Audio.audio7
        },
        



    ]


    return (

        <div className="container-day-4-ins">
            {loading && <Loader/>}

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
                <div className="box box-1-day3">
                    <div className="pup">
                        <h3>{t("day3.leftMsg.title")}</h3>
                        <p>
                            {t(`day3.leftMsg.message${currentStep + 1}`)}
                        </p>
                    </div>
                    <div className="perso_image">
                        <img src={img3} className="imgPrs3"/>
                        <img src={img4} className="imgPrs4"/>
                    </div>

                </div>
            )}
            <div className="box box-2" style={{paddingTop: `${currentStep === 1 ? "75px" : ""}`}}>
                <div className="box-2-1_ew pt-2">
                    <div className="d-flex justify-content-center align-content-center align-items-center ">
                        <Profile title={center?.name} avatarId={center?.avatarId}/>
                    </div>
                    <Stack direction={"row"} spacing={1}>
                        <ShowTuto onClick={() => setShowTuto(true)}/>
                    </Stack>
                </div>
                <div className="box-2-2_ew pt-0 pb-0">
                    <h3>
                        {t("day3.niveau")}
                    </h3>
                    <p>
                        {t(`day3.part${currentStep + 1}.title`)}
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

export default () => <StepperProvider> <Day3/> </StepperProvider>;
