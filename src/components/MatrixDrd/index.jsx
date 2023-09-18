import { useMemo, useState } from "react";
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
import BackButton from "@/components/pvCh/BackButton/index.jsx";
import { mModalConfirmSteps } from "../ConfirmationModalSteps/ConfirmationModal";
import imgArticle from "@/assets/images/article1.png";

const data = [
    {
        id: 1,
        text: "ETATIQUE",
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
        title: "Cybersécurité : Protégez vos Données dans un Monde Numérique",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 1
    },
    {
        id: 2,
        title: "Le ransomware",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 25
    },
    {
        id: 3,
        title: "L'ingénierie sociale : comment les pirates manipulent les victimes",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 30
    },
    {
        id: 4,
        title: "Les vulnérabilités Zero-Day : un défi pour la sécurité",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 43
    },
    {
        id: 5,
        title: "Les attaques par hameçonnage",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 16
    },
    {
        id: 6,
        title: "Sécurité des réseaux : les bonnes pratiques",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 38
    },
    {
        id: 7,
        title: "La menace des logiciels malveillants",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 18
    },
    {
        id: 8,
        title: "La cybersécurité dans le monde connecté d'aujourd'hui",
        description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
        img: imgArticle,
        idCell: -1,
        correctCellId: 8
    }
]






function MatrixDrd({ nextStep, onBack }) {
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
            title: "LE HACKER EN CHEF",
            text: "Maintenant que tu as compris le lien entre les profils, les motivations et quelques exemples de cas réels, je te propose de me prouver que tu maitrise le sujet maintenant. Pour cela, je veux que tu associes différents cas historiques avec leur profil et motivation correspondants. C'est clair pour toi ?",
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
                title: "LE HACKER EN CHEF",
                text: "Presentation des motivations",
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

    const listMsgPop = [
        {
            title: "ETATIQUE",
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

    const onValidate = async () => {



        const check = listArticle.every(elm => elm.idCell !== -1)

        if (!check) return;


        const res = await mModalConfirmSteps({
            title: t("day1.messages.title"),
            text: t("day1.messages.text1"),
            rotateImage: true
        });

        if (!res) return;

        config.current.isValid = true;


        setListArticle(listArticle.map(elem => {
            if (elem.idCell !== elem.correctCellId) return { ...elem, className: "bg-red-500" }
            else return { ...elem, className: "bg-[#31a547]" }
        }))

        setDustbins([...dustbins.map(elem => {
            if (elem.droppedItem === null) return elem;
            else if (elem?.id !== elem.droppedItem?.correctCellId) return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-red-500" } }
            else return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-[#31a547]" } }
        })]);

    }

    const listProfil = useMemo(() => data.filter(item => item.type === "profil"), [])
    const listMotivation = useMemo(() => data.filter(item => item.type === "motivation"), [])



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

                <div className="flex flex-row h-3/5" >


                    <ListArticle onDrop={onDropListArticle} listArticle={listArticle} />


                    <div className={`${style.mtx_container} border p-2 h-full`}>
                        {listProfil.map((item, index) => <div key={item.id} className={`${style[`hed_row_${index + 1}`]}`}>
                            <p className={style.text}>
                                {item.text}
                            </p>
                        </div>)
                        }
                        {
                            listMotivation.map((item, index) => <div key={index} className={`${style[`hed_col_${index + 1}`]}`}>
                                <p className={style.text}>
                                    {item.text}
                                </p>
                            </div>)
                        }
                        <>
                            <div></div>
                            {dustbins.map((item, index) => <div key={index} className=" border-dashed border-2 border-[#CED3D9] bg-[#f5f5f5]" >
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

                    <div className="flex flex-row  items-end justify-end w-full pb-2 pl-2 gap-4 " >

                        <BackButton className={"step_quiz_btn_next2"}
                            onClick={onBack}
                        />
                        <NextButton title={config.current.isValid ? undefined : "Validate"} className={!listArticle.every(elm => elm.idCell !== -1) ? 'bg-slate-500' : ''}
                            onClick={config.current.isValid ? nextStep : onValidate}
                        />


                    </div>
                </div>}

            </div>
        </DndProvider>
    );
}

export default MatrixDrd;
