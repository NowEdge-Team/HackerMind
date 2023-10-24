import * as PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import { Cookies, useCookies } from "react-cookie";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import MissionAudio from "../../assets/audio/mission/index";
import badg5 from "../../assets/images/pv-challenge/Badge.svg";
import badg6 from "../../assets/images/pv-challenge/Mail.svg";
import DefaultImg from '../../assets/images/pv-challenge/avatars/profile1.png'; // Importez votre image par défaut
import { default as Dock, default as persoImage } from "../../assets/images/pv-challenge/character/Leader.png";
import badg7 from "../../assets/images/pv-challenge/contest.svg";
import MySvg from "../../assets/images/pv-challenge/group-3883.png";
import backImgTuto from "../../assets/images/pv-challenge/images/background_1_m22.png";
import pdfSvgrepo from "../../assets/images/pv-challenge/images/pdf-svgrepo-co.svg";
import playIcon from "../../assets/images/pv-challenge/images/rectangle552131.png";
import mySvg1 from "../../assets/images/pv-challenge/logo.png";
import badg3 from "../../assets/images/pv-challenge/travel-itinerary.svg";
import FieldModal, { mFieldLevel } from "../../components/FieldModal/index.jsx";
import Loader from "../../components/Loader.jsx";
import PvChModalBadge, { mBadgePopup } from "../../components/modal/PvChModalBadge/index.jsx";
import ModalFinalGame from "../../components/modal/modalFinalGame/index.jsx";
import ModalTutorial from "../../components/pvCh/ModalTutorial/ModalTutorial.jsx";
import { httpClient_get } from "../../helpers/api.js";
import { getLoggedInUser } from "../../helpers/authUtils.js";
import { avatars, getLogoById } from "../../helpers/missionDataPvC.js";
import { closeDayPvChClear, closeDaySuccess, getCenterInfoPvCh, updateCenterPvChInfo } from "../../redux/pvChallenge/actions.js";
import mstyles from "./style.module.scss";



function isFirstTime(game_session_id) {

    const cookies = new Cookies();
    const discovery_mission = cookies.get(`discovery_mission_${game_session_id}`);
    return !!discovery_mission;

}

function setIsFirstTime(game_session_id) {
    const cookies = new Cookies();
    cookies.set(`discovery_mission_${game_session_id}`, true, { path: '/' });
}


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    const [disableEdit, setDisableEdit] = useState(false);

    const { center } = useSelector((state) => state.PvChallenge);

    useEffect(() => {
        if (center.days && center.days.find((d) => d.day_id === 1)?.status === 1)
            setDisableEdit(true);
    }, []);
    return (
        <div
            className="sg-menu-mod-select-avatar"
            ref={ref}
            style={{
                padding: "10px", userSelect: 'none',
            }}
            onClick={(e) => {
                onClick(e);
            }}
        >
            {children}
            {!disableEdit && <div style={{ marginLeft: "auto" }}>&#x25bc;</div>}
        </div>
    );
});

const AvatarMenu = React.forwardRef(
    ({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
        const [value, setValue] = useState("");

        return (
            <div
                ref={ref}
                style={{ ...style, minWidth: "auto" }}
                className={className}
                aria-labelledby={labeledBy}

            >
                <div className="list-unstyled">
                    {React.Children.toArray(children).filter(
                        (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value)
                    )}
                </div>
            </div>
        );
    }
);
function ConfigModal(props) {
    const { t } = props;
    const { center } = useSelector((state) => state.PvChallenge);

    const [errorName, setErrorName] = useState(false);
    const [name, setName] = useState("");
    const [avatarLogo, setAvatarLogo] = useState(avatars[0]);
    const [fonction, setFonction] = useState("");
    const [disableEdit, setDisableEdit] = useState(false);

    useEffect(() => {
        if (center.days && center.days.find((d) => d.day_id === 1)?.status === 1)
            setDisableEdit(true);
        else
            setDisableEdit(false);

        setName(center.name);
        setAvatarLogo(getLogoById(center.avatar_id));
        setFonction(center?.fonction);
    }, [center]);

    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop={"static"}
        >
            <Modal.Body>
                <div className="sg-menu-mod-contaiber">
                    <div className="sg-menu-mod-lr">
                        <img src={Dock} height={320} />
                    </div>
                    <div className="sg-menu-mod-c">
                        <div className="d-flex align-content-center justify-content-center">
                            <h3 className="d-flex   sg-menu-mod-title-p1">
                                {t("menu.modal.title_p1")}
                            </h3>
                            <h3 className="d-flex   sg-menu-mod-title-p2 ml-2">
                                {t("menu.modal.title_p2")}
                            </h3>
                        </div>
                        <p className="d-flex  sg-menu-item-title-p3 text-center">
                            {t("menu.modal.description")}
                        </p>

                        <form>
                            <div className="form-row justify-content-center">
                                <div className="form-group " style={{ flex: 3 }}>
                                    <label htmlFor="inputCity" className="col-form-label">
                                        {t("menu.modal.name_taskforce")}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        maxLength={20}
                                        placeholder="Nom du centre"
                                        style={{
                                            padding: "21px 18px",
                                            borderColor: errorName ? "red" : "#ced4da",
                                        }}
                                        disabled={disableEdit}
                                        value={name}
                                        onChange={(e) => {
                                            setName(e.target.value);
                                            if (e.target.value !== "") {
                                                setErrorName(false);
                                            } else {
                                                setErrorName(true);
                                            }
                                        }}
                                    />
                                </div>


                            </div>
                            <div className="form-row justify-content-center">

                                <div className="form-group" style={{ flex: 5 }}>
                                    <label htmlFor="inputZip" className="col-form-label">
                                        {t(`menu.configRespo`)}
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputCity"
                                        maxLength={20}
                                        placeholder={t(`menu.configRespo`)}
                                        style={{
                                            padding: "21px 18px",
                                            borderColor: "#ced4da",
                                        }}
                                        disabled={disableEdit}
                                        value={fonction}
                                        onChange={(e) => {
                                            setFonction(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="form-row justify-content-center">
                                <div className="form-group col-md-4">
                                    <button
                                        type="reset"
                                        onClick={() => props.onClose()}
                                        style={{
                                            width: "100%",
                                            height: "60px",
                                        }}
                                        className={`btn btn-secondary waves-effect waves-light mr-1 d-block ${mstyles.color_2}`}
                                    >
                                        {t(`menu.retour`)}
                                    </button>
                                </div>

                                <div className={`form-group col-md-4`}>
                                    <button
                                        type="reset"
                                        onClick={() => {
                                            if (disableEdit) {
                                                props.onClose();
                                            } else {
                                                if (name !== "") {
                                                    setErrorName(false);
                                                    props.dispatch(
                                                        updateCenterPvChInfo(
                                                            props.game_session_id,
                                                            name,
                                                            avatarLogo.id,
                                                            fonction
                                                        )
                                                    );
                                                    props.onClose();
                                                } else {
                                                    setErrorName(true);
                                                }
                                            }
                                        }}
                                        style={{
                                            width: "100%",
                                            height: "60px",
                                        }}
                                        className={`btn btn-primary waves-effect waves-light mr-1 d-block ${mstyles.color_1}`}
                                    >
                                        {t(`menu.enregistrer`)}

                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="sg-menu-mod-lr">

                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
}

// function MenuBtnComponent({ img, title, onClick }) {
//     return <div
//         className={`border-darken-1  ${mstyles.menu_item_box}`}
//         onClick={onClick}
//     >
//         <img
//             src={img}
//             alt="user-img"
//             className="mb-1 sg-menu-item-box-img w-[88px] h-[77px]"
//             width={88}
//             height={77}
//         />
//         {title}
//     </div>;
// }




function MenuBtnComponent({ img, title, onClick }) {
    const userImgSrc = img || DefaultImg; // Utilisez l'image par défaut si img est vide

    return (
        <div
            className={`border-darken-1  ${mstyles.menu_item_box}`}
            onClick={onClick}
        >
            <img
                src={userImgSrc}
                alt="user-img"
                className="mb-1 sg-menu-item-box-img w-[88px] h-[77px]"
                width={88}
                height={77}
            />
            {title}
        </div>
    );
}


MenuBtnComponent.propTypes = {
    onClick: PropTypes.func,
    s: PropTypes.any
};
export default function Menu() {
    const [cookies, setCookie, removeCookie] = useCookies();
    const game_session_id = cookies.game_session_id;
    const location = useLocation();
    const [regleJeu, setRegleJeu] = useState(false);
    const [showConfig, setShowConfig] = useState(false);
    const [showBadge, setShowBadge] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showFinalGame, setShowFinalGame] = useState(false);
    const [badges, setBadges] = useState([]);

    const { closeDay } = useSelector((state) => state.PvChallenge);
    const { loading, center } = useSelector((state) => state.PvChallenge);
    const history = useHistory();
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const { days, challengeId, mission_id } = useSelector((state) => state.PvChallenge.center);

    useEffect(() => {
        if (location.pathname === "/" && location.state?.showBadge) {

            const loopBadge = async _ => {
                for (let index = 0; index < closeDay.badges.length; index++) {
                    await mBadgePopup({ badgeIndex: closeDay.badges[index], clearCloseDay: index === closeDay.badges.length - 1 })
                }

            }
            loopBadge();
        }
    }, [location]);

    useEffect(() => {
        if (closeDay !== null) {
            if (!closeDay.success) {
                mFieldLevel();
            }
        }
    }, [closeDay]);

    useEffect(() => {
        dispatch(getCenterInfoPvCh(game_session_id));

    }, []);

    useEffect(() => {
        if (game_session_id) {
            const res = !isFirstTime(game_session_id);
            setRegleJeu(res);
        }
    }, [game_session_id]);



    const listMission = [
        {
            title: t("menu.listMission.title"),
            text: t("menu.listMission.text1"),
            styleCharacter: mstyles.styleCharacter_1,
            audio: MissionAudio.missionAudio1
        },
        {
            title: t("menu.listMission.title"),
            text: t("menu.listMission.text2"),
            styleCharacter: mstyles.styleCharacter_2,
            audio: MissionAudio.missionAudio2
        },
        {
            title: t("menu.listMission.title"),
            text: t("menu.listMission.text3"),
            styleCharacter: mstyles.styleCharacter_3,
            audio: MissionAudio.missionAudio3
        }
    ]
    const to = (path) => {
        history.push(path);
    };

    const downloadCertificate = () => {
        setIsLoading(true)
        httpClient_get(`/participant/hackermind/export_certificate?mission_id=${mission_id}`, {
            responseType: "blob"
        })
            .then((response) => {

                // Create blob link to download
                const url = window.URL.createObjectURL(response.data);
                const link = document.createElement('a');
                const loggedInUser = getLoggedInUser();
                const certificat_name = "certificat_" + loggedInUser?.firstName + "_" + loggedInUser?.lastName + ".pdf";
                link.href = url;
                link.setAttribute(
                    'download',
                    certificat_name,
                );

                // Append to html link element page
                document.body.appendChild(link);

                // Start download
                link.click();

                // Clean up and remove the link
                link.parentNode.removeChild(link);
                setIsLoading(false)
            });
    }

    return (
        <div className="sg-menu-contant">
            {loading || isLoading && <Loader />}

            {/* <PvChModalBadge
                badges={badges}
                show={true}
                close={() => {
                    setShowBadge(false);
                    setTimeout(() => {
                        dispatch(closeDayPvChClear());
                    }, 1000);

                }}
            /> */}
            <ModalFinalGame
                badges={badges}
                show={showFinalGame}
                close={() => {
                    setShowFinalGame(false);
                }}
            />

            {/* <ScoreModal
                scoreDay={score}
                show={showScore}
                close={() => {
                    if (closeDay?.day_id === 5 && closeDay?.success) setShowFinalGame(true);

                    if (badges.length > 0) setShowBadge(() => true);

                    setShowScore(() => false);

                }}
            /> */}
            {/* <FieldModal
                show={showFailedScore}
                close={() => {
                    setShowFailedScore(false);
                }}
            /> */}
            <ConfigModal
                t={t}
                show={showConfig}
                center={center}
                game_session_id={game_session_id}
                dispatch={dispatch}
                onClose={() => {
                    setShowConfig(false);
                }}
                onHide={() => {
                    setShowConfig(false);
                }}
            />

            <ModalTutorial
                listMsg={listMission}
                pictureClass={mstyles.menu_personnage_image}
                personnageImage={persoImage}
                backGrandImage={backImgTuto}
                show={regleJeu}
                onClose={() => {
                    setIsFirstTime(game_session_id);

                    setRegleJeu(false);
                }}
                forceTemplate1={true}
            />
            <div className={mstyles.sg_menu_contant_left}>
                <div className={mstyles.sg_menu_item_btn}>
                    <div className={`d-flex flex-column sg-onHover ${mstyles.sg_onHover}`}>
                        <div className="d-flex justify-content-center align-items-center">
                            <img
                                src={getLogoById(center.avatar_id, avatars)?.logo}
                                alt="user-img"
                                width={41}
                                height={41}
                                style={{
                                    backgroundColor: "#fff",
                                    borderRadius: "50px",
                                }}
                            />
                            <span className="sg5-menu-item-title">
                                {center.name}
                            </span>
                        </div>
                        <div
                            className="sg-menu-item-btn-config"
                            onClick={() => setShowConfig(true)}
                        >
                            <div className="sg-menu-item-btn-config-s">
                                {t(`menu.configure`)}
                            </div>
                        </div>
                    </div>

                    <div
                        className={` ${mstyles.border_darken_1} border-darken-1`}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: "3.6rem",
                            top: "1rem",
                        }}
                        onClick={() => {
                            setRegleJeu(true);
                        }}
                    >
                        <div className={`d-flex ${mstyles.border_darkenb_}`}>
                            <h3
                                style={{
                                    marginLeft: "18px",
                                    font: "normal normal normal 16px/23px Karla",
                                    color: "#3F4351",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {t(`menu.d_mission`)}
                            </h3>
                            <img
                                src={playIcon}
                                alt="user-img"
                                className="mb-1 sg-menu-item-box-img"
                                width={30}
                                height={30}
                                style={{ bottom: "8px", left: "8px", position: "relative" }}
                            />
                        </div>
                    </div>
                    {days?.every((item) => item.status === 1) && <div
                        className={`border-darken-1 ${mstyles.border_darken_2}`}
                        style={{
                            cursor: "pointer",
                            position: "absolute",
                            left: "20rem",
                            top: "1.5rem",
                        }}
                        onClick={downloadCertificate}
                    >
                        {/* <div className="d-flex">
                            <img
                                src={pdfSvgrepo}
                                alt="user-img"
                                className="mb-1 sg-menu-item-box-img"
                                width={50}
                                height={50}
                            />
                            <h3
                                style={{
                                    marginLeft: "5px",
                                    font: "normal normal normal 16px/23px Karla",
                                    color: "#3F4351",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                }}
                            >
                                {t(`menu.t_certificat`)}
                            </h3>
                        </div> */}
                    </div>}
                </div>
                <div className={`d-flex align-items-baseline ml-5 ${mstyles.title_logo}`}>
                    <img
                        src={mySvg1}
                        alt="user-img"
                        width={150}
                        height={54}
                    // style={{ bottom: "7px", position: "relative" }}
                    />
                </div>
                <div className={`d-flex  ml-5 ${mstyles.s_title}`}>
                    <h3 className="d-flex  mr-1 sg-menu-item-title-p1">
                        {t("menu.welcome1")}
                    </h3>
                    <h3 className="d-flex sg-menu-item-title-p2">
                        {t("menu.welcome2")}
                    </h3>
                </div>
                <p className={`d-flex ml-5 mr-5 sg-menu-item-title-p3 ${mstyles.description}`}>
                    {t("menu.desc1")}
                </p>
                <div className={mstyles.sg_menu_item_box_container}>
                    <div className={`d-flex ${mstyles.block1}`}  >
                        <MenuBtnComponent
                            img={badg3}
                            onClick={() => to(`/parcours`)}
                            title={t(`menu.parcour`)}
                        />
                        <MenuBtnComponent
                            img={badg6}
                            onClick={() => to(`/activity-report`)}
                            title={t(`menu.Ractivity`)}
                        />
                    </div>
                    <div className={`d-flex ${mstyles.block2}`} >
                        <MenuBtnComponent
                            img={badg5}
                            onClick={() => to(`/badges`)}
                            title={t(`menu.badges`)}
                        />
                        <MenuBtnComponent
                            img={badg7}
                            onClick={() => to(`/classement`)}
                            title={t(`menu.classement`)}
                        />
                    </div>
                </div>
            </div>
            <div
                className={mstyles.content_left}
            >
                <img
                    style={{
                        position: "absolute",
                        left: "0px",
                        bottom: "0px",
                        width: "100%",
                        height: "68%",

                        // marginRight: "10px",
                        // objectFit: "contain",
                        // objectPosition:"0% 100%"
                        // "objectPosition": "bottom 0px right 70px",
                        // "objectPosition": "right 76px top 120px", 
                    }}
                    alt={""}
                    src={MySvg}
                />
            </div>
        </div>
    );
}