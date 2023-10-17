import { useCallback, useMemo, useState } from "react";
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
import runningSolid from "../../assets/images/pv-challenge/running-solid.svg";
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
import article1 from "@/assets/images/doc11.png";
import article2 from "@/assets/images/doc12.png";
import article3 from "@/assets/images/doc13.png";
import article4 from "@/assets/images/doc14.png";
import article5 from "@/assets/images/doc15.png";

import HeaderProfile from "../HeaderPrfile";
import {useDispatch} from "react-redux";
import {validateActivity} from "@/redux/levels/actions.js";

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
        id: 6,
        title: "Stuxnet, l’espion qui voulait saboter le nucléaire iranien",
        description: `examine l'histoire de Stuxnet, un virus initialement 
        conçu pour saboter le programme nucléaire iranien. Découvert en 2010, son 
        développement aurait commencé vers 2005-2006, au moment où l'Iran relançait son 
        programme d'enrichissement d'uranium. Stuxnet se distingue en exploitant quatre 
        vulnérabilités 0-day, ce qui démontre un niveau de sophistication élevé. Il se réplique 
        efficacement sur les réseaux informatiques, mais son objectif principal est de cibler 
        les logiciels Siemens utilisés pour les centrifugeuses nucléaires. Lorsqu'il détecte ces
        logiciels, Stuxnet modifie subtilement leurs paramètres pour provoquer des casses et 
        ralentir le programme. Il aurait été introduit dans la centrale de Natanz par une clé 
        USB ou un ordinateur portable, et Edward Snowden a suggéré une implication de la 
        NSA américaine et des services secrets israéliens`,
        img: article1,
        idCell: 4,
        correctCellId: 4
    },
    {
        id: 7,
        title: "Ransomware : les 3 infos sur l’attaque contre Bouygues Construction",
        description: `Bouygues Construction a été la cible d'une attaque de ransomware
        en 2020, où des pirates informatiques ont chiffré leurs données et exigé une 
        rançon de 10 millions d'euros pour ne pas les divulguer. L'attaque a affecté les 
        serveurs de l'entreprise et a temporairement arrêté ses systèmes informatiques. 
        L'attaque aurait été menée par un groupe de hackers appelé Maze. Ils 
        menacaient de rendre publiques les données volées si la rançon n'était pas payée.
        Bouygues Construction a confirmé l'attaque. Cette attaque est similaire à celle 
        subie par d'autres entreprises depuis`,
        img: article2,
        idCell: 11,
        correctCellId: 11
    },
    {
        id: 8,
        title: "Piratage d'Ashley Madison : 260 000 contacts français touchés",
        description: `Avid Life Media, la société 
        propriétaire du site de rencontres Ashley Madison, enquêtait sur la fuite de 
        données personnelles qui avait eu lieu suite au piratage en juillet 2015. Le 
        groupe de pirates, Impact Team, avait publié les informations de plus de 32 
        millions d'utilisateurs, y compris des adresses e-mail en .fr, dont certaines avec 
        une extension .gouv.fr. Impact Team avait justifié son action en contestant la 
        moralité d'Ashley Madison. Avid Life Media avait affirmé que cela relevait de la 
        criminalité et avait collaboré avec la police canadienne dans son enquête. La 
        CNIL avait précédemment émis des conseils pour protéger sa vie privée en ligne 
        lors de l'utilisation de sites de rencontres`,
        img: article3,
        idCell: 21,
        correctCellId: 21
    },
    {
        id: 9,
        title: "Piratage de Sony : un désastre qui coûterait déjà 380 millions de dollars ?",
        description: `Le 17 
        avril 2011, le groupe "Lulz Security" a piraté près de 100 millions de comptes 
        Sony et volé plus de 20 millions de numéros de cartes de crédit. Cette attaque a 
        coûté environ 120 millions de dollars à Sony en frais de réparation et a 
        gravement endommagé sa réputation. En novembre 2014, un groupe appelé 
        "GOP" (Guardians of Peace) a attaqué Sony en obtenant secrètement 11 
        téraoctets de données au fil de plusieurs mois. Ils ont divulgué des films inédits, 
        des mots de passe, des informations sur les employés, des données stratégiques, 
        et menacent de révéler davantage`,
        img: article4,
        idCell: 27,
        correctCellId: 27
    },
    {
        id: 10,
        title: "GitHub a subi ce qui semble être la plus grosse attaque DDOS enregistrée jusqu’ici",
        description: `GitHub a été la cible d'une 
        attaque DDoS (Distributed Denial of Service) extrêmement puissante le 28 février
        2018, avec un pic de trafic atteignant 1,3 térabit par seconde, selon Akamai. Il 
        s'agirait de l'une des attaques DDoS les plus intenses jamais divulguées 
        publiquement. L'attaque a temporairement rendu GitHub inaccessible. Elle a été 
        menée à l'aide de la technologie memcached, qui a un potentiel d'amplification 
        énorme. Memcached ne nécessite aucune authentification, ce qui le rend 
        vulnérable à l'usurpation et à une utilisation malveillante`,
        img: article5,
        idCell: 36,
        correctCellId: 36
    }
]


function MatrixDrd({ nextStep, onBack }) {
    const { t } = useTranslation();
    let history = useHistory();
    const dispatch = useDispatch();
    const config = useRef({
        isValid: false
    });

    const [showTuto, setShowTuto] = useState(false);
    const [step, setStep] = useState(0);
    const [activeItem, setActiveItem] = useState(1);
    const [currentMessage, setCurrentMessage] = useState({});
    const list = useMemo(() => [...Array(48).keys()].map((item) => ({ id: item + 1, droppedItem: null })), []);
    let [dustbins, setDustbins] = useState(list) // id : 1 -> 48

    let [listArticle, setListArticle] = useState(articleData);


    useEffect(() => {
        setCurrentMessage(() => ({
            title: "LE HACKER EN CHEF",
            text: "Maintenant que tu as compris le lien entre les profils, les motivations et quelques exemples de cas réels, je te propose de me prouver que tu maitrise le sujet maintenant. Pour cela, je veux que tu associes différents cas historiques avec leur profil et motivation correspondants. C'est clair pour toi ?",
            audio: Level1Audio.audio7,
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
            title: "Le leader",
            text: "Glisser-déposer les articles situés à gauche, dans le cas correspondant.",
            audio: Level1Audio.audio1,
        },
        {
            title: "Le leader",
            text: "Glisser-déposer les articles situés à gauche, dans le cas correspondant.",
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

    const onDrop = useCallback((item, rowItem) => {

        const findItem = dustbins.find(elm => elm.id === rowItem.id);

        if (findItem.droppedItem !== null) return;

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
    }, [listArticle, dustbins])

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

        const listCorrectIds = [];

        setListArticle(listArticle.map(elem => {
            if (elem.idCell !== elem.correctCellId) {
                listCorrectIds.push({id:elem.id,isCorrect:false});
                return { ...elem, className: "bg-red-500" }
            }

            else{
                listCorrectIds.push({id:elem.id,isCorrect:true});
                return { ...elem, className: "bg-[#31a547]" }       ;

            }
        }))

        setDustbins([...dustbins.map(elem => {
            if (elem.droppedItem === null) return elem;
            else if (elem?.id !== elem.droppedItem?.correctCellId) return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-red-500" } }
            else return { ...elem, droppedItem: { ...elem.droppedItem, className: "bg-[#31a547]" } }
        })]);

        dispatch(validateActivity("day1","part2",listCorrectIds));
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
                <div className=" py-2" >
                    <HeaderProfile />
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
                            {dustbins.map((item, index) => <div key={item.id} className=" border-dashed border-2 border-[#CED3D9] bg-[#f5f5f5]" >
                                <Dustbin item={item} onDrop={onDrop} />
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
