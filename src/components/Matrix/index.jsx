import { useState } from "react";
import style from "./style.module.scss"
import { useEffect } from "react";
import Modal1 from "../modal/modal1";
import ModalTutorial from "../pvCh/ModalTutorial/ModalTutorial";
import img1 from "../../assets/images/pv-challenge/character/character_1_11.png";
import Level1Audio from "../../assets/audio/Niv1/index.js";
import CharacterMessage from "../CharacterMessage";
import imgCharacter from "../../assets/images/pv-challenge/character/Leader.png"
import CancelButton from "../pvCh/CancelButton";
import NextButton from "../pvCh/NextButton";
import runningSolid from "../../assets/images/pv-challenge/running-solid2.svg";
import Profile from "../pvCh/profile/profile";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";


const data = [
    {
        id: 1,
        text: "Etatique",
        type: "profil"
    },
    {
        id: 2,
        text: "CRIME ORGANISE",
        type: "profil"
    },
    {
        id: 3,
        text: "TERRORISTE",
        type: "profil"
    },
    {
        id: 4,
        text: "ACTIVISTE IDIOLOGIQUE",
        type: "profil"
    }
    ,
    {
        id: 5,
        text: "OFFICINE SPÉCIALISÉE",
        type: "profil"
    }
    ,
    {
        id: 6,
        text: "AMATEUR",
        type: "profil"
    }
    ,
    {
        id: 7,
        text: "VENGEUR",
        type: "profil"
    }
    ,
    {
        id: 8,
        text: "MALVEILLANT PATHOLOGIQUE",
        type: "profil"
    },
    {
        id: 9,
        text: "ESPIONNAGE",
        type: "motivation"
    },
    {
        id: 10,
        text: "PRÉPOSITIONNEMENT STRATÉGIQUE",
        type: "motivation"
    },
    {
        id: 11,
        text: "INFLUENCE",
        type: "motivation"
    },
    {
        id: 12,
        text: "ENTRAVE AU FONCTIONNEMENT",
        type: "motivation"
    },
    {
        id: 13,
        text: "LUCRATIF",
        type: "motivation"
    },
    {
        id: 14,
        text: "DÉFI, AMUSEMENT",
        type: "motivation"
    },
]





function Matrix({ nextStep }) {
    const { t } = useTranslation();
    let history = useHistory();

    const [showTuto, setShowTuto] = useState(false);
    const [step, setStep] = useState(0);
    const [activeItem, setActiveItem] = useState(1);
    const [currentMessage, setCurrentMessage] = useState({});

    const nextItem = () => {
        setCurrentMessage(() => listMsg[activeItem - 1])
        setShowTuto(true)
    }

    useEffect(() => {
        setCurrentMessage(() => ({
            title: "presontation",
            text: "presontation Profil",
            audio: Level1Audio.audio1,
            onClose: () => {
                setShowTuto(item => false);
            }
        }));
        setShowTuto(() => true);
    }, [])

    useEffect(() => {
        if (activeItem === 9) {

            setCurrentMessage(() => ({
                title: "presontation",
                text: "presontation motivation",
                audio: Level1Audio.audio1,
                onClose: () => {
                    setShowTuto(item => false);
                }
            }));

            setTimeout(() => {
                setShowTuto(item => true);
            }, 1000)

            setStep(1);
        }
        if (activeItem === 15) {
            setStep(() => 2)
        }

    }, [activeItem]);

    const listMsg = [
        {
            title: "Etatique",
            text: "États, agences de renseignement. Ce profil d’attaquant secaractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible",
            audio: Level1Audio.audio1,
        },
        {
            title: "CRIME ORGANISE",
            text: "Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel,exploitation de réseaux de « machines robots » (botnet), etc.",
            audio: Level1Audio.audio1,
        },
        {
            title: "TERRORISTE",
            text: "Cyberterroristes, cybermilices. Attaques habituellement peu sophistiquées, déni de service et défiguration",
            audio: Level1Audio.audio1,

        },
        {
            title: "ACTIVISTE IDIOLOGIQUE",
            text: "Cyber-hacktivistes, groupements d’intérêt, sectes.",
            audio: Level1Audio.audio1,

        },
        {
            title: "OFFICINE SPÉCIALISÉE",
            text: "Ce type de hacker chevronné est souvent à l’origine de la conception et de la création d’outils et kits d’attaques 3 accessibles en ligne (éventuellement monnayés) qui sont ensuite utilisables « clés en main »",
            audio: Level1Audio.audio1,

        },
        {
            title: "AMATEUR",
            text: "Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi",
            audio: Level1Audio.audio1,

        },
        {
            title: "VENGEUR",
            text: "Ce profil d’attaquant se caractérise par sa détermination et sa connaissance interne des systèmes et processus organisationnels",
            audio: Level1Audio.audio1,

        },
        {
            title: "MALVEILLANT PATHOLOGIQUE",
            text: "Les motivations de ce profil d’attaquant sont d’ordre pathologique ou opportuniste et parfois guidées par l’appât du gain (exemples: concurrent déloyal, client malhonnête, escroc, fraudeur)",
            audio: Level1Audio.audio1,
        },
        {
            title: "ESPIONNAGE",
            text: "Opération de renseignement (étatique, économique)",
            audio: Level1Audio.audio1
        },

        {
            title: "PRÉPOSITIONNEMENT STRATÉGIQUE",
            text: "Prépositionnement visant généralement une attaque sur le long terme, sans que la finalité poursuivie soit clairement établie (exemples: compromission de réseaux d’opérateurs de télécommunication, infiltration de sites Internet d’information de masse pour lancer une opération d’influence politique ou économique à fort écho).",
            audio: Level1Audio.audio1
        },

        {
            title: "INFLUENCE",
            text: "Opération visant à diffuser de fausses informations ou à les altérer, mobiliser les leaders d’opinion sur les réseaux sociaux, détruire des réputations, divulguer des informations confidentielles, dégrader l’image d’une organisation ou d’un État.",
            audio: Level1Audio.audio1

        },
        {
            title: "ENTRAVE AU FONCTIONNEMENT",
            text: "Opération de sabotage visant par exemple à rendre indisponible un site Internet, à provoquer une saturation informationnelle, à empêcher l’usage d’une ressource numérique, à rendre indisponible une installation physique",
            audio: Level1Audio.audio1
        },


        {
            title: "LUCRATIF",
            text: "Opération visant un gain financier, de façon directe ou indirecte. Généralement liée au crime organisé, on peut citer: escroquerie sur Internet, blanchiment d’argent, extorsion ou détournement d’argent, manipulation de marchés financiers, falsification de documents administratifs, usurpation d’identité, etc.",
            audio: Level1Audio.audio1
        },

        {
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },

        {
            index: 0,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 5,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 40,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 32,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 44,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        }

    ];

    const listMsgPop = [
        {
            title: "Etatique",
            text: "États, agences de renseignement. Ce profil d’attaquant secaractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible",
            audio: Level1Audio.audio1,
        },
        {
            title: "CRIME ORGANISE",
            text: "Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel,exploitation de réseaux de « machines robots » (botnet), etc.",
            audio: Level1Audio.audio1,
        },
        {
            title: "TERRORISTE",
            text: "Cyberterroristes, cybermilices. Attaques habituellement peu sophistiquées, déni de service et défiguration",
            audio: Level1Audio.audio1,

        },
        {
            title: "ACTIVISTE IDIOLOGIQUE",
            text: "Cyber-hacktivistes, groupements d’intérêt, sectes.",
            audio: Level1Audio.audio1,

        },
        {
            title: "OFFICINE SPÉCIALISÉE",
            text: "Ce type de hacker chevronné est souvent à l’origine de la conception et de la création d’outils et kits d’attaques 3 accessibles en ligne (éventuellement monnayés) qui sont ensuite utilisables « clés en main »",
            audio: Level1Audio.audio1,

        },
        {
            title: "AMATEUR",
            text: "Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi",
            audio: Level1Audio.audio1,

        },
        {
            title: "VENGEUR",
            text: "Ce profil d’attaquant se caractérise par sa détermination et sa connaissance interne des systèmes et processus organisationnels",
            audio: Level1Audio.audio1,

        },
        {
            title: "MALVEILLANT PATHOLOGIQUE",
            text: "Les motivations de ce profil d’attaquant sont d’ordre pathologique ou opportuniste et parfois guidées par l’appât du gain (exemples: concurrent déloyal, client malhonnête, escroc, fraudeur)",
            audio: Level1Audio.audio1,
        },
        {
            title: "ESPIONNAGE",
            text: "Opération de renseignement (étatique, économique)",
            audio: Level1Audio.audio1
        },

        {
            title: "PRÉPOSITIONNEMENT STRATÉGIQUE",
            text: "Prépositionnement visant généralement une attaque sur le long terme, sans que la finalité poursuivie soit clairement établie (exemples: compromission de réseaux d’opérateurs de télécommunication, infiltration de sites Internet d’information de masse pour lancer une opération d’influence politique ou économique à fort écho).",
            audio: Level1Audio.audio1
        },

        {
            title: "INFLUENCE",
            text: "Opération visant à diffuser de fausses informations ou à les altérer, mobiliser les leaders d’opinion sur les réseaux sociaux, détruire des réputations, divulguer des informations confidentielles, dégrader l’image d’une organisation ou d’un État.",
            audio: Level1Audio.audio1

        },
        {
            title: "ENTRAVE AU FONCTIONNEMENT",
            text: "Opération de sabotage visant par exemple à rendre indisponible un site Internet, à provoquer une saturation informationnelle, à empêcher l’usage d’une ressource numérique, à rendre indisponible une installation physique",
            audio: Level1Audio.audio1
        },


        {
            title: "LUCRATIF",
            text: "Opération visant un gain financier, de façon directe ou indirecte. Généralement liée au crime organisé, on peut citer: escroquerie sur Internet, blanchiment d’argent, extorsion ou détournement d’argent, manipulation de marchés financiers, falsification de documents administratifs, usurpation d’identité, etc.",
            audio: Level1Audio.audio1
        },

        {
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },

        {
            index: 0,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 5,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 40,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 32,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 44,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        },
        {
            index: 44,
            title: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio1
        }

    ];

    const closeModale = () => {
        setActiveItem(index => index + 1);
        setShowTuto(item => false);
    }



    return (
        <div className={style.container} >
            <div className="flex flex-row justify-between py-2" >
                <div className={""}>
                    <Profile />
                </div>
                <div className={style.backBtn}>
                    <button onClick={() => history.push("/")}>Accueil
                        <img src={runningSolid} />
                    </button>
                </div>
            </div>

            <div className="mb-4">
                <h3 className="font-Karla text-[17px] text-left text-[#9f9f9f] uppercase" >
                    {t("day1.level")}
                </h3>
            </div>
            <ModalTutorial
                personnageImage={img1}
                listMsg={[currentMessage]}
                title="My Modal"
                show={showTuto}
                onClose={closeModale}
            />
            <div className={step === 0 ? style.mtx_container_1 : style.mtx_container_2}>
                {data.filter(item => item.type === "profil").map((item, index) => <div onClick={activeItem === item.id && nextItem} key={item.id} className={`${style[`hed_row_${index + 1}`]} ${activeItem === item.id && style.active}`}>
                    <p className={style.text}>
                        {item.text}
                    </p>
                </div>)
                }
                {step !== 0 &&
                    data.filter(item => item.type === "motivation").map((item, index) => <div onClick={activeItem === item.id && nextItem} key={item.id} className={`${style[`hed_col_${index + 1}`]} ${activeItem === item.id && style.active}`}>
                        <p className={style.text}>
                            {item.text}
                        </p>
                    </div>)
                }
                {step === 2 &&
                    <>
                        <div></div>
                        {[...Array(48).keys()].map((item, index) => <div className={style.block_icon} >
                            {listMsg.findIndex((item) => item.index === index) !== -1 ? <i className={`fas fa-check cursor-pointer ${listMsg[activeItem - 1]?.index === index && style.active_icon}`} onClick={listMsg[activeItem - 1]?.index === index ? nextItem : null} ></i> : null}
                        </div>)}
                    </>
                }
            </div>

            {listMsgPop[activeItem - 1] && <div className="flex mt-auto " >
                <CharacterMessage
                    imgCharacter={imgCharacter}
                    {...listMsgPop[activeItem - 1]}
                />

                <div className="flex flex-row  items-end justify-end w-full pb-2 pl-2 " >
                    <NextButton className={"step_quiz_btn_next2"}
                        onClick={nextStep}
                    />
                </div>
            </div>}

        </div>
    );
}

export default Matrix;