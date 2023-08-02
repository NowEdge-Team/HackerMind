import React, {useEffect, useRef, useState} from "react";
import "./style.scss";
import Modal1 from "../../../components/modal/modal1/index.jsx";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import PreLoaderWidget from "../../../components/Loader.jsx";
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
    day1getDetail,
    day1Part3Change,
    dragDropUpdateDecisions,
    validDay
} from "../../../redux/daysPvCh/actions.js";
import ConfirmationModal from "../../../components/pvCh/day1/ConfirmationModal/ConfirmationModal.jsx";
import ListChois from "../../../components/pvCh/ListChois/ListChois.jsx";
import ScoreModal from "../../../components/pvCh/day1/ScoreModal/StepModal.jsx";
import Level1Audio from "../../../assets/audio/Niv1/index.js";
import Dropzone from "../../../components/Dropzone/Dropzone.jsx";
import _ from "lodash";
import img1 from "../../../assets/images/pv-challenge/character/character_1_11.png"
import img3 from "../../../assets/images/pv-challenge/character/character-3.png"
import img4 from "../../../assets/images/pv-challenge/character/character_c.png"
import {useHistory} from "react-router-dom";


const DaySteper = ({t, modeEdit, ValidTask, setShowBolck, dispatch, day1, center, history, setStp}) => {

    const {decisions: decisions_2, categories} = useSelector((state) => state.DaysPvCh.day1.part2);

    const {decisions} = useSelector((state) => state.DaysPvCh.day1.part1);

    const [showScoreModal, setShowScoreModal] = useState(false);

    const ref = useRef({day1});

    useEffect(() => {
        ref.current.day1 = day1;
    }, [_.isEqual(ref?.current?.day1, day1)]);

    useEffect(() => {
        config.current.modeEdit = modeEdit;

    }, [modeEdit]);

    const config = useRef({
        messages: [
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text1"),
                showCancelBtn: true,
                textBtnValid: t("day1.messages.textBtnValid"),
                audio: Level1Audio.audio6,
                textBtnNotValid:t("pasEncore"),
                valid: () => {
                    setShowBolck(false);
                    config.current.currentIndex = 1;
                    incrementCurrentStep();
                }
            },  
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text1"),
                showCancelBtn: true,
                textBtnValid: t("day1.messages.textBtnValid"),
                textBtnNotValid:t("pasEncore"),
                audio: Level1Audio.audio6,
                valid() {
                    setShowBolck(false);
                    setTimeout(sendData, 500)

                }
            },
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text4"),
                showCancelBtn: false,
                textBtnValid: t("day1.messages.textBtnValid2"),
                textBtnNotValid:t("pasEncore"),
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
        if (config.current.modeEdit) {

            const option = {
                day_index: 1,
                parts: {
                    1: {
                        type: "select"
                    },
                    2: {
                        type: "dgd"
                    }
                },
                correctResponse: [2]
            }
            dispatch(validDay(center.missionId, 1, option, (success) => {

                    if (!success) return history.push("/");


                     setShowConfirm(true);


            }));

        } else {
            setShowConfirm(true);
        }


    }


    const [show, setShowConfirm] = useState(false);

    const {incrementCurrentStep, decrementCurrentStep, currentStep} = useStepper();


    const nextStep = () => {
        setShowConfirm(true);
    }

    useEffect(() => {
        setStp(currentStep)
    }, [currentStep]);

    const handleChange = (ListDecision) => {
        dispatch(day1Part3Change(ListDecision))
    };

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
                <Stepper style={{flex: 1}}>
                    <Stepper.Steps>
                        <Stepper.Step id="1" name="Step 1">
                            <div>
                                <ListChois
                                    changeIsSelected={ChangeSelectedRadio}
                                    day={"day1"}
                                    part={"part1"}
                                    decisions={decisions}
                                    limit={1}
                                    t={t}
                                    modeEdit={modeEdit}
                                    title={t("day1.part1.decisions_title")}
                                    s_title={t("day1.part1.decisions_s_title")}
                                    listQuestions={[1, 2, 3].map((elem, index) => ({
                                        id: elem,
                                        text: t(`day1.part1.decisions.${elem}`)
                                    }))}
                                />
                            </div>
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <div>
                                <Dropzone
                                    modeEdit={modeEdit}
                                    day={1}
                                    part={2}
                                    callback={dragDropUpdateDecisions}
                                    decisions={decisions_2}
                                    categories={categories}
                                />
                            </div>
                        </Stepper.Step>
                    </Stepper.Steps>
                </Stepper>
                <div className={"step_quiz_btn"}>
                    <CancelButton onClick={() => history.push("/")}/>
                    <NextButton className={"step_quiz_btn_next2"}
                                onClick={nextStep}/>
                </div>
            </div>
        </>
    )
}

const Day1PvPharma = (props) => {
    const {t} = useTranslation();

    const config = useRef({
        messages: [
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text3"),
                showCancelBtn: false,
                textBtnValid: t("day1.messages.textBtnValid2"),
                audio: Level1Audio.audio7
            },
        ],
        is_first_time: false,
        currentIndex: 0
    });
    let history = useHistory();
    const [showM, setShowM] = useState(false);
    const [showM3, setShowM3] = useState(false);
    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);

    const dispatch = useDispatch();
    const {day1, loading} = useSelector((state) => state.DaysPvCh);
    const {center} = useSelector((state) => state.PvChallenge);
    const [showBolck, setShowBolck] = useState(true);
    let [stp_, setStp] = useState(1);
    const [ValidTask, setValidTask] = useState(false);
    const {currentStep} = useStepper();

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
        },
        {
            title: t("day1.listMsg.title"),
            text: t("day1.listMsg.text2"),
            audio: Level1Audio.audio2,
        },
        {
            title: t("day1.listMsg.title"),
            text: t("day1.listMsg.text3"),
            audio: Level1Audio.audio3,
        },
        {
            title: t("day1.listMsg.title"),
            text: t("day1.listMsg.text4"),
            audio: Level1Audio.audio4,
        },
        {
            title: t("day1.listMsg.title"),
            text: t("day1.listMsg.text5"),
            audio: Level1Audio.audio5,
        }
    ]

    return (
        <StepperProvider>
            <div className="container-day-4-pv5">
                {loading && <PreLoaderWidget/>}
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
                <ConfirmationModal
                    show={showM}
                    close={() => setShowM(false)}
                    valid={() => setShowM(false)}
                    rotateImage={true}
                    {...config.current.messages[config.current.currentIndex]}
                />

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
                                <br/>
                            </p>
                        </div>
                        <div className="perso_image">
                            <img src={img3} className="imgPrs3"/>
                            <img src={img4} className="imgPrs4"/>
                        </div>
                        
                    </div>
                )}
                <div className="box box-2">
                    <div className="box-2-1_ew_pvch pt-2">
                        <div className="d-flex justify-content-center align-content-center align-items-center ">
                            <Profile title={center?.name} avatarId={center?.avatarId}/>
                        </div>
                        <ShowTuto onClick={() => setShowTuto(true)}/>
                    </div>
                    <div className="box-2-2_ew pt-0 pb-0">
                        <h3>
                            {t("day1.level")}
                        </h3>
                        <p>
                            {t(`day1.part${stp_ + 1}.g_title`)}
                        </p>
                        {stp_ === 1 &&
                            <p className={"desc"}>
                                {t(`day1.part${stp_ + 1}.s_description`)}
                            </p>
                        }
                    </div>
                    <div className="box-2-3">
                        <DaySteper
                            t={t}
                            modeEdit={modeEdit}
                            ValidTask={ValidTask}
                            setShowBolck={setShowBolck}
                            dispatch={dispatch}
                            center={center}
                            day1={day1}
                            history={history}
                            setStp={setStp}
                        />
                    </div>

                </div>
            </div>
        </StepperProvider>
    );
};

export default () => <StepperProvider> <Day1PvPharma/> </StepperProvider>;
