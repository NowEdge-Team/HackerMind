import {useState} from "react";
import {useHistory} from "react-router-dom";
import Typewriter from 'typewriter-effect';
import ing from "../../../assets/Ingénieur social.png";
import poly from "../../../assets/Polygone 7.svg";
import audio3 from "../../../assets/audio/Niv1/fr/Nmap.m4a";
import audio4 from "../../../assets/audio/Niv1/fr/BurpSuite.m4a";
import audio5 from "../../../assets/audio/Niv1/fr/Metasploit.m4a";
import audio2 from "../../../assets/audio/Niv1/fr/Shodan.m4a";
import audio1 from "../../../assets/audio/Niv1/fr/Tor.m4a";
import bell from "../../../assets/bell.png";
import tor from "../../../assets/image1.png";
import shodan from "../../../assets/shodan-logo.png";
import nmap from "../../../assets/nmaplogo.png";
import nmaplogo from "../../../assets/nmaplogo.png";
import burpsuite from "../../../assets/burpsuite.png";
import arrow from "../../../assets/images/pv-challenge/images/arrow-right.svg";
import metasploit from "../../../assets/metasploit.png";
import Audio from "../../../components/pvCh/day2/AudioPlayer/Audio.jsx";
import styles from "./day.module.scss";
import torlogo from "../../../assets/Tor_logo.png";
import metasploitlogo from "../../../assets/metasploitlogo.png";
import shodanlogo from "../../../assets/shodanlogo.png";
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
  text: "Le moteur de recherche TOR, également connu sous le nom de 'TOR search', est un outil utilisé pour naviguer sur le réseau TOR, un réseau décentralisé et anonyme. Contrairement aux moteurs de recherche conventionnels, il permet d'explorer des sites web hébergés sur le darknet, une partie cachée d'Internet. Il sert à trouver des ressources, des marchés en ligne, et des informations tout en préservant l'anonymat de l'utilisateur grâce à l'acheminement des requêtes via un réseau de serveurs relayeurs. Cela favorise la confidentialité et la sécurité en ligne, utilisées parfois à des fins légales, mais aussi illicites.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio1
},
{
  id: 2,
  backgroundColor: "#FF001C",
  backgroundIcon: "rgba(255, 0, 28, 0.47)",
  icon: shodan,
  text: "Shodan est un moteur de recherche spécialisé dans l'exploration des dispositifs connectés à Internet. Contrairement aux moteurs de recherche traditionnels, Shodan scanne les ports et indexe les informations des appareils connectés, tels que serveurs, caméras de sécurité, routeurs, et plus encore. Il permet aux chercheurs en sécurité, aux administrateurs réseau, et parfois aux cybercriminels de trouver des dispositifs vulnérables. Shodan sert principalement à des fins de surveillance, d'évaluation de la sécurité des infrastructures, de recherche de vulnérabilités et de protection contre les cybermenaces en identifiant les points faibles.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons  ",
  audio: audio2
},
{
  id: 3,
  backgroundColor: "#CBBAFF",
  backgroundIcon: "rgba(203, 186, 255, 0.49)",
  icon: nmap,
  text: "Nmap, abréviation de Network Mapper, est un logiciel d'exploration de réseaux utilisé pour découvrir des dispositifs et des services actifs sur un réseau informatique. Il analyse les ports ouverts, identifie les systèmes d'exploitation, et fournit des informations essentielles sur la configuration réseau. Nmap est un outil essentiel pour les administrateurs réseau, les chercheurs en sécurité, et les hackers, car il permet d'évaluer la sécurité d'un réseau, de détecter des vulnérabilités potentielles et de planifier des mesures de sécurité appropriées. Il est souvent utilisé pour des audits de sécurité, la surveillance réseau, et la défense contre les intrusions.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio3
},
{
  id: 4,
  backgroundColor: "#F7941E",
  backgroundIcon: "rgba(247, 148, 30, 0.49)",
  icon: burpsuite,
  text: "Burp Suite, un logiciel de test de sécurité, est parfois utilisé par les hackers non éthiques pour trouver des failles dans des sites web et y pénétrer illégalement. Ils explorent les faiblesses, comme les failles de sécurité, et les exploitent pour voler des données sensibles, diffuser des logiciels malveillants ou causer d'autres dommages. C'est pourquoi les professionnels de la sécurité utilisent Burp Suite pour renforcer la protection des sites web contre ces attaques, afin de garantir la sécurité des données en ligne et de prévenir les cybercrimes.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio4
},
{
  id: 5,
  backgroundColor: "#00AAE2",
  backgroundIcon: "rgba(0, 170, 226, 0.49)",
  icon: metasploit,
  text: "Metasploit se distingue de Burp Suite en tant qu'outil spécialisé dans l'exploitation de vulnérabilités, plutôt que dans l'analyse des failles de sécurité. Il offre une plateforme complète pour identifier les faiblesses dans les systèmes et, de manière plus inquiétante, pour les exploiter à des fins malveillantes. Les hackers non éthiques utilisent Metasploit pour pénétrer illégalement dans des systèmes, tandis que les experts en sécurité l'emploient pour réaliser des tests d'intrusion autorisés, aider à renforcer la sécurité, et protéger les entreprises contre les cyberattaques.",
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






