import { useState } from "react";
import { useHistory } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import ing from "../../../assets/Ingénieur social.png";
import poly from "../../../assets/Polygone 7.svg";
import audio3 from "../../../assets/audio/Niv1/fr/Project_Haystack.m4a";
import audio4 from "../../../assets/audio/Niv1/fr/ProtonMail.m4a";
import audio5 from "../../../assets/audio/Niv1/fr/Telegram.m4a";
import audio2 from "../../../assets/audio/Niv1/fr/The_Hidden_Wiki.m4a";
import audio1 from "../../../assets/audio/Niv1/fr/Tor.m4a";
import bell from "../../../assets/bell.png";
import tor from "../../../assets/image1.png";
import shodan from "../../../assets/shodan-logo.png";
import nmap from "../../../assets/nmaplogo.png";
import burpsuite from "../../../assets/burpsuite.png";
import arrow from "../../../assets/images/pv-challenge/images/arrow-right-solid (1).svg";
import metasploit from "../../../assets/metasploit.png";
import Audio from "../../../components/pvCh/day2/AudioPlayer/Audio.jsx";
import Profile from "../../../components/pvCh/profile/profile.jsx";
import styles from "./day.module.scss";
import torlogo from "../../../assets/Tor_logo.png";
import metasploitlogo from "../../../assets/metasploitlogo.png";
import shodanlogo from "../../../assets/shodanlogo.png";
import nmaplogo from "../../../assets/nmaplogo.png"
import burpsuitelogo from "../../../assets/burpsuitelogo.png"
import HeaderProfile from "@/components/HeaderPrfile";




const listNotif = [
  { top: "24%", left: "8%", idMessage: 1 },
  { top: "37%", left: "8%", idMessage: 2 },
  { top: "52%", left: "8%", idMessage: 3 },
  { top: "25%", left: "18%", idMessage: 4 },
  { top: "39%", left: "18%", idMessage: 5 },
]

const dataList = [{
  id: 1,
  backgroundColor: "#602F80",
  backgroundIcon: "rgba(96, 47, 128, 0.49)",
  icon: tor,
  text: " TOR fait référence à The Onion Router. TOR est un navigateur web comme Google Chrome ou Microsoft Edge permettant de naviguer de façon anonyme sur le web, grâce à un réseau constitué par les utilisateurs du monde entier.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio1
},
{
  id: 2,
  backgroundColor: "#FF001C",
  backgroundIcon: "rgba(255, 0, 28, 0.47)",
  icon: shodan,
  text: "Shodan est un moteur de recherche créé en 2009. Shodan est un site web spécialisé dans la recherche d'objets connectés à Internet, et ayant donc une adresse IP visible sur le réseau. Ces recherches sont effectuées par des scans de ports massifs effectués sur le réseau Internet",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons  ",
  audio: audio2
},
{
  id: 3,
  backgroundColor: "#CBBAFF",
  backgroundIcon: "rgba(203, 186, 255, 0.49)",
  icon: nmap,
  text: "Nmap est un scanner de ports libre permettant de détecter les ports ouverts, identifier les services hébergés et obtenir des informations sur le système d'exploitation d'un ordinateur distant. ",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio3
},
{
  id: 4,
  backgroundColor: "#F7941E",
  backgroundIcon: "rgba(247, 148, 30, 0.49)",
  icon: burpsuite,
  text: "BUrpsuite est un outil qui offre la possibilité de créer des requêtes webs nuisibles pour une application. Il peut également aider à la détection de vulnérabilités classiques comme des injections SQL, des vulnérabilités de type cross-site scripting ou autre. Il est utilisé par les cyberattaquants mais aussi par les auditeurs techniques.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio4
},
{
  id: 5,
  backgroundColor: "#00AAE2",
  backgroundIcon: "rgba(0, 170, 226, 0.49)",
  icon: metasploit,
  text: "Le but de Metasploit est de fournir des informations sur les vulnérabilités de systèmes informatiques, d'aider à l’intrusion dans les systèmes informatiques. Il est notamment connu pour permettre la réalisation d’exploit (le fait d’exploiter une vulnérabilité) contre une machine située sur un réseau distant. ",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio5
}
]


const Notif = ({ currentIndex, index, data, onClick }) => {

  const onClick_ = () => {
    onClick(data.idMessage)
  }


  if (index === currentIndex)
    return <img key={index} src={bell} alt="" width={25} className={styles.bell1} style={{ position: "absolute", top: data.top, left: data.left, }} onClick={onClick_} />
}


function App({ onNext }) {


  const [message, setMessage] = useState({});
  const [modal, setModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // 0 , 1 ,3


  //  0 
  const onCloseModal = (id) => {
    if (currentIndex === id - 1)
      setCurrentIndex(() => currentIndex + 1)

    setModal(!modal);
  };

  const onBackModal = () => {
    setModal(!modal);
  };


  if (modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  const toggleModal = (idMessage) => {
    const findMessage = dataList.find(item => item.id === idMessage)
    setMessage(findMessage);
    setModal(!modal);
  };

  let history = useHistory();

  let currentIndex_ = currentIndex <= 4 ? currentIndex : 4;

  return (
    <>
      <Modal data={message} modal={modal} close={onCloseModal} onBack={onBackModal} />

      <div className={styles.container}>

        <div className="pl-[6%] pt-[12px] pr-32">
          <HeaderProfile textStyle={"text-[#ffffff]"} />
        </div>
        <div className={styles.block} style={{ position: "absolute", top: "16%", left: "6%" }} onClick={currentIndex >=0 ? ()=>toggleModal(listNotif[0].idMessage) : null}>
          <img src={torlogo} alt="" width={56} />
          <p>Tor</p>
        </div>
        <div className={styles.block} style={{ position: "absolute", top: "34%", left: "6%" }} onClick={currentIndex >=1 ? ()=>toggleModal(listNotif[1].idMessage) : null} >
          <img src={shodanlogo} alt="" width={56} />
          <p style={{ width: "58px" }}>Shodan</p>
        </div>

        <div className={styles.block} style={{ position: "absolute", top: "51%", left: "6%" }} onClick={currentIndex >=2 ? ()=>toggleModal(listNotif[2].idMessage) : null}>
          <img src={nmaplogo} alt="" width={56} />
          <p style={{ width: "56px", paddingTop: "8px" }}>Nmap</p>
        </div>

        <div className={styles.block} style={{ position: "absolute", top: "20%", left: "16%" }} onClick={currentIndex >=3 ? ()=>toggleModal(listNotif[3].idMessage) : null}>
          <img src={burpsuitelogo} alt="" width={56} />
          <p>burpsuite</p>
        </div>

        <div className={styles.block} style={{ position: "absolute", top: "34%", left: "16%" }} onClick={currentIndex >=4 ? ()=>toggleModal(listNotif[4].idMessage) : null}>
          <img src={metasploitlogo} alt="" width={56} />
          <p>metasploit</p>
        </div>


        <div className={styles.bell}>

          {listNotif.map((elm, index) => {

            return <Notif key={index} currentIndex={currentIndex} index={index} data={elm} onClick={toggleModal} />

          })}

        </div>

        <div className={styles.Msg}>
          <img src={ing} alt="" style={{ position: "absolute", top: "65%", left: "0%" }} />
        </div>
        <div className={styles.message}>
          <h2>L'INGENIEUR SOCIAL</h2>
          <p className={styles.msg_text} >  {dataList[currentIndex_].msg}</p>
          <img src={poly} alt="" />
        </div>
        {/* <div className={styles.audio}>
            <Audio/>
          </div> */}

        <buttom className={`${currentIndex === 5 ? styles.btnNextEnble : styles.btnNextDesable}`} onClick={currentIndex === 5 ? onNext : onNext}  >
          Etape suivante <img src={arrow} />
        </buttom>
      </div>
    </>

  )
}





function Modal({ modal = false, data, close, onBack }) {

  if (!modal) return null;

  return (



    <div className={styles.modal}>
      <div className={styles.overlay}></div>
      <div className={styles.modal_content} style={{ backgroundColor: data.backgroundColor }}>
        <div className={styles.bg} >
          <div className={styles.bg_media} style={{ backgroundColor: data.backgroundIcon }}>
            <img
              src={data.icon}
              alt=""
              width={200}
              height={59}
            />
          </div>

        </div>

        <div className={styles.desc}>
          <p>
            <Typewriter
              options={{
                strings: data.text,
                autoStart: true,
                // loop: true,
                delay: 30
              }}
            />
          </p>
          { }
          <span className={styles.barre} style={{ backgroundColor: data.backgroundColor }}></span>
          <div className={styles.ModalAudio}>
            <Audio src={data.audio} />
          </div>
          <div className={styles.close}>
            <button onClick={() => close(data.id)}>Terminé<img src={arrow} /></button>
          </div>
          <div className={styles.back}>
            <button onClick={onBack}>non</button>
          </div>

        </div>
      </div>


    </div>


  )
}



export default App






