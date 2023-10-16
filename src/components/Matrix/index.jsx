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
import article1 from "@/assets/images/doc1.png";
import article2 from "@/assets/images/doc2.png";
import article3 from "@/assets/images/doc3.png";
import article4 from "@/assets/images/doc4.png";
import article5 from "@/assets/images/doc5.png";

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


const RoundedBlock = ({ index, listMsg, onClick, activeItem, showPopup = true }) => {


    const findItem = listMsg.find((item) => item.index === index);
    const findIndexItem = listMsg.findIndex((item) => item.index === index);


    const onnNextItem = () => {
        console.log("🚀 ~ file: index.jsx:38 ~ RoundedBlock ~ activeItem:", activeItem)
        console.log("🚀 ~ file: index.jsx:38 ~ RoundedBlock ~ index:", findIndexItem)
        if (findIndexItem <= activeItem - 1)
            onClick(findItem)
    }
    console.log("showw", showPopup);

    return <div className={style.block_icon} >
        {findItem && <i className={`fas fa-check cursor-pointer ${findIndexItem === activeItem - 1 && findItem.showPopup === undefined ? style.active_icon : ''}`} onClick={findItem.showPopup === undefined ? onnNextItem : null}  ></i>}
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
            text: "Le Stratège en Ombre : Ces experts du cyberespace agissent en tant que professionnels au service des États et des agences de renseignement. Ils opèrent avec une précision d'horloger, suivant un calendrier et des procédures bien établies. Leur flexibilité leur permet de personnaliser leurs outils et méthodes pour s'adapter à la topologie de leurs cibles. Certains de ces acteurs ont un accès à des vulnérabilités jour zéro (0-Day) et sont capables de s'infiltrer dans des réseaux isolés, menant des attaques successives pour atteindre leurs objectifs.",
            audio: Level1Audio.audio9,
            withRadar: true,
        },
        {

            title: "LE HACKER EN CHEF",
            subtitle: "CRIME ORGANISE",
            text: "Les Maîtres de l'Ombre Financière : Ces organisations cybercriminelles, qu'elles soient mafias, gangs, ou officines, sont obsédées par le profit. Elles se lancent dans des opérations sophistiquées, de l'escroquerie en ligne à la demande de rançon ou aux attaques par rançongiciel. Grâce à l'accessibilité croissante des kits d'attaques en ligne, ces cybercriminels sont devenus de véritables experts. Certains d'entre eux ont également accès à des vulnérabilités jour zéro (0-Day).",
            audio: Level1Audio.audio10,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "TERRORISTE",
            text: "Les Harbingers du Chaos : Les cyberterroristes et cybermilices n'ont pas besoin de sophistication technique pour semer la destruction. Leur détermination est leur arme principale, utilisée pour déstabiliser et détruire, que ce soit par des attaques de déni de service ou l'exploitation de vulnérabilités de sites Internet avec des défigurations.",
            audio: Level1Audio.audio11,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ACTIVISTE IDIOLOGIQUE",
            text: "Les Porteurs d'un Message Virtuel : Les cyber-hacktivistes et les groupes d'intérêt partagent des modes opératoires similaires aux cyberterroristes, mais leurs intentions sont moins destructrices. Ils utilisent leurs compétences pour véhiculer une idéologie ou un message, parfois en utilisant massivement les réseaux sociaux comme caisse de résonance.",
            audio: Level1Audio.audio12,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "OFFICINE SPÉCIALISÉE",
            text: "Les Mercenaires de l'Encre Noire : Ces cybermercenaires sont des virtuoses de la cyberattaque, dotés de compétences techniques exceptionnelles. Ils conçoivent des outils et des kits d'attaques en ligne, parfois monnayés, qui sont ensuite utilisés par d'autres groupes d'attaquants. Leur motivation principale est le gain financier.",
            audio: Level1Audio.audio13,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "AMATEUR",
            text: "Les Apprentis de l'Ombre : Les script-kiddies et les hackers amateurs ont de bonnes connaissances informatiques, mais leurs attaques sont souvent basiques. Ils s'engagent dans des actes de piratage principalement pour la reconnaissance sociale, le plaisir et le défi, utilisant des kits d'attaques en ligne.",
            audio: Level1Audio.audio14,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "VENGEUR",
            text: "Les Justiciers Virtuels : Motivés par la vengeance et un sentiment d'injustice, ces hackers sont redoutables en raison de leur connaissance interne des systèmes et des processus organisationnels. Leur motivation personnelle peut leur conférer un pouvoir de nuisance significatif.",
            audio: Level1Audio.audio15,
            withRadar: true,

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "MALVEILLANT PATHOLOGIQUE",
            text: "Les Sombres Opportunistes : Les motivations de ces attaquants sont souvent liées à des troubles ou à l'appât du gain. Ils peuvent avoir des connaissances informatiques pour compromettre les systèmes de leurs cibles, utiliser des kits d'attaques en ligne, ou même sous-traiter des attaques à des officines spécialisées. Leur cible peut parfois inclure des sources internes, comme des salariés mécontents ou des prestataires peu scrupuleux.",
            audio: Level1Audio.audio16,
            withRadar: true,
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ESPIONNAGE",
            text: "Cette motivation conduit les attaquants à mener des opérations de renseignement, qu'elles soient d'origine étatique ou économique. Ils cherchent à s'infiltrer discrètement dans les systèmes d'information et à s'y maintenir durablement. Les secteurs visés incluent souvent des domaines sensibles tels que l'armement, l'aérospatial, la pharmacie, l'énergie, l'économie, les finances et les affaires étrangères.",
            audio: Level1Audio.audio17
        },

        {
            title: "LE HACKER EN CHEF",
            subtitle: "PRÉPOSITIONNEMENT STRATÉGIQUE",
            text: "Les attaquants prépositionnent leurs ressources en vue d'attaques à long terme, sans dévoiler immédiatement leurs intentions. Ils peuvent compromettre les réseaux d'opérateurs de télécommunication ou infiltrer des sites Internet à fort impact, prêts à lancer des opérations d'influence politique ou économique à grande échelle.",
            audio: Level1Audio.audio18
        },

        {
            title: "LE HACKER EN CHEF",
            subtitle: "INFLUENCE",
            text: "Les opérations d'influence visent à diffuser de fausses informations, à altérer la vérité, à mobiliser les leaders d'opinion sur les réseaux sociaux, à détruire des réputations, à divulguer des informations confidentielles ou à dégrader l'image d'une organisation ou d'un État. L'objectif final est généralement la déstabilisation ou la modification des perceptions.",
            audio: Level1Audio.audio19

        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "ENTRAVE AU FONCTIONNEMENT",
            text: "Ces attaquants cherchent à perturber le fonctionnement normal en rendant indisponibles des sites Internet, en provoquant une saturation informationnelle, en empêchant l'utilisation de ressources numériques ou en affectant des installations physiques. Les systèmes industriels sont particulièrement vulnérables, exposés aux attaques par le biais de réseaux informatiques interconnectés.",
            audio: Level1Audio.audio20
        },


        {
            title: "LE HACKER EN CHEF",
            subtitle: "LUCRATIF",
            text: "Les attaquants motivés par le gain financier sont principalement liés au crime organisé. Leurs opérations incluent des escroqueries en ligne, du blanchiment d'argent, de l'extorsion, des détournements d'argent, la manipulation des marchés financiers, la falsification de documents administratifs, l'usurpation d'identité, etc. Certaines opérations lucratives peuvent utiliser des méthodes provenant d'autres catégories, mais l'objectif final reste le profit.",
            audio: Level1Audio.audio21
        },
        {
            title: "LE HACKER EN CHEF",
            subtitle: "DÉFI, AMUSEMENT",
            text: "Les attaquants qui cherchent le défi et l'amusement effectuent des exploits pour la reconnaissance sociale, le plaisir ou le simple défi. Même si leurs intentions ne sont pas nécessairement malveillantes, de telles opérations peuvent avoir des conséquences graves pour les victimes.",
            audio: Level1Audio.audio22
        },
        {
            index: 0,
            title: "Des hackers algériens s’en prennent à des sites marocains ",
            description: `Une cyberattaque a visé le site officiel de l’Université des sciences
            Dhar El Mahraz de Fès (FSDM) vendredi 5 août, rapporte Morroco World News.
            L’auteur de cette manœuvre serait un hacker algérien, qui a laissé sa signature
            avec le drapeau algérien sur le site Web de l’université et une légende : « Pas de
            paix entre les systèmes ». Sur Twitter, il a affirmé avoir collecté trois millions de
            lignes de données, y compris des e-mails et des mots de passe.`,
            img: article1,
        },
        // {
        //     index: 10,
        //     idVideo: "8VsvdCaSyaQ",
        //     type: "video"
        // },
        {
            index: 10,
            title: "Le cybergang francophone OPERA1ER enchaine les victimes en Afrique",
            description: ` Le groupe de cybercriminels francophone OPERA1ER, 
            également connu sous les noms de DESKTOP-GROUP, Common Raven et NXSMS, 
            a ciblé des organismes bancaires, financiers et de télécommunications en Afrique de 
            l'Ouest depuis 2016. L'analyse de Group-IB révèle qu'ils ont réussi à extorquer 11 
            millions de dollars grâce à 35 cyberattaques répertoriées entre 2018 et 2022. Les 
            attaques ont commencé par des e-mails de phishing contenant des chevaux de Troie 
            d'accès à distance (RAT) et d'autres outils visant à voler les identifiants des 
            utilisateurs. Les hackers ont ensuite étudié les réseaux des victimes pendant une 
            période de dormance allant jusqu'à un an avant de détourner des fonds vers des 
            comptes détenus par des tiers.`,
            img: article2,
        },
        {
            index: 27,
            title: "5 ans après, quelles leçons tirer des attaques NotPetya",
            description: `NotPetya, un puissant malware apparu en juin 2017, a 
            redéfini les attaques de logiciels malveillants et forcé les professionnels de la sécurité
            à revoir leurs stratégies. Contrairement à la plupart des ransomwares, NotPetya 
            n'était pas destiné à extorquer de l'argent, mais à effacer les données. Propagé via 
            l'outil EternalBlue volé à la NSA, il a infecté des milliers d'entreprises dans le monde, 
            causant plus de 10 milliards de dollars de dommages. Les experts considèrent que 
            NotPetya, attribué à des opérateurs russes a marqué le passage des ransomwares 
            opportunistes aux armes de guerre cybernétiques soutenues par des États-nations, 
            incitant les RSSI à repenser leur approche de la sécurité`,
            img: article3,
        },
        {
            index: 34,
            title: "Espionnage : Airbus, cible d'une série de cyberattaques",
            description: `Airbus a été la cible de plusieurs attaques informatiques en 2019 passant par ses sous-traitants, 
            éveillant des soupçons d'espionnage industriel en provenance de Chine. Ces attaques ont touché Expleo 
            (anciennement Assystem), Rolls-Royce, et deux sous-traitants non identifiés d'Airbus. Les attaques ont suivi 
            un modèle où les sous-traitants étaient visés pour ensuite infiltrer Airbus via leurs accès. Les motivations 
            semblent inclure la recherche de documents techniques de certification et d'informations liées à la motorisation 
            d'aéronefs, y compris l'A400M et l'A350. Bien que la Chine soit soupçonnée, l'attribution reste difficile dans 
            le domaine des cyberattaques. Ces incidents soulignent les vulnérabilités du secteur aéronautique face aux cybermenaces.`,
            img: article4,
        },
        {
            index: 35,
            title: "Un hacker pirate un centre de l'agence spatiale américaine avec un mini-ordinateur à 35 dollars",
            description: `La NASA a été victime d'une attaque informatique qui a
            utilisé un mini-ordinateur Raspberry Pi, coûtant seulement 35 dollars (30 euros), pour
            infiltrer le réseau du Jet Propulsion Laboratory (JPL) à Pasadena, en Californie. 
            L'attaque a débuté en avril 2018 et a duré près d'un an, compromettant 
            temporairement les systèmes de contrôle des vols spatiaux du JPL. Environ 500 
            mégaoctets de données ont été volés, dont des fichiers confidentiels liés à des 
            données scientifiques du rover Curiosity sur Mars et à des informations soumises à la
            réglementation sur le contrôle des exportations de technologies à usage militaire. La 
            NASA craignait également que d'autres sites puissent être compromis par l'attaquant,
            ce qui a conduit à des déconnexions préventives.`,
            img: article5,
        },
        {
            index: 1,
            showPopup: false,
        },
        {
            index: 2,
            showPopup: false,
        },
        {
            index: 3,
            showPopup: false,
        },
        {
            index: 14,
            showPopup: false,
        },
        {
            index: 15,
            showPopup: false,
        },
        {
            index: 16,
            showPopup: false,
        },
        {
            index: 18,
            showPopup: false,
        },
        {
            index: 20,
            showPopup: false,
        },
        {
            index: 21,
            showPopup: false,
        },
        {
            index: 24,
            showPopup: false,
        },
        {
            index: 25,
            showPopup: false,
        },
        {
            index: 39,
            showPopup: false,
        },
        {
            index: 40,
            showPopup: false,
        },
        {
            index: 44,
            showPopup: false,
        },
        {
            index: 45,
            showPopup: false,
        },
        {
            index: 46,
            showPopup: false,
        },
        {
            index: 47,
            showPopup: false,
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
        {
            index: 44,
            title: "Le leader",
            text: "Cliquez sur la coche pour voir un exemple d'attaque",
            audio: Level1Audio.audio1
        }

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

            <div className="mb-3">
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
                {radar ? <div className=" flex justify-center rounded-[4px] items-center h-[180px] bg-white w-[100%]">
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