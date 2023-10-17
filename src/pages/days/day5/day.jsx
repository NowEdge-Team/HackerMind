import React, {useContext, useEffect, useReducer, useRef, useState} from "react";
import {Modal} from "react-bootstrap";
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";

import img2 from "../../../assets/images/pv-challenge/image_37.png";
import img from "../../../assets/images/pv-challenge/phone.png";
import Modalexpert from "../../../components/modal/modalexpert/index.jsx";
import "./style.scss";
import img3 from "../../../assets/images/pv-challenge/images/group_7932.svg";
import CancelButton from "../../../components/pvCh/CancelButton/index.jsx";
import Level5Audio from "../../../assets/audio/Niv5/index.js"
import personage1 from "../../../assets/images/pv-challenge/character/Leader.png"
import ConfirmationModalDay2 from "../../../components/pvCh/day2/ConfirmationModal/ConfirmationModal.jsx";
import Audio from "../../../components/pvCh/day2/AudioPlayer/Audio.jsx";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBell , faArrowRight} from '@fortawesome/free-solid-svg-icons'
import {changeSelectDecisionsFolder} from "../../../redux/daysPvCh/actions.js";

function reducer(state, action) {
    let savedecisions_, index;
    switch (action.type) {
        case "CHANGE_TOTAL":
            savedecisions_ = state.savedecisions;

            index = savedecisions_.decisions.findIndex((elem) => elem === action.decisions_id);

            if (index === -1) {
                savedecisions_.decisions.push(action.decisions_id);
            } else {
                savedecisions_.decisions.splice(index, 1);
            }
            return {
                ...state, total: state.total + action.payload, savedecisions: savedecisions_,
            };
        case "CHANGE_TOTAL_DSS":
            index = state.list.findIndex((item) => item._id === action.elemP._id);


            let total = state.list[index].total;

            total = Number(total) + Number(action.payload);


            let {decisions} = state.savedecisions;


            const index_ = decisions.findIndex((elem) => elem === action.decisions_id);


            if (index_ === -1) {
                decisions = [...decisions, action.decisions_id];
            } else {
                decisions = decisions.filter(elem => elem !== action.decisions_id);
            }


            return {
                ...state, list: state.list.map((elem) => {
                    if (elem._id === action.elemP._id) return {...elem, total}
                    return elem;
                }), savedecisions: {
                    ...state.savedecisions, decisions
                }
            };


        case "R_SET_TOTAL":

            return {
                ...state, total: 60000
            };

        case "RESET_STEP_2":

            let t = 0;

            const list = state.savedecisions.decisions.filter(item_ => {
                const item = state.list[1].options.find(el => el.id_decision === item_);

                if (item) {
                    t += item.budget;


                    return false;
                }

                return true;
            });


            return {
                ...state, total: state.total - t, savedecisions: {
                    ...state.savedecisions, decisions: list
                }
            };

        default:
            return state;
    }
}

const Context = React.createContext();

const useDossier = () => {
    const contextValue = useContext(Context);
    return contextValue;
};

const NotifyModal = ({show, close = () => null}) => {
    const {t} = useTranslation();
    return (<Modal show={show} dialogClassName={"daysModal_pv5"} centered>
            <Modal.Body style={{minWidth: "100%", backgroundColor: "transparent"}}>
                <div className={"notifyModal_pv5"}>
                    <div className={"content-md"}>
                        <div className="pack-img">
                            <img src={img2} width="100%"/>
                        </div>
                        <div className="text-content">
                            <span>{t("day5.notifyModal.title")}</span>
                            <p>{t("day5.notifyModal.text")}</p>
                            <Audio src={Level5Audio.audio13}/>
                        </div>
                    </div>
                    <div
                        style={{
                            right: "37%", bottom: "4%", cursor: "pointer",
                        }}
                        className={"budget_restant-mod_pv5"}
                        onClick={() => {
                            close(false);
                        }}
                    >
                        <div style={{width: "115px", color: "white", backgroundColor: "#6E3EC4",paddingRight:"10px"}}>
                            <span style={{marginRight:"auto"}}>{t("day5.StepModalNote")}</span>
                            <FontAwesomeIcon width={16} icon={faArrowRight}/>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>);
};


const Item1 = ({modeEdit, elem, details, elemP, globalIndexItem, showBudget = true}) => {
    const [isClick, setIsClick] = useState(false);
    const [exist, setExist] = useState(false);
    const [redData, dispatch] = useDossier();
    const {t} = useTranslation();
    const _dispatch = useDispatch();

    const change = (val) => {
        dispatch({
            type: "CHANGE_TOTAL_DSS", payload: val, decisions_id: elem.id_decision, elemP
        });
    };
    const click = () => {

        _dispatch(changeSelectDecisionsFolder(elem.id_decision));

        if (!modeEdit) return;
        if (!isClick) {
            if (redData.list[globalIndexItem].total - elem.budget >= 0) {
                setIsClick(true);
                change(-elem.budget);
            }
        } else {
            setIsClick(false);

            change(+elem.budget);
        }
        // }
    };

    useEffect(() => {
        const exist_sv = details.findIndex((elem_) => elem_ === elem.id_decision);

        const exist_cr = redData.savedecisions.decisions.findIndex(_elem => elem.id_decision === _elem);

        const exist = exist_sv !== -1 ? true : exist_cr !== -1 ? true : false;
        // setExist(exist);
        setIsClick(exist)
    }, [])

    return (<div
            className={`item ${isClick ? "color-white b-color-blue" : ""}`}
            onClick={click}
        >
            <p className="">
                {t(`day5.initialState.${elem.id_decision}`)}
            </p>
            <div className="block " style={{textAlign: "right"}}>
                {/*{showBudget && <div className={`${isClick ? "color-white" : ""}`}>{elem.budget}</div>}*/}
                {/*<p*/}
                {/*    style={{textAlign: "right"}}*/}
                {/*    className={`${isClick ? "color-white" : ""}`}*/}
                {/*>*/}
                {/*    /!*{elem.unit}*!/*/}
                {/*</p>*/}
            </div>
        </div>);
};

const ListRow = ({
                     modeEdit,
                     data,
                     total,
                     max,
                     add = false,
                     limit,
                     type,
                     details,
                     indexItem,
                     elem_,
                     globalIndexItem,
                     showBudget
                 }) => {
    const [limit_, setlimit] = useState(limit);
    const [redData, dispatch] = useDossier();
    const [active, setActive] = useState(true);
    const [rnData, setRnData] = useState([]);

    useEffect(() => {
        const rnData_ = data.sort(() => Math.random() - 0.5)
        setRnData(rnData_)
        if (indexItem === 1) {

            const promise = new Promise((resolve, reject) => {

                const res = data.reduce((accumulator, currentValue) => {
                    let test = redData.savedecisions.decisions.find(element => element === currentValue.id_decision)
                    if (test) return accumulator + 1;
                    return accumulator;
                }, 0);

                resolve(res);

            });


            promise.then((value) => {
                if (value >= 5) {
                    //  active = false
                    setActive(false);
                }
            });


        }
    }, []);


    return (<div className="content-row">
            {rnData.map((elem, index) => {
                return (<React.Fragment key={index}>
                        <Item1 modeEdit={modeEdit} showBudget={showBudget} elemP={elem_} elem={elem}
                               details={details} globalIndexItem={globalIndexItem}/>
                    </React.Fragment>);
            })}
        </div>);
};

const Dossier1 = ({data, indexItem, close, details, cancel, showBudget = true, modeEdit}) => {
    const [redData, dispatch] = useDossier();
    const {t} = useTranslation();

    return (<div className={"desiModal_pv5"}>
            <div className={"header pb-2 mt-4"}>
                <h3>{t(`day5.initialState.${data?.list[indexItem]?.title}`)} </h3>
                <span>
          {t(`day5.initialState.${data?.list[indexItem]?.s_title}`)}
        </span>
            </div>
            <div className={"content"}>
                <ListRow
                    elem_={data.list[indexItem]}
                    data={data.list[indexItem].options}
                    total={redData.total}
                    max={data.list[indexItem].total}
                    dispatch={dispatch}
                    type={2}
                    details={details}
                    redData={redData}
                    globalIndexItem={indexItem}
                    showBudget={showBudget}
                    modeEdit={modeEdit}
                />
            </div>
            <div className={"footer-m"}>
                <div className="budget-restant-pup">
                      <span className="money-m">
                        {redData.list[indexItem].total}
                          {/*{indexItem === 0 &&*/}
                          {/*    t(`day5.initialState.${redData.list[0].unit}`)*/}
                          {/*}*/}
                      </span>
                    <span>
                        {t("day5.BudgetR")}
                        {/*{indexItem === 0 ? t("day5.BudgetR") : indexItem === 1 ? "actions restantes" : "choix restants"} */}
                    </span>
                </div>
                <div className="group-btn-f_pv5">
                    <button
                        onClick={() => cancel(indexItem)}
                        type="reset"
                        className="btn btn-secondary waves-effect waves-light mr-1 btn-save-cancel"
                    >
                        {t("day5.Annuler")}
                    </button>
                    <button
                        onClick={() => close(indexItem)}
                        className="btn-save-bv5 "
                    >
                        {t("day5.Enregistrer")}
                    </button>
                </div>
            </div>
        </div>);
};
const Dossier2 = ({data, indexItem, close, details, cancel}) => {
    const [total, setTotal] = useState(data.total);
    const [redData, dispatch] = useDossier();

    const {t} = useTranslation();
    return (<div className={"desiModal_pv5"}>
            <div className={"header pb-2"}>
                <h3>{t(`day5.initialState.${data.list[indexItem].title}`)}</h3>
                <span>
          {t(`day5.initialState.${data.list[indexItem].s_title}`)}
        </span>
            </div>
            <div className={"content"}>
                <ListRow
                    add={true}
                    data={data.list[indexItem].options}
                    limit={data.list[indexItem].limit}
                    total={total}
                    max={false}
                    dispatch={dispatch}
                    type={1}
                    details={details}
                    indexItem={indexItem}
                />
            </div>
            <div className={"footer-m"}>
                <div className="budget-restant-pup">
          <span className="money-m">
            {data.list[indexItem].total}
          </span>
                    <span>{t("day5.BudgetR")}</span>
                </div>
                <div className="group-btn-f">
                    <button
                        onClick={() => cancel(indexItem)}

                        type="reset"
                        className="btn btn-secondary waves-effect waves-light mr-1"
                    >
                        {t("day5.Annuler")}
                    </button>
                    <button
                        onClick={() => close(indexItem)}
                        className="btn btn-primary waves-effect waves-light "
                        type="submit"
                    >
                        {t("day5.Enregistrer")}
                    </button>
                </div>
            </div>
        </div>);
};

const ModalDesision = ({
                           data = [], show, close, step, indexItem = 1, details, cancel, modeEdit
                       }) => {
    return (<Modal show={show} dialogClassName={"daysModal_pv5"} centered>
            <Modal.Body style={{minWidth: "100%", backgroundColor: "transparent"}}>
                {(() => {
                    switch (indexItem) {
                        case 1:
                            return (<Dossier1
                                    data={data}
                                    indexItem={indexItem}
                                    close={close}
                                    details={details}
                                    cancel={(index) => cancel(index)}
                                    showBudget={false}
                                    modeEdit={modeEdit}
                                />);
                        case 2:
                            return (<Dossier1
                                    data={data}
                                    indexItem={indexItem}
                                    close={close}
                                    details={details}
                                    cancel={(index) => cancel(index)}
                                    showBudget={false}
                                    modeEdit={modeEdit}
                                />);
                        case 3:
                            return (<Dossier1
                                    data={data}
                                    indexItem={indexItem}
                                    close={close}
                                    details={details}
                                    cancel={(index) => cancel(index)}
                                    showBudget={false}
                                    modeEdit={modeEdit}
                                />);
                        default:
                            return (<Dossier1
                                    data={data}
                                    indexItem={indexItem}
                                    close={close}
                                    details={details}
                                    cancel={(index) => cancel(index)}
                                    modeEdit={modeEdit}
                                />);
                    }
                })()}
            </Modal.Body>
        </Modal>);
};

const DayOne = ({modeEdit, saveData}) => {
    const [showStart, setShowStart] = useState(false);
    const [phoneModal, setPhoneModal] = useState(false);
    const [notifyModal, setNotifyModal] = useState(false);
    const [notify, setNotify] = useState(true);
    const [activeSteps, setActiveSteps] = useState(false);
    const [validate, setValidate] = useState(false);
    const [showValidChoix, setShowValidChoix] = useState(false);
    const [step, setStep] = useState("");

    const data_ = useSelector((store) => {

        if (store.DaysPvCh.day5.dayData) return store.DaysPvCh.day5.dayData

        return store.DaysPvCh.day5.data
    });

    const contextValue = useReducer(reducer, data_);
    const [data, dispatch] = contextValue;
    const challengeId = useSelector((store) => store.PvChallenge.center.challengeId);
    const [details, setDetails] = useState([]);
    const [showFinale, setShowFinale] = useState(false);

    const history = useHistory();
    const {t} = useTranslation();
    const dispatchRedux = useDispatch();
    const config = useRef({
        messages: [{
            title: t("day5.message.title_msg_1"),
            text: t("day5.messages.text1"),
            showCancelBtn: false,
            textBtnValid: "C'est noté",
            audio: Level5Audio.audio13

        }, {
            title: t("day5.message.title_msg_2"),
            text: t("day5.messages.text2"),
            showCancelBtn: false,
            showCancel: true,
            textBtnValid: "Commencer",
            audio: Level5Audio.audio7
        }, {
            title: t("day5.messages.title_msg_1"),
            text: t("day5.messages.text3"),
            showCancelBtn: true,
            showCancel: true,
            textBtnValid: "oui",
            audio: Level5Audio.audio11
        }, {
            title: t("day5.messages.title_msg_3"),
            text: t("day5.messages.text4"),
            showCancelBtn: false,
            showCancel: true,
            textBtnValid: "C'est noté",
            imgBackground: img3,
            rotateImage: false,
            audio: Level5Audio.audio12
        }], currentIndex: 0,
    });

    const clickPhone = () => {
        setNotify(false);
        setActiveSteps(true);
        setNotifyModal(true);
        setStep("start");
    };

    const notifyModalCols = () => {
        setNotifyModal(false);
        setPhoneModal(true);
    };

    const phoneModalCols = () => {
        // setNotifyModal(false);
        if (config.current.currentIndex === 3) {
            history.push("/")
        }
        setPhoneModal(false);
    };

    const validChoix = () => {
        if (validate) {
            setShowStart(true);
        }

    };

    const saveDay = () => {
        saveData(data.savedecisions.decisions)
    }

    const onStepChange_ = (val) => {
        setStep(val);
    };

    return (<Context.Provider value={contextValue}>
            <div className={"DayOneBackground_pv5"}>

                {/*title folders  */}
                <h4 className={"text-folder1"}>{t("day5.folder.1")}</h4>
                <h4 className={"text-folder2"}>{t("day5.folder.2")}</h4>
                <h4 className={"text-folder3"}>{t("day5.folder.3")}</h4>
                <h4 className={"text-folder4"}>{t("day5.folder.4")}</h4>

                <div
                    style={{
                        position: "absolute", top: "2rem", right: "3rem",
                    }}
                >
                    <CancelButton onClick={() => history.push("/parcours")}/>
                </div>


                <NotifyModal
                    show={notifyModal}
                    close={notifyModalCols} t={t}
                />
                <ConfirmationModalDay2
                    title={t("day5.responsable_m.title")}
                    text={t("day5.responsable_m.text")}
                    showCancel={true}
                    audio={Level5Audio.audio11}
                    textBtnValid="oui"
                    show={showStart}
                    close={() => {
                        setShowStart(false);
                    }}
                    valid={() => {
                        saveDay();
                        setShowStart(false);
                        setShowFinale(true);
                    }}
                />

                <Modalexpert
                    show={showValidChoix}
                    history={history}
                    onValidate={() => {
                        history.push("/pv-pharma-5-game");
                    }}
                    close={() => null}
                    text={t("day5.ModalexpertText")}
                />
                <CenterButtons
                    t={t}
                    active={activeSteps}
                    onFinch={() => {
                        setValidate(true);
                    }}
                    onStepChange={onStepChange_}
                    details={details}
                    modeEdit={modeEdit}
                />
                <div className="phone-img_pv5" onClick={clickPhone}>
                    <img src={img} alt="phone"/>
                    {notify && (<span>
                           <FontAwesomeIcon width={16} icon={faBell}/>
                       </span>
                        // <i
                        //     className="fa fa-bell"
                        //     style={{top: "64%", right: "-12%", fontSize: "15px"}}
                        // ></i>
                    )}
                </div>
                <span
                    style={{
                        textAlign: "center",
                        font: "normal normal bold 15px/17px Karla",
                        letterSpacing: "0.3px",
                        color: " #9B9B9B",
                        opacity: 1,
                        position: "absolute",
                        top: "64%",
                        left: "32%",
                    }}
                >
                    {t("day5.title")}
                </span>
                <div className={"budget_restant_pv5"}>
                    <div
                        style={{
                            backgroundColor: `${!validate ? "#a387dc" : ""}`, cursor: "pointer",
                        }}
                        onClick={validChoix}
                    >
                          <span>
                              {t("day5.ValideNiveau")}
                              <i className=" fas fa-arrow-right ml-1"></i>
                          </span>
                    </div>
                </div>
                <DiscussMessage step={step} t={t} total={data?.total}/>
            </div>
        </Context.Provider>);
};

const CenterButtons = ({
                           active = false, onFinch = () => null, onStepChange = () => null, details, t, modeEdit
                       }) => {
    const [step, setStep] = useState("step1");
    const [modalDesision, setModalDesision] = useState(false);
    const [modalDesision2, setModalDesision2] = useState(false);
    const [index_, setIndex] = useState(0);
    const [index2, setIndex2] = useState(0);
    const [currentStep, setCurrentStep] = useState(0);


    const next = (e, i) => {
        e.stopPropagation();

        // setShowStepModalFolder(true);
        setModalDesision(true)
        setIndex(i);

    };

    const [data, dispatch] = useDossier();


    const backTo = (i) => {

        if (i < index || index === undefined) {
            setIndex2(i)
            setModalDesision2(true)
        }

    }

    return (<>
            {modalDesision && (<ModalDesision
                    t={t}
                    data={data}
                    show={modalDesision}
                    indexItem={currentStep}
                    details={details}
                    close={() => {
                        setCurrentStep(prv => prv + 1);
                        setModalDesision(false);
                        setStep("step" + index_);
                        onStepChange("step" + index_);
                        if (active && step === "step4") {
                            setStep("step-");
                            onFinch();
                        }
                    }}
                    cancel={(index) => {
                        if (index === 1) {

                            dispatch({type: "RESET_STEP_2", payload: 0})
                        }
                        setModalDesision(false);

                    }}
                    modeEdit={modeEdit}
                />)}
            <div className={"centerButtons_pv5"}>
                <div>
                    <div style={{width: '150px', top: "0%", left: "0%"}}
                         onClick={() => backTo(0)}>
                        {active && step === "step1" && (<span style={{top: "0%", left: "14%"}} onClick={(e) => {
                                next(e, 2)
                            }}>
                               <FontAwesomeIcon width={16} icon={faBell}/>
                            </span>)}
                    </div>
                    <div style={{
                        width: '150px', top: "0%", left: "24%", position: 'absolute'
                    }} onClick={() => backTo(1)}>
                        {active && step === "step2" && (
                            <span style={{top: "8%", left: "40%"}} onClick={(e) => next(e, 3)}>
                                                             <FontAwesomeIcon width={16} icon={faBell}/>

                            </span>)}
                    </div>
                    <div style={{
                        width: '150px', top: "0%", left: "47%", position: 'absolute'
                    }} onClick={() => backTo(2)}>
                        {active && step === "step3" && (
                            <span style={{top: "5%", right: "30%"}} onClick={(e) => next(e, 4)}>
                                           <FontAwesomeIcon width={16} icon={faBell}/>

              </span>)}
                    </div>
                    <div style={{
                        width: '150px', top: "0%", left: "72%", position: 'absolute',

                    }} onClick={() => backTo(3)}>

                        {active && step === "step4" && (
                            <span style={{top: "0%", right: "10%"}} onClick={(e) => next(e, 5)}>
                                                        <FontAwesomeIcon width={16} icon={faBell}/>

                            </span>)}
                    </div>
                </div>
            </div>
        </>);
};

const DiscussMessage = ({step, total = 0}) => {
    const {t} = useTranslation();
    const [msg, setMsg] = useState({});

    useEffect(() => {
        switch (step) {
            case "start":
                setMsg({
                    text: t("day5.DiscussMessage.text1"), image: personage1
                });
                break;
            case "step2":
                setMsg({
                    text: t("day5.DiscussMessage.text2"), image: personage1
                });
                break;
            case "step3":

                setMsg({
                    text: t("day5.DiscussMessage.text3"), image: personage1
                });
                break;
            case "step4":
                setMsg({
                    text: t("day5.DiscussMessage.text4"), image: personage1,
                });
                break;
            case "step5":
                setMsg({
                    text: t("day5.DiscussMessage.text5"), image: personage1,
                });
                break;
            default:
                setMsg({
                    text: t("day5.DiscussMessage.text6"), image: personage1,
                });

                break;
        }
    }, [step]);

    return (<>
            <img className="presonDayOne_pvc" src={msg.image} alt=""/>
            <div className={"discussMessage_pvc"}>
                <h1>{t("day5.DiscussMessage.title")}</h1>
                <p>{msg.text}</p>
            </div>
        </>);
};

export default DayOne;
