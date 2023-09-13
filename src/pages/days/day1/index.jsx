import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Level1Audio from "../../../assets/audio/Niv1/index.js";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import PreLoaderWidget from "../../../components/Loader.jsx";
import Modal1 from "../../../components/modal/modal1/index.jsx";
import CancelButton from "../../../components/pvCh/CancelButton/index.jsx";
import ModalTutorial from "../../../components/pvCh/ModalTutorial/ModalTutorial.jsx";
import NextButton from "../../../components/pvCh/NextButton/index.jsx";
import Stepper from "../../../components/pvCh/Stepper/Stepper.jsx";
import { StepperProvider } from "../../../components/pvCh/Stepper/context/index.jsx";
import { useStepper } from "../../../components/pvCh/Stepper/hook.js";
import ConfirmationModal from "../../../components/pvCh/day1/ConfirmationModal/ConfirmationModal.jsx";
import ScoreModal from "../../../components/pvCh/day1/ScoreModal/StepModal.jsx";
import Profile from "../../../components/pvCh/profile/profile.jsx";
import ShowTuto from "../../../components/pvCh/showTuto/ShowTuto.jsx";
import {
    // ChangeSelectedRadio,
    clearDayData,
    day1getDetail,
    // day1Part3Change,
    dragDropUpdateDecisions
} from "../../../redux/daysPvCh/actions.js";
import "./style.scss";
// import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
// import img3 from "../../../assets/images/pv-challenge/character/Ingénieur social.png"; 

import img3 from "../../../assets/Ingénieur social.png";

// import img4 from "../../../assets/images/pv-challenge/character/character_c.png"
// import dayOne from "../../../components/pvCh/dayOne/day.jsx";
import { useHistory } from "react-router-dom";
import Listlink from "../../../components/pvCh/Listlink/Listlink.jsx";
import Card from "../../../components/pvCh/card/Card.jsx";
import Row from "../../../components/pvCh/row/Row.jsx";
import Table from "../../../components/pvCh/table/Table.jsx";
import TableSec from "../../../components/pvCh/table2/TableSec.jsx";
import DayOne from "./DayOne.jsx";
import Matrix from "../../../components/Matrix/index.jsx";
import MatrixDrd from "../../../components/MatrixDrd/index.jsx";


const DaySteper = ({ t, modeEdit, ValidTask, dispatch, day1, center, history, setStp }) => {

    // const {decisions: decisions_2, categories: categories_2} = useSelector((state) => state.DaysPvCh.day1.part2);

    const { decisions: decisions_3, categories: categories_3 } = useSelector((state) => state.DaysPvCh.day1.part3);
    // const {decisions: decisions_7} = useSelector((state) => state.DaysPvCh.day1.part7);


    const [showScoreModal, setShowScoreModal] = useState(false);

    const ref = useRef({ day1 });

    useEffect(() => {
        ref.current.day1 = day1;
    }, [_.isEqual(ref?.current?.day1, day1)]);

    useEffect(() => {
        config.current.modeEdit = modeEdit;

    }, [modeEdit]);

    // -> 2,6
    const config = useRef({
        messages: [
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text1"),
                showCancelBtn: true,
                textBtnValid: t("day1.messages.textBtnValid"),
                audio: Level1Audio.audio6,
                textBtnNotValid: t("pasEncore"),
                valid: () => {
                    config.current.currentIndex += 1;
                    incrementCurrentStep();
                }
            },
            // {
            //     title: 2,//t("day1.messages.title"),
            //     text: t("day1.messages.text1"),
            //     showCancelBtn: true,
            //     textBtnValid: t("day1.messages.textBtnValid"),
            //     audio: Level1Audio.audio6,
            //     textBtnNotValid:t("pasEncore"),
            //     valid: () => {
            //         config.current.currentIndex += 1;
            //         incrementCurrentStep();
            //     }    
            // },
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text1"),
                showCancelBtn: true,
                textBtnValid: t("day1.messages.textBtnValid"),
                textBtnNotValid: t("pasEncore"),
                audio: Level1Audio.audio6,
                valid() {
                    setTimeout(sendData, 1000)
                }
            }
            , {

                title: t("day1.messages.title"),//t

                title: t("day1.messages.title"),

                text: t("day1.messages.text4"),
                showCancelBtn: false,
                textBtnValid: t("day1.messages.textBtnValid2"),
                textBtnNotValid: t("pasEncore"),
                audio: Level1Audio.felicitation,
                valid() {
                    history.push("/");
                }
            }
        ],
        is_first_time: false,
        currentIndex: 0,
        modeEdit
    });

    const sendData = () => {

        config.current.currentIndex += 1;
        setShowConfirm(true);

        // config.current.currentIndex += 1;
        // if (config.current.modeEdit) {

        //     const option = {
        //         day_index: 1,
        //         parts: {
        //             1: {
        //                 type: "select"
        //             },
        //             2: {
        //                 type: "dgd"
        //             },
        //             3: {
        //                 type: "dgd"
        //             }
        //         },
        //         // correctResponse: [2]
        //     }
        //     dispatch(validDay(center.missionId, 1, option, (success) => {

        //             if (!success) return history.push("/");


        //              setShowConfirm(true);


        //     }));

        // } else {
        //     setShowConfirm(true);
        // }

    }

    const [show, setShowConfirm] = useState(false);

    const { incrementCurrentStep, decrementCurrentStep, currentStep } = useStepper();


    const nextStep = () => {
        if ([2, 3, 4, 5].includes(currentStep)) return incrementCurrentStep();

        setShowConfirm(true);
    }

    useEffect(() => {
        setStp(currentStep)
    }, [currentStep]);

    // {currentStep===3 && (<div className="box box-2" style={{backgroundColor:'greenyellow'}}></div>)}

    const [showNextBtn, setShowNextBtn] = useState(true);

    return (
        <>
            <ConfirmationModal
                show={show}
                close={() => setShowConfirm(false)}
                rotateImage={true}
                {...config.current.messages[config.current.currentIndex]}
            />
            <ScoreModal
                show={showScoreModal}
                close={() => setShowScoreModal(false)}
                valid={() => {
                    history.push("/pv-challenge");
                }}
            />
            <div className={`${currentStep === 3 ? "step_quiz_4" : "step_quiz"}`}>
                <Stepper style={{ flex: 1 }}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">
                            <DayOne onNext={incrementCurrentStep} />
                            {/* <Matrix /> */}
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <Dropzone
                                modeEdit={modeEdit}
                                day={1}
                                part={3}
                                callback={dragDropUpdateDecisions}
                                decisions={decisions_3}
                                categories={categories_3}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="3" name="Step 3">
                            <Matrix nextStep={nextStep} />
                        </Stepper.Step>
                        <Stepper.Step id="4" name="Step 4">
                            <MatrixDrd nextStep={nextStep} />
                        </Stepper.Step>
                        <Stepper.Step id="5" name="Step 5">
                            <div>
                                <Row
                                    showNextBtn={setShowNextBtn} />
                            </div>
                        </Stepper.Step>
                        <Stepper.Step id="6" name="Step 6">
                            <div>
                                <Listlink
                                    data={t("day1.part7.decisions", { returnObjects: true })}
                                    modeEdit={modeEdit}
                                    handleChange={() => alert("1010101")}
                                />
                            </div>
                        </Stepper.Step>
                        <Stepper.Step id="7" name="Step 7">
                            <div>
                                <Card />
                            </div>
                        </Stepper.Step>

                    </Stepper.Steps>
                </Stepper>
                {![0, 2, 3].includes(currentStep) && <div className={"step_quiz_btn"}>
                    <CancelButton onClick={() => history.push("/")} className={"step_btn_cancel"} />
                    {/* {showNextBtn &&  */}
                    <NextButton className={"step_quiz_btn_next2"}
                        onClick={nextStep}
                    />
                    {/* } */}
                </div>}
            </div>
        </>
    )
}


const Day1PvPharma = (props) => {
    const { t } = useTranslation();

    // const config = useRef({
    //     messages: [
    //         {
    //             title: t("day1.messages.title"),
    //             text: t("day1.messages.text3"),
    //             showCancelBtn: false,
    //             textBtnValid: t("day1.messages.textBtnValid2"),
    //             audio: Level1Audio.audio7
    //         },
    //     ],
    //     is_first_time: false,
    //     currentIndex: 0
    // });

    let history = useHistory();
    const [showM, setShowM] = useState(false);
    const [showM3, setShowM3] = useState(false);
    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);

    const dispatch = useDispatch();
    const { day1, loading } = useSelector((state) => state.DaysPvCh);
    const { center } = useSelector((state) => state.PvChallenge);
    const [showBolck, setShowBolck] = useState(true);
    let [stp_, setStp] = useState(1);
    const [ValidTask, setValidTask] = useState(false);
    const { currentStep } = useStepper();



    useEffect(() => {
        if ([0, 1, 2, 3, 6].includes(currentStep)) return setShowBolck(false);
        else if (!showBolck) return setShowBolck(true);

    }, [currentStep])


    useEffect(() => {
        const currentDay = center.days?.find((d) => d.dayId === 1);

        if (currentDay?.status === -1) {
            history.push("/parcours");
        }

        if (currentDay?.status === 1) {
            setModeEdit(false);
            setValidTask(true);
            dispatch(day1getDetail(center.missionId));
        } else {
            dispatch(clearDayData(1));
        }
    }, []);

    const listMsg = [
        {
            title: t("day1.listMsg.title"),
            text: t("day1.listMsg.text1"),
            audio: Level1Audio.audio1,
        }
        // ,
        // {
        //     title: t("day1.listMsg.title"),
        //     text: t("day1.listMsg.text2"),
        //     audio: Level1Audio.audio2,
        // 
        //
        //     title: t("day1.listMsg.title"),
        //     text: t("day1.listMsg.text3"),
        //     audio: Level1Audio.audio3,
        // },
        // {
        //     title: t("day1.listMsg.title"),
        //     text: t("day1.listMsg.text4"),
        //     audio: Level1Audio.audio4,
        // },
        // {
        //     title: t("day1.listMsg.title"),
        //     text: t("day1.listMsg.text5"),
        //     audio: Level1Audio.audio5,
        // }
    ]


    return (
        <div className="container-day-4-pv5">
            {loading && <PreLoaderWidget />}
            <ModalTutorial
                // pictureClass={"personne"}
                personnageImage={img1}
                listMsg={listMsg}
                title="My Modal"
                show={showTuto}
                video={{
                    id: "1KqKBdUcB5KvbVg7PRIQ-7HQBmjVUSQOG",
                    title: "Généralités de la Pharmacovigilance"
                }}
                onClose={() => {
                    setShowTuto(false);
                    if (!config.current.is_first_time) {
                        config.current.is_first_time = true;
                        setShowM(true);
                    }
                }}
            />
            {/* <ConfirmationModal
                    show={showM}
                    close={() => setShowM(false)}
                    valid={() => setShowM(false)}
                    rotateImage={true}
                    {...config.current.messages[config.current.currentIndex]}
                /> */}

            <Modal1
                show={showM3}
                close={() => {
                    setShowM3(false);
                    // props.history.push("/pv-pharma-5-game");
                }}
                text={t("modals.day1.expert.body")}
                title={t("modals.day1.expert.title")}
                btnText={t("menu.notee")}
            />

            {showBolck && (
                <div className="box box-1-pv-ch">
                    <div className="pup">
                        <h3>{t("day1.l_title")}</h3>
                        <p>
                            {t(`day1.part${stp_ + 1}.description`)}
                            <br />
                        </p>
                    </div>
                    <div className="perso_image">
                        <img src={img3} className="imgPrs3" />
                        {/* <img src={img4} className="imgPrs4"/> */}
                    </div>

                </div>
            )}

            <div className="box box-2">
                {![0, 2, 3].includes(currentStep) &&
                    <>
                        <div className="box-2-1_ew_pvch pt-2">
                            <div className="d-flex justify-content-center align-content-center align-items-center ">
                                <Profile title={center?.name} avatarId={center?.avatarId} />
                            </div>
                            <ShowTuto onClick={() => setShowTuto(true)} />
                        </div>
                        <div className="box-2-2_ew pt-0 pb-0">
                            <h3>
                                {t("day1.level")}
                            </h3>
                            <p>
                                {t(`day1.part${stp_ + 1}.g_title`)}
                            </p>
                        </div>
                    </>
                }


                <div className={`box-2-3 ${[0, 3].includes(currentStep) && "bg-block"}`}>
                    <DaySteper
                        t={t}
                        modeEdit={modeEdit}
                        ValidTask={ValidTask}
                        dispatch={dispatch}
                        center={center}
                        day1={day1}
                        history={history}
                        setStp={setStp}
                    />
                </div>

            </div>
        </div>
    );
};

export default () => <StepperProvider> <Day1PvPharma /> </StepperProvider>;
