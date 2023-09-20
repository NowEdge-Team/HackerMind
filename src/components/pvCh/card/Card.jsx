import { useState } from "react"
import avatar from "../../../assets/images/pv-challenge/avatars/profile1.png"
import avatar2 from "../../../assets/images/pv-challenge/avatars/profile2.png"
import avatar3 from "../../../assets/images/pv-challenge/avatars/profile3.png"
import avatar4 from "../../../assets/images/pv-challenge/avatars/profile4.png"
import avatar5 from "../../../assets/images/pv-challenge/avatars/profile5.png"
import avatar6 from "../../../assets/images/pv-challenge/avatars/profile6.png"
import avatar7 from "../../../assets/images/pv-challenge/avatars/profile7.png"
import avatar8 from "../../../assets/images/pv-challenge/avatars/profile8.png"
import ChartRd from "./ChartRd"
import styles from "./card.module.scss";
import ModalTutorial from "../ModalTutorial/ModalTutorial"
import img1 from "@/assets/images/pv-challenge/character/character_1_11.png";
import { useTranslation } from "react-i18next"
import Level1Audio from "@/assets/audio/Niv1/index.js";
import { twMerge } from "tailwind-merge"




function Card() {
    const { t } = useTranslation();
    const [showTuto, setShowTuto] = useState(true);

    const [title, setTitle] = useState("ÉTATIQUE")
    const [text, setText] = useState('États, agences de renseignement. Ce profil d’attaquant se caractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible.')
    const [color, setColor] = useState('')
    const [activeitem, setActiveItem] = useState()


    const [radar, setRadar] = useState({
        color: 'green',
        bgColor: '#82E0AA',
        dimension: [9, 0, 0, 9, 10]
    })


    const handlechange = (id, title, text, color) => {
        setActiveItem(id)
        // setImgsrc(imgSrc) ;
        setText(text)
        setTitle(title)
        setColor(color)
        let dataRadar
        switch (id) {
            case 1:
                dataRadar = {
                    color: 'green',
                    bgColor: '#82E0AA',
                    dimension: [9, 0, 0, 9, 10]
                }
                break;

            case 2:
                dataRadar = {
                    color: 'blue',
                    bgColor: '#AED6F1',
                    dimension: [9, 0, 9, 10, 10]
                }
                break

            case 3:
                dataRadar = {
                    color: 'red',
                    bgColor: '#F5B7B1',
                    dimension: [0, 0, 9, 10, 9]
                }
                break

            case 4:
                dataRadar = {
                    color: '#4D0AC3',
                    bgColor: '#A372F8',
                    dimension: [10, 10, 10, 0, 0]
                }
                break

            case 5:
                dataRadar = {
                    color: '#E717A4',
                    bgColor: '#F1AADB',
                    dimension: [9, 6, 8, 8, 6]
                }
                break

            case 6:
                dataRadar = {
                    color: 'green',
                    bgColor: 'LightGrey',
                    dimension: [1, 2, 2, 2, 2]
                }
                break

            case 7:
                dataRadar = {
                    color: 'green',
                    bgColor: 'LightGrey',
                    dimension: [1, 2, 2, 2, 2]
                }
                break

            case 8:
                dataRadar = {
                    color: 'green',
                    bgColor: 'LightGrey',
                    dimension: [1, 2, 2, 2, 2]
                }
                break
        }
        setRadar({ ...dataRadar })
    }


    return (
        <div className={`${styles.container} py-3 px-4`} style={{ backgroundColor: color }}>
            <ModalTutorial
                // pictureClass={"personne"}
                personnageImage={img1}
                listMsg={[{
                    title: "title",
                    text: "desc",
                    audio: Level1Audio.audio1,
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
            <div className="flex flex-row justify-center gap-5" >
                <img src={avatar} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 1 ? styles.active : ""}`} onClick={() => handlechange(1, "ÉTATIQUE", "États, agences de renseignement. Ce profil d’attaquant se caractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible.", 'white')} />
                <img src={avatar2} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 2 ? styles.active : ""}`} onClick={() => handlechange(2, "CRIME ORGANISÉ", "Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel, exploitation de réseaux de « machines robots » (botnet), etc.", 'white')} />
                <img src={avatar3} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 3 ? styles.active : ""}`} onClick={() => handlechange(3, "TERRORISTE", "Cyberterroristes, cybermilices. Attaques habituellement peu sophistiquées, déni de service et défiguration", 'white')} />
                <img src={avatar4} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 4 ? styles.active : ""}`} onClick={() => handlechange(4, "ACTIVISTE IDÉOLOGIQUE", "Cyber-hacktivistes, groupements d’intérêt, sectes.", 'white')} />
                <img src={avatar5} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 5 ? styles.active : ""}`} onClick={() => handlechange(5, "OFFICINE SPÉCIALISÉE", "Ce type de hacker chevronné est souvent à l’origine de la conception et de la création d’outils et kits d’attaques accessibles en ligne (éventuellement monnayés) qui sont ensuite utilisables « clés en main »", 'white')} />
                <img src={avatar6} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 6 ? styles.active : ""}`} onClick={() => handlechange(6, "AMATEUR", "Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi", 'white')} />
                <img src={avatar7} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 7 ? styles.active : ""}`} onClick={() => handlechange(7, "VENGEUR", "Ce profil d’attaquant se caractérise par sa détermination et sa connaissance interne des systèmes et processus organisationnels", 'white')} />
                <img src={avatar8} alt="" className={`w-[70px] h-[70px] rounded-full  ${activeitem === 8 ? styles.active : ""}`} onClick={() => handlechange(8, "MALVEILLANT PATHOLOGIQUE", "Les motivations de ce profil d’attaquant sont d’ordre pathologique ou opportuniste et parfois guidées par l’appât du gain (exemples: concurrent déloyal, client malhonnête, escroc, fraudeur)", 'white')} />
            </div>
            <div className="flex flex-row mt-[10%]">
                <div className={twMerge(styles.desc, 'w-1/2')}>
                    <h3>{title}</h3>
                    <p>{text}</p>
                </div>
                <div className="w-1/2">
                    <ChartRd color={radar.color} bgColor={radar.bgColor} dimension={radar.dimension} />
                </div>
            </div>




            <div className={styles.btn}>
                {/* <button style={{position:"absolute",right:"9%",bottom:"4%"}} >valider</button> */}
            </div>
        </div>
    )
}

export default Card
