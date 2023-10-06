import React, {forwardRef, useEffect, useRef, useState} from "react";
import "./style.scss";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import Loader from "../../../components/Loader.jsx";
import {StepperProvider} from "../../../components/pvCh/Stepper/context/index.jsx";
import ModalTutorial from "../../../components/pvCh/ModalTutorial/ModalTutorial.jsx";
import Level5Audio from "../../../assets/audio/Niv5/index.js"
import {
    ChangeSelectedRadio,
    clearDayData,
    day5getDetail,
    dragDropUpdateDecisions,
    validDay,
} from "../../../redux/daysPvCh/actions.js";
import backGimg from "../../../assets/images/pv-challenge/images/background_55_m5.png"
import DayOne from "./day.jsx";
import {useHistory} from "react-router-dom";
import ConfirmationModalDay2 from "../../../components/pvCh/day2/ConfirmationModal/ConfirmationModal.jsx";
import Stepper from "../../../components/pvCh/Stepper/Stepper.jsx";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import CancelButton from "../../../components/pvCh/CancelButton/index.jsx";
import NextButton from "../../../components/pvCh/NextButton/index.jsx";
import {useStepper} from "../../../components/pvCh/Stepper/hook.js";
import Profile from "../../../components/pvCh/profile/profile.jsx";
import {Stack} from "@mui/material";
import ShowTuto from "../../../components/pvCh/showTuto/ShowTuto.jsx";
import ListChois from "../../../components/pvCh/ListChois/ListChois.jsx";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png";
import img2 from "../../../assets/images/pv-challenge/character/character_1.png"
import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
import img4 from "../../../assets/images/pv-challenge/character/character_c.png"
import {faCheck, faTimes} from "@fortawesome/free-solid-svg-icons";


const DaySteper = forwardRef(({t, modeEdit, ValidTask, setShowBolck, dispatch, center, day1, history}, ref) => {

    const [showTuto, setShowTuto] = useState(true);
    const [showStart, setShowStart] = useState(false);
    const {incrementCurrentStep, currentStep} = useStepper();
    const {decisions, categories} = useSelector((state) => state.DaysPvCh.day5.part1);
    const decisions2 = useSelector((state) => state.DaysPvCh.day5.part2.decisions);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        config.current.modeEdit = modeEdit;
    }, [modeEdit]);

    const config = useRef({
        messages: [
            {
                title: t("day5.messages.title"),
                text: t("day5.messages.message1"),
                showCancel: false,
                textBtnValid: t("noted"),
                audio: Level5Audio.audio10,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);

                }

            },
            {
                title: t("day5.messages.validation.title"),
                text: t("day5.messages.validation.text"),
                textBtnValid: t("day5.messages.validation.textBtnValid"),
                showCancel: true,
                textBtnCancel:t("btnBack"),
                audio: Level5Audio.audio11,
                valid: async () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    setShowBolck(true);
                    incrementCurrentStep();

                    await sleep(500)
                }

            },
            {
                title: t("day5.messages.validation.title"),
                text: t("day5.messages.validation.text"),
                textBtnValid: t("day5.messages.validation.textBtnValid"),
                textBtnCancel:t("btnBack"),
                showCancel: true,
                audio: Level5Audio.audio11,
                valid: () => {
                    config.current.currentIndex += 1;
                    setShowModal(false);
                    incrementCurrentStep();
                }

            },
            {
                title: t("day5.messages.title"),
                text: t("day5.messages.message4"),
                textBtnValid: t("day5.messages.validation.textBtnValid2"),
                textBtnCancel:t("btnBack"),
                showCancel: false,
                imgP:img2,
                audio: Level5Audio.audio14,
                valid: () => {
                    return history.push("/");
                }

            },

        ],
        currentIndex: 0,
        enableNextBtn: true,
        modeEdit
    });


    const listMsg = [
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text1"),
            audio: Level5Audio.audio1

        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text2"),
            template: 1,
            audio: Level5Audio.audio2
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text3"),
            audio: Level5Audio.audio3
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text4"),
            audio: Level5Audio.audio4
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text5"),
            audio: Level5Audio.audio5
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text6"),
            audio: Level5Audio.audio6
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text7"),
            audio: Level5Audio.audio7
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text8"),
            audio: Level5Audio.audio8
        },
        {
            title: t("day5.listMsg.title"),
            text: t("day5.listMsg.text9"),
            audio: Level5Audio.audio9
        },
    ]

    const nextStep = () => {
        setShowModal(true);
    }


    const saveData = (decisions) => {

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
                        type: "folder",
                        decisions
                    }
                },
                correctResponse: [126, 127, 128, 129, 130, 135, 136, 137, 138, 143, 144, 145, 151, 152, 153, 154]
            }
            dispatch(validDay(center.mission_id, 5, option, (success) => {

                if (!success) return history.push("/");

                setShowModal(true);

            }));
        } else {
            setShowModal(true);
        }


    }

    const closeModal = () => {
        setShowModal(false);
    }

    return (
        <>
            <ModalTutorial
                personnageImage={img1}
                backGrandImage={backGimg}
                listMsg={listMsg}
                title="My Modal"
                show={showTuto}
                onClose={() => {
                    setShowTuto(false);
                    setShowModal(true);
                }}
            />

            <ConfirmationModalDay2
                index={config.current.currentIndex}
                show={showModal}
                close={closeModal}
                {...config.current.messages[config.current.currentIndex]}
            />

            <div className={`${currentStep !== 2 ? "step_quiz" : ""}`}>
                <Stepper style={{flex: 1}}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">
                            <Dropzone
                                day={5}
                                part={1}
                                callback={dragDropUpdateDecisions}
                                decisions={decisions}
                                categories={categories}
                                modeEdit={modeEdit}
                                icons={[
                                    {
                                        color: 'green',
                                        icon: faCheck,
                                    },
                                    {
                                        icon: faTimes,
                                        color: 'red',
                                    }
                                ]}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <ListChois
                                changeIsSelected={ChangeSelectedRadio}
                                day={"day5"}
                                part={"part2"}
                                decisions={decisions2}
                                limit={1}
                                t={t}
                                modeEdit={modeEdit}
                                title={t("day5.part2.decisions_title")}
                                s_title={t("day5.part2.decisions_s_title")}
                                listQuestions={[124, 125, 126].map((elem, index) => ({
                                    id: elem,
                                    text: t(`day5.part2.decisions.${elem}`)
                                }))}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="3" name="Step 3">
                            <DayOne modeEdit={modeEdit} saveData={saveData}/>
                        </Stepper.Step>
                    </Stepper.Steps>
                </Stepper>
                {currentStep !== 2 &&
                    <div className={"step_quiz_btn"}>
                        <CancelButton onClick={() => history.push("/parcours")}/>
                        <NextButton className={"step_quiz_btn_2"} onClick={nextStep}/>
                    </div>
                }
            </div>
        </>
    )
})

const Day5 = (props) => {
    const refDaySteper = useRef();
    const history = useHistory();
    const [modeEdit, setModeEdit] = useState(true);
    const {currentStep} = useStepper();

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const {loading} = useSelector((state) => state.DaysPvCh);
    const {center} = useSelector((state) => state.PvChallenge);
    const [showBolck, setShowBolck] = useState(true);
    const [ValidTask, setValidTask] = useState(false);


    useEffect(() => {
        if (currentStep === 1) {
            setShowBolck(true);
        } else {
            setShowBolck(false);
        }
    }, [currentStep]);


    useEffect(() => {
        const currentDay = center.days?.find((d) => d.day_id === 5);

        if (currentDay?.status === -1) {
            history.push("/parcours");
        }

        if (currentDay?.status === 1) {
            setModeEdit(false);
            setValidTask(true);
            dispatch(day5getDetail(center.mission_id));
        } else {
            dispatch(clearDayData(5));
        }
    }, []);


    return (
        <>
            <div className="container-day-5-ins">
                {loading && <Loader/>}


                {showBolck && (
                    <div className="box box-1_pv5">
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
                <div className="box box-2">
                    {currentStep !== 2 &&
                        <>
                            <div className="box-2-1_ew pt-2">
                                <div className="d-flex justify-content-center align-content-center align-items-center ">
                                    <Profile title={center?.name} avatar_id={center?.avatar_id}/>
                                </div>
                                <Stack direction={"row"} spacing={1}>
                                    <ShowTuto onClick={() => setShowTuto(true)}/>
                                </Stack>
                            </div>
                            <div className="box-2-2_ew pt-0 pb-0">
                                <h3>
                                    {t("day5.niveau")}
                                </h3>
                                <p>
                                    {t(`day5.part${currentStep + 1}.title`)}
                                </p>
                            </div>
                        </>
                    }

                    <div className="box-2-3">
                        <DaySteper
                            ref={refDaySteper}
                            t={t}
                            modeEdit={modeEdit}
                            ValidTask={ValidTask}
                            setShowBolck={setShowBolck}
                            dispatch={dispatch}
                            center={center}
                            history={history}
                        />
                    </div>

                </div>
            </div>
        </>
    );
};

export default () => <StepperProvider> <Day5/> </StepperProvider>;
