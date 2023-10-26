import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import Level1Audio from "@/assets/audio/Niv1/index.js";
import img1 from "@/assets/images/pv-challenge/character/character_1_11.png";
import Dropzone from "@/components/Dropzone/Dropzone.jsx";
import PreLoaderWidget from "@/components/Loader.jsx";
import Modal1 from "@/components/modal/modal1/index.jsx";
import CancelButton from "@/components/pvCh/CancelButton/index.jsx";
import ModalTutorial from "@/components/pvCh/ModalTutorial/ModalTutorial.jsx";
import NextButton from "@/components/pvCh/NextButton/index.jsx";
import Stepper from "@/components/pvCh/Stepper/Stepper.jsx";
import { StepperProvider } from "@/components/pvCh/Stepper/context/index.jsx";
import { useStepper } from "@/components/pvCh/Stepper/hook.js";
import ConfirmationModal from "@/components/pvCh/day1/ConfirmationModal/ConfirmationModal.jsx";
import ScoreModal from "@/components/pvCh/day1/ScoreModal/StepModal.jsx";
import ShowTuto from "@/components/pvCh/showTuto/ShowTuto.jsx";
import {
    clearDayData,
    dayGetDetail,
    dragDropUpdateDecisions, setCurrentAvatar, validDay
} from "../../../redux/levels/actions.js";
import "./style.scss";
import img3 from "@/assets/Ingénieur social.png";
import { useHistory } from "react-router-dom";
import Card from "@/components/pvCh/card/Card.jsx";
import DayOne from "./DayOne.jsx";
import Matrix from "../../../components/Matrix/index.jsx";
import MatrixDrd from "../../../components/MatrixDrd/index.jsx";
import tor from "../../../assets/Tor_logo.png"
import metasploit from "../../../assets/metasploitlogo.png"
import nmap from "../../../assets/nmaplogo.png"
import shodan from "../../../assets/shodanlogo.png"
import burpsuite from "../../../assets/burpsuitelogo.png"


import BackButton from "@/components/pvCh/BackButton/index.jsx";
import { mScoreLevel } from "@/components/ScoreLevel/index.jsx";
import HeaderProfile from "@/components/HeaderPrfile/index.jsx";
import { updateAvatar } from "@/redux/levels/service.js";



const Step2 = ({ modeEdit, dragDropUpdateDecisions, decisions_3, categories_3, imgBib, t }) => {

    const [showTuto, setShowTuto] = useState(true);

    return (<>
        <ModalTutorial
            // pictureClass={"personne"}
            personnageImage={img1}
            listMsg={[{
                title: "LE HACKER EN CHEF",
                text: "Je vais voir maintenant si tu as bien compris à quoi nous servent ces outils au quotidien.",
                audio: Level1Audio.audio2,
            }]}
            title="My Modal"
            show={showTuto}
            video={{
                id: "1KqKBdUcB5KvbVg7PRIQ-7HQBmjVUSQOG",
                title: "Généralités de la Pharmacovigilance"
            }}
            onClose={() => {
                setShowTuto(false);

            }}
        />
        <Dropzone
            modeEdit={modeEdit}
            day={1}
            part={1}
            callback={dragDropUpdateDecisions}
            decisions={decisions_3}
            categories={categories_3}
            imgBib={imgBib}
        />
    </>)

}


const DaySteper = ({ t, modeEdit, ValidTask, dispatch, day1, center, history, setStp }) => {


    const { part1, part2 } = useSelector((state) => state.Levels.day1);

    const [showScoreModal, setShowScoreModal] = useState(false);
    const closeDay = useSelector(state => state.PvChallenge?.closeDay);

    const ref = useRef({ day1 });

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
                // audio: Level1Audio.audio6,
                textBtnNotValid: t("pasEncore"),
                valid: () => {
                    config.current.currentIndex += 1;
                    incrementCurrentStep();
                }
            },
            {
                title: t("day1.messages.title"),
                text: t("day1.messages.text1"),
                showCancelBtn: true,
                textBtnValid: t("day1.messages.textBtnValid"),
                textBtnNotValid: t("pasEncore"),
                // audio: Level1Audio.audio6,
                valid: () => {
                    setTimeout(sendData, 1000)
                }
            }
            ,
            {

                title: t("day1.messages.title"),
                text: t("day1.messages.text4"),
                showCancelBtn: false,
                textBtnValid: t("day1.messages.textBtnValid2"),
                textBtnNotValid: t("pasEncore"),
                audio: Level1Audio.felicitation,
                valid: async () => {
                    if (closeDay !== null)
                        await mScoreLevel();
                    history.push({
                        pathname: '/',
                        state: { showBadge: true },
                    })

                }
            }
        ],
        is_first_time: false,
        currentIndex: 0,
        modeEdit,
        avatarId: 1
    });

    const sendData = () => {
        config.current.currentIndex += 1;
        if (config.current.modeEdit) {

            const option = {
                day_index: 1,
                parts: {
                    1: {
                        type: "dgd"
                    },
                    2: {
                        type: "matrixDrd"
                    }
                },
            }

            dispatch(setCurrentAvatar(null, true));

            dispatch(validDay(center.mission_id, 1, option, (success) => {
                updateAvatar(center.game_session_id, config.current.avatarId);
                if (!success) return history.push("/", { showBadge: true });
                setShowConfirm(true);
            }));

        } else {
            setShowConfirm(true);
        }
    }

    const [show, setShowConfirm] = useState(false);

    const { incrementCurrentStep, decrementCurrentStep, currentStep } = useStepper();

    const nextStep = () => {
        if ([2, 3].includes(currentStep)) return incrementCurrentStep();

        setShowConfirm(true);
    }

    useEffect(() => {
        setStp(currentStep)
    }, [currentStep]);


    const [showNextBtn, setShowNextBtn] = useState(true);

    const imgBib = [
        tor,
        shodan,
        nmap,
        burpsuite,
        metasploit
    ]


    const onBackStep = () => {
        if ([2, 4].includes(currentStep)) {
            config.current.currentIndex -= 1;
        }
        decrementCurrentStep()
    }

    const onSelectAvatar = (id) => {

        config.current.avatarId = id;
    }


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
                        </Stepper.Step>
                        <Stepper.Step id="2" name="Step 2">
                            <Step2
                                modeEdit={modeEdit}
                                day={1}
                                part={1}
                                dragDropUpdateDecisions={dragDropUpdateDecisions}
                                decisions_3={part1.decisions}
                                categories_3={part1.categories}
                                imgBib={imgBib}
                                t={t}
                            />
                        </Stepper.Step>
                        <Stepper.Step id="3" name="Step 3">
                            <Matrix nextStep={nextStep} onBack={onBackStep} />
                        </Stepper.Step>
                        <Stepper.Step id="4" name="Step 4">
                            <MatrixDrd nextStep={nextStep} onBack={onBackStep} />
                        </Stepper.Step>
                        <Stepper.Step id="5" name="Step 5">
                            <div>
                                <Card onSelectAvatar={onSelectAvatar} modeEdit={modeEdit} />
                            </div>
                        </Stepper.Step>
                    </Stepper.Steps>
                </Stepper>
                {![0, 2, 3].includes(currentStep) && <div className={"step_quiz_btn"}>
                    <CancelButton onClick={() => history.push("/")} className={"step_btn_cancel"} />
                    <div className="flex flex-row gap-4" >
                        <BackButton className={"step_quiz_btn_next2"}
                            onClick={onBackStep}
                        />
                        <NextButton className={"step_quiz_btn_next2"}
                            onClick={nextStep}
                        />
                    </div>
                    {/* } */}
                </div>}
            </div>
        </>
    )
}


const Day1PvPharma = (props) => {
    const { t } = useTranslation();

    let history = useHistory();
    const [showM, setShowM] = useState(false);
    const [showM3, setShowM3] = useState(false);
    const [modeEdit, setModeEdit] = useState(true);
    const [showTuto, setShowTuto] = useState(true);

    const dispatch = useDispatch();
    const { level1, loading } = useSelector((state) => state.Levels);
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
            dispatch(dayGetDetail(1, center.mission_id));
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
    ]


    return (
        <div className="container-day-4-pv5">
            {loading && <PreLoaderWidget />}
            <ModalTutorial
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

                }}
            />

            <Modal1
                show={showM3}
                close={() => {
                    setShowM3(false);
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
                            {t(`day1.part${stp_}.description`)}
                            <br />
                        </p>
                    </div>
                    <div className="perso_image">
                        <img src={img3} className="imgPrs3" />
                    </div>

                </div>
            )}

            <div className="box box-2">
                {![0, 2, 3].includes(currentStep) &&
                    <>
                        <div className="box-2-1_ew_pvch pt-2">
                            <div className="d-flex justify-content-center align-content-center align-items-center ">
                                <HeaderProfile showCancel={false} />
                            </div>
                            <ShowTuto onClick={() => setShowTuto(true)} />
                        </div>
                        <div className="box-2-2_ew pt-0 pb-0">
                            <h3>
                                {t("day1.level")}
                            </h3>
                            <p>
                                {t(`day1.part${stp_}.g_title`)}
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
                        day1={level1}
                        history={history}
                        setStp={setStp}
                    />
                </div>

            </div>
        </div>
    );
};

export default () => <StepperProvider> <Day1PvPharma /> </StepperProvider>;
