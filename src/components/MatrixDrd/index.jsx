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
import { DndProvider, useDrag, useDrop } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";
import Dustbin from "./Dustbin";
import CardDrd from "./Card";
import ListArticle from "./ListArticle";
import { useRef } from "react";
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


const articleData = [
    {
        id: 1,
        title: "Le phishing",
        description: "Le phishing, ou hameçonnage, consiste à usurper l’identité d’un tiers par le biais d’un email (ou Smishing dans le cas d’un SMS) afin d’inciter le destinataire à réaliser une action : divulguer des informations sensibles et/ou confidentielles, cliquer sur un lien renvoyant vers une page non sécurisée, ou bien ouvrir une pièce jointe infectée.",
        idCell: -1,
        correctCellId: 1
    },
    {
        id: 2,
        title: "Le ransomware",
        description: "Le ransomware (ou rançongiciel)vise à bloquer l’accès à l’appareil de l’utilisateur et/ou à crypter ses données, dans le but d’obtenir le paiement d’une rançon. C’est le type de cybermalveillance qui a connu la plus importante augmentation ces dernières années – + 95 % en 2021 (source gouvernementale) – avec une prédilection pour les entreprises privées, plus enclines à débourser les sommes demandées.",
        idCell: -1,
        correctCellId: 25
    },
    {
        id: 3,
        title: "L'ingénierie sociale : comment les pirates manipulent les victimes",
        description: "Apprenez comment les cybercriminels utilisent l'ingénierie sociale pour tromper les gens.",
        idCell: -1,
        correctCellId: 30
    },
    {
        id: 4,
        title: "Les vulnérabilités Zero-Day : un défi pour la sécurité",
        description: "Décryptez ce que sont les vulnérabilités Zero-Day et comment les chercheurs en sécurité travaillent à les détecter et à les corriger.",
        idCell: -1,
        correctCellId: 43
    },
    {
        id: 5,
        title: "Les attaques par hameçonnage",
        description: "Comprenez comment fonctionnent les attaques par hameçonnage et comment éviter de devenir une victime.",
        idCell: -1,
        correctCellId: 16
    },
    {
        id: 6,
        title: "Sécurité des réseaux : les bonnes pratiques",
        description: "Découvrez les bonnes pratiques pour renforcer la sécurité de votre réseau informatique.",
        idCell: -1,
        correctCellId: 38
    },
    {
        id: 7,
        title: "La menace des logiciels malveillants",
        description: "Explorez la menace des logiciels malveillants et comment les prévenir efficacement.",
        idCell: -1,
        correctCellId: 18
    },
    {
        id: 8,
        title: "La cybersécurité dans le monde connecté d'aujourd'hui",
        description: "Découvrez l'importance de la cybersécurité dans notre monde de plus en plus connecté.",
        idCell: -1,
        correctCellId: 8
    }
]






function MatrixDrd({ nextStep }) {
    const { t } = useTranslation();
    let history = useHistory();

    const config = useRef({
        isValid: false
    });

    const [showTuto, setShowTuto] = useState(false);
    const [step, setStep] = useState(0);
    const [activeItem, setActiveItem] = useState(1);
    const [currentMessage, setCurrentMessage] = useState({});
    let [dustbins, setDustbins] = useState([...Array(48).keys()].map((item) => ({ id: item + 1, droppedItem: null }))) // id : 1 -> 48
    let [listArticle, setListArticle] = useState(articleData);


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

    const onDrop = (item, rowItem) => {
        console.log("🚀 ~ file: index.jsx:458 ~ onDrop ~ item:", item)

        dustbins = dustbins.map(elm => {
            if (elm.id !== rowItem.id && elm?.droppedItem?.id === item?.id) {
                return { ...elm, droppedItem: null }
            }
            if (elm.id === rowItem.id) return { ...elm, droppedItem: item }

            return elm;
        }).slice();

        listArticle = listArticle.map(elm => {
            if (elm.id === item.id) return { ...elm, idCell: rowItem.id }
            return elm;
        }).slice();

        setListArticle(_ => listArticle)
        setDustbins(_ => dustbins)
    }

    const onDropListArticle = (item) => {

        dustbins = dustbins.map(elm => {
            if (elm.droppedItem?.id === item.id) return { ...elm, droppedItem: null };
            return elm;
        }).slice();



        setListArticle(list => {
            const index = list.findIndex(elm => elm.id === item.id);
            list[index].idCell = -1;
            return [...list]
        })

        setDustbins(_ => dustbins)



    }

    const onValidate = () => {
        setListArticle(listArticle.map(elem => {
            if (elem.idCell !== elem.correctCellId) return { ...elem, className: "bg-red-500" }
            else return { ...elem, className: "bg-[#31a547]" }
        }))

        setDustbins([...dustbins.map(elem => {
            if (elem.droppedItem === null) return elem;
            else if (elem?.id !== elem.droppedItem?.correctCellId) return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-red-500" } }
            else return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-[#31a547]" } }
        })]);

        config.current.isValid = true;
    }



    return (
        <DndProvider backend={HTML5Backend}>
            <ModalTutorial
                personnageImage={img1}
                listMsg={[currentMessage]}
                title="My Modal"
                show={showTuto}
                onClose={closeModale}
            />
            <div className={style.container} >
                <div className="flex flex-row justify-between py-2 " >
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

                <div className="flex flex-row h-3/4 mb-3" >


                    <ListArticle onDrop={onDropListArticle} listArticle={listArticle} />


                    <div className={`${style.mtx_container} border p-2 h-full`}>
                        {data.filter(item => item.type === "profil").map((item, index) => <div key={item.id} className={`${style[`hed_row_${index + 1}`]}`}>
                            <p className={style.text}>
                                {item.text}
                            </p>
                        </div>)
                        }
                        {
                            data.filter(item => item.type === "motivation").map((item, index) => <div className={`${style[`hed_col_${index + 1}`]}`}>
                                <p className={style.text}>
                                    {item.text}
                                </p>
                            </div>)
                        }
                        <>
                            <div></div>
                            {dustbins.map((item, index) => <div className=" border-dashed border-2 border-[#CED3D9] bg-[#f5f5f5]" >
                                <Dustbin key={item.id} item={item} onDrop={onDrop} />
                            </div>)}
                        </>

                    </div>
                </div>

                {listMsgPop[activeItem - 1] && <div className="flex mt-auto " >
                    <CharacterMessage
                        imgCharacter={imgCharacter}
                        {...listMsgPop[activeItem - 1]}
                    />

                    <div className="flex flex-row  items-end justify-end w-full pb-2 pl-2 " >
                        <NextButton title={config.current.isValid ? undefined : "Validate"} className={"step_quiz_btn_next2"}
                            onClick={config.current.isValid ? nextStep : onValidate}
                        />
                    </div>
                </div>}

            </div>
        </DndProvider>
    );
}

export default MatrixDrd;