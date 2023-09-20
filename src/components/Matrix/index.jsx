import imgArticle from "@/assets/images/article1.png";
import BackButton from "@/components/pvCh/BackButton";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { useHistory } from "react-router-dom";
import Level1Audio from "../../assets/audio/Niv1/index.js";
import imgCharacter from "../../assets/images/pv-challenge/character/Leader.png";
import img1 from "../../assets/images/pv-challenge/character/character_1_11.png";
import CharacterMessage from "../CharacterMessage";
import ChartRd2 from "../ChartRd2";
import HeaderProfile from "../HeaderPrfile";
import { mModalArticel } from "../modal/ModalArticle";
import ModalTutorial from "../pvCh/ModalTutorial/ModalTutorial";
import NextButton from "../pvCh/NextButton";
import style from "./style.module.scss";


const HeaderBlock = ({ item, index, activeItem, nextItem, isRow }) => {


    const onNExt = useCallback(() => {
        nextItem(item)
    }, [])

    return (
        <div
            onClick={activeItem >= item.id && onNExt}
            className={`${style[`hed_${isRow ? 'row' : 'col'}_${index + 1}`]} ${activeItem === item.id && style.active} ${activeItem >= item.id ? style.is_read : ''}`}>
            <p className={style.text}>
                {activeItem >= item.id && item.text}
            </p>
        </div>
    )
}


const RoundedBlock = ({ index, listMsg, onClick, activeItem }) => {


    const findItem = listMsg.find((item) => item.index === index);
    const findIndexItem = listMsg.findIndex((item) => item.index === index);


    const onnNextItem = () => {
        console.log("🚀 ~ file: index.jsx:38 ~ RoundedBlock ~ activeItem:", activeItem)
        console.log("🚀 ~ file: index.jsx:38 ~ RoundedBlock ~ index:", findIndexItem)
        if (findIndexItem <= activeItem - 1)
            onClick(findItem)
    }

    return <div className={style.block_icon} >
        {findItem && <i className={`fas fa-check cursor-pointer ${findIndexItem === activeItem - 1 ? style.active_icon : ''}`} onClick={onnNextItem} ></i>}
    </div>
}

const data = [
    {
        id: 1,
        text: "ETATIQUE",
        type: "profil",
        messageId: 1,
        radarId: 1,
    },
    {
        id: 2,
        text: "CRIME ORGANISE",
        type: "profil",
        messageId: 2,
        radarId: 2,
    },
    {
        id: 3,
        text: "TERRORISTE",
        type: "profil",
        messageId: 3,
        radarId: 3,
    },
    {
        id: 4,
        text: "ACTIVISTE IDIOLOGIQUE",
        type: "profil",
        messageId: 4,
        radarId: 4,
    }
    ,
    {
        id: 5,
        text: "OFFICINE SPÉCIALISÉE",
        type: "profil",
        messageId: 5,
        radarId: 5,
    }
    ,
    {
        id: 6,
        text: "AMATEUR",
        type: "profil",
        messageId: 6,
        radarId: 6,
    }
    ,
    {
        id: 7,
        text: "VENGEUR",
        type: "profil",
        messageId: 7,
        radarId: 7,
    }
    ,
    {
        id: 8,
        text: "MALVEILLANT PATHOLOGIQUE",
        type: "profil",
        messageId: 8,
        radarId: 8,
    },
    {
        id: 9,
        text: "ESPIONNAGE",
        type: "motivation",
        messageId: 9
    },
    {
        id: 10,
        text: "PRÉPOSITIONNEMENT STRATÉGIQUE",
        type: "motivation",
        messageId: 10
    },
    {
        id: 11,
        text: "INFLUENCE",
        type: "motivation",
        messageId: 11
    },
    {
        id: 12,
        text: "ENTRAVE AU FONCTIONNEMENT",
        type: "motivation",
        messageId: 12
    },
    {
        id: 13,
        text: "LUCRATIF",
        type: "motivation",
        messageId: 13
    },
    {
        id: 14,
        text: "DÉFI, AMUSEMENT",
        type: "motivation",
        messageId: 14
    },
]

const dataRadar = [
    {
        id: 1,
        color: 'green',
        dimension: [4, 4, 4, 2, 3]
    },
    {
        id: 2,
        color: 'blue',
        dimension: [3, 3, 3, 1, 1]
    }
    ,
    {
        id: 3,
        color: 'red',
        dimension: [2, 2, 2, 1, 4]
    }
    ,
    {
        id: 4,
        color: 'green',
        dimension: [2, 1, 1, 1, 4]
    }
    ,
    {
        id: 5,
        color: 'green',
        dimension: [4, 4, 3, 2, 3]
    }
    ,
    {
        id: 6,
        color: 'green',
        dimension: [1, 1, 1, 1, 2]
    }
    ,
    {
        id: 7,
        color: 'green',
        dimension: [2, 1, 1, 4, 2]
    }
    ,
    {
        id: 8,
        color: 'green',
        dimension: [2, 1, 2, 1, 2]
    }
]



function Matrix({ nextStep, onBack }) {
    const { t } = useTranslation();
    let history = useHistory();
    const [radar, setRadar] = useState()
    const [showTuto, setShowTuto] = useState(false);
    const [step, setStep] = useState(0);
    // const [step, setStep] = useState(2);
    const [activeItem, setActiveItem] = useState(1);
    // const [activeItem, setActiveItem] = useState(20);
    const [currentMessage, setCurrentMessage] = useState({});
    const config = useRef({
        currentItem: null
    });
    const profilList = useMemo(() => data.filter(item => item.type === "profil"), [])
    const motivationList = useMemo(() => data.filter(item => item.type === "motivation"), [])
    const listMsg = [
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ETATIQUE",
            text: "États, agences de renseignement. Ce profil d’attaquant secaractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible",
            audio: Level1Audio.audio9,
            withRadar: true,
        },
        {

            title: "LE HACKER EN CHEF",
            subtitle: "CRIME ORGANISE",
            text: "Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel,exploitation de réseaux de « machines robots » (botnet), etc.",
            audio: Level1Audio.audio10,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "TERRORISTE",
            text: "Cyberterroristes, cybermilices. Attaques habituellement peu sophistiquées, déni de service et défiguration",
            audio: Level1Audio.audio11,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ACTIVISTE IDIOLOGIQUE",
            text: "Cyber-hacktivistes, groupements d’intérêt, sectes.",
            audio: Level1Audio.audio12,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "OFFICINE SPÉCIALISÉE",
            text: "Ce type de hacker chevronné est souvent à l’origine de la conception et de la création d’outils et kits d’attaques 3 accessibles en ligne (éventuellement monnayés) qui sont ensuite utilisables « clés en main »",
            audio: Level1Audio.audio13,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "AMATEUR",
            text: "Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi",
            audio: Level1Audio.audio14,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "VENGEUR",
            text: "Ce profil d’attaquant se caractérise par sa détermination et sa connaissance interne des systèmes et processus organisationnels",
            audio: Level1Audio.audio15,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "MALVEILLANT PATHOLOGIQUE",
            text: "Les motivations de ce profil d’attaquant sont d’ordre pathologique ou opportuniste et parfois guidées par l’appât du gain (exemples: concurrent déloyal, client malhonnête, escroc, fraudeur)",
            audio: Level1Audio.audio16,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ESPIONNAGE",
            text: "Opération de renseignement (étatique, économique)",
            audio: Level1Audio.audio17
        },

        {
            title: "LE HACKER EN CHEF",
            subtitle: "PRÉPOSITIONNEMENT STRATÉGIQUE",
            text: "Prépositionnement visant généralement une attaque sur le long terme, sans que la finalité poursuivie soit clairement établie (exemples: compromission de réseaux d’opérateurs de télécommunication, infiltration de sites Internet d’information de masse pour lancer une opération d’influence politique ou économique à fort écho).",
            audio: Level1Audio.audio18
        },

        {
            title: "LE HACKER EN CHEF",
            subtitle: "INFLUENCE",
            text: "Opération visant à diffuser de fausses informations ou à les altérer, mobiliser les leaders d’opinion sur les réseaux sociaux, détruire des réputations, divulguer des informations confidentielles, dégrader l’image d’une organisation ou d’un État.",
            audio: Level1Audio.audio19

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ENTRAVE AU FONCTIONNEMENT",
            text: "Opération de sabotage visant par exemple à rendre indisponible un site Internet, à provoquer une saturation informationnelle, à empêcher l’usage d’une ressource numérique, à rendre indisponible une installation physique",
            audio: Level1Audio.audio20
        },


        {
            title: "LE HACKER EN CHEF",
            subtitle: "LUCRATIF",
            text: "Opération visant un gain financier, de façon directe ou indirecte. Généralement liée au crime organisé, on peut citer: escroquerie sur Internet, blanchiment d’argent, extorsion ou détournement d’argent, manipulation de marchés financiers, falsification de documents administratifs, usurpation d’identité, etc.",
            audio: Level1Audio.audio21
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "DÉFI, AMUSEMENT",
            text: "Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement",
            audio: Level1Audio.audio22
        },

        {
            index: 0,
            idVideo: "bvLOYGElwg8",
            type: "video"
        },
        {
            index: 5,
            title: "Cybersécurité : Protégez vos Données dans un Monde Numérique",
            description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
            img: imgArticle,
        },
        {
            index: 40,
            title: "Cybersécurité : Protégez vos Données dans un Monde Numérique",
            description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
            img: imgArticle,
        },
        {
            index: 32,
            title: "Cybersécurité : Protégez vos Données dans un Monde Numérique",
            description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
            img: imgArticle,
        },
        {
            index: 44,
            title: "Cybersécurité : Protégez vos Données dans un Monde Numérique",
            description: `La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure. La cybersécurité est devenue l'un des défis les plus cruciaux de notre ère numérique. Avec l'avancée rapide de la technologie et la prolifération des appareils connectés, la sécurité de nos données et de nos systèmes est devenue une préoccupation majeure.`,
            img: imgArticle,
        }

    ].map((item, index) => ({ ...item, id: index + 1 }));
    const listMsgPop = [
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,
        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,
        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,

        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,

        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,

        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,

        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,

        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir le profil",
            audio: Level1Audio.audio1,
        },
        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1
        },

        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1
        },

        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1

        },
        {

            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1
        },


        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1
        },

        {
            title: "Le leader",
            text: "Cliquez sur la case pour découvrir la motivation",
            audio: Level1Audio.audio1
        },

        {
            index: 0,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        },
        {
            index: 5,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        },
        {
            index: 40,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        },
        {
            index: 32,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        },
        {
            index: 44,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        },

    ];


    useEffect(() => {
        setCurrentMessage(() => ({
            title: "LE HACKER EN CHEF",
            text: " Nous verrons ensemble les différents profils et leurs motivations, et votre objectif sera de sélectionner le profil qui vous convient le mieux !     Commençons par les différents profils !",
            audio: Level1Audio.audio3,
            onClose: () => {
                setShowTuto(item => false);
            }
        }));
        setShowTuto(() => true);
    }, [])

    useEffect(() => {
        if (activeItem === 9) {

            if (step === 0) {
                setCurrentMessage(() => ({
                    title: "LE HACKER EN CHEF",
                    text: "Maintenant que tu as pu découvrir les différents profils des hackers, passons à découvrir leurs différentes motivations.",
                    audio: Level1Audio.audio4,
                    onClose: () => {
                        setStep(1);
                        setShowTuto(item => false);
                    }
                }));
                setShowTuto(item => true);
            }
            else {
                setTimeout(() => {
                    setCurrentMessage(() => ({
                        title: "LE HACKER EN CHEF",
                        text: " Appuyez sur la case qui clignote pour révéler la motivation",
                        audio: Level1Audio.audio5,
                        onClose: () => {
                            setShowTuto(item => false);
                        }
                    }));
                    setShowTuto(item => true);
                }, 500);
            }
        }



        if (activeItem === 15) {

            setTimeout(() => {
                setCurrentMessage(() => ({
                    title: "LE HACKER EN CHEF",
                    text: " À présent, nous allons examiner des exemples d'attaques pour illustrer la corrélation entre les profils et les motivations. Chaque case cochée dans le tableau représente un profil correspondant à la motivation correspondante. Cliquez sur la case cochée qui clignote pour découvrir les exemples. ",
                    audio: Level1Audio.audio6,
                    onClose: () => {
                        setShowTuto(item => false);
                    }
                }));
                setShowTuto(item => true);
            }, 500);


            setStep(() => 2)
        }

    }, [activeItem, step]);



    const closeModale = () => {
        if (config.current.currentItem.id === activeItem) { setActiveItem(index => index + 1); }
        setShowTuto(item => false);
        setRadar(null)
    }

    const nextItem = (currentItem) => {

        config.current.currentItem = currentItem;
        if (currentItem.type === "profil" || currentItem.type === "motivation") {
            setRadar(_ => dataRadar.find(elm => elm.id === currentItem.radarId))
            setCurrentMessage(() => listMsg.find(elm => elm.id === currentItem.messageId))
        } else {
            setCurrentMessage(currentItem)
        }
        setShowTuto(true);
    }

    const clickRoundedBlock = async (currentItem) => {
        await mModalArticel(currentItem);
        if (currentItem.id === activeItem) setActiveItem(index => index + 1);
    }

    return (
        <div className={style.container} >
            <div className=" py-2" >
                <HeaderProfile />
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
                subtitle=""
                show={showTuto}
                onClose={closeModale}
            >
                {radar ? <div className="absolute flex justify-center rounded-[4px] items-center bottom-[55px] left-[26%] h-[200px] bg-white w-[71%]">
                    <ChartRd2 color={radar.color} dimension={radar.dimension} />
                </div> : null}
            </ModalTutorial>
            <div className={step === 0 ? style.mtx_container_1 : style.mtx_container_2}>
                {profilList.map((item, index) => <HeaderBlock key={item.id} isRow={true} item={item} index={index} activeItem={activeItem} nextItem={nextItem} />)}
                {step !== 0 &&
                    motivationList.map((item, index) => <HeaderBlock key={item.id} isRow={false} item={item} index={index} activeItem={activeItem} nextItem={nextItem} />)
                }
                {step === 2 &&
                    <>
                        <div></div>
                        {
                            [...Array(48).keys()].map((item, index) => <RoundedBlock key={index} activeItem={activeItem} index={index} listMsg={listMsg} onClick={clickRoundedBlock} />)

                        }
                    </>
                }
            </div>

            {listMsgPop[activeItem - 1] && <div className="flex mt-auto " >
                <CharacterMessage
                    imgCharacter={imgCharacter}
                    {...listMsgPop[activeItem - 1]}
                />
                <div className="flex flex-row  items-end justify-end w-full pb-2 pl-2 " >

                    <div className="flex flex-row gap-4" >
                        <BackButton className={"step_quiz_btn_next2"}
                            onClick={onBack}
                        />
                        <NextButton onClick={activeItem === 20 && nextStep} className={activeItem !== 20 ? "bg-slate-500" : ''}
                        />
                    </div>
                </div>
            </div>}

        </div>
    );
}

export default Matrix;