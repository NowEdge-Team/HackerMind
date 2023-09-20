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
  text: "TOR est comme un tunnel secret sur Internet. Imaginez que lorsque vous surfez sur le Web, vous laissez derrière vous des empreintes de pas. TOR vous aide à cacher ces empreintes en vous permettant de naviguer anonymement. Lorsque vous utilisez TOR, votre trafic Internet rebondit à travers différents ordinateurs dans le monde, masquant ainsi votre adresse IP. Cela signifie que personne ne peut facilement savoir qui vous êtes ou ce que vous faites en ligne. C'est utile pour protéger votre vie privée, mais cela peut également être utilisé par des personnes malveillantes, il faut donc l'utiliser avec précaution.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio1
},
{
  id: 2,
  backgroundColor: "#FF001C",
  backgroundIcon: "rgba(255, 0, 28, 0.47)",
  icon: shodan,
  text: "The Hidden Wiki est un peu comme un catalogue secret d'Internet. Il contient des liens vers des sites Web qui ne sont pas visibles sur Internet ordinaire. Certains de ces sites peuvent être utiles, mais beaucoup d'entre eux sont illégaux ou dangereux. Il est essentiel d'être très prudent lorsque vous explorez le contenu du darknet, car vous pourriez vous retrouver sur des sites malveillants ou illégaux sans le vouloir.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons  ",
  audio: audio2
},
{
  id: 3,
  backgroundColor: "#CBBAFF",
  backgroundIcon: "rgba(203, 186, 255, 0.49)",
  icon: nmap,
  text: "Project Haystack se concentre sur l'organisation des données provenant d'appareils connectés, tels que des thermostats intelligents ou des capteurs de température. L'idée est de rendre ces données plus faciles à gérer et à utiliser. Cependant, il est important de noter que la collecte de données provenant d'appareils IoT peut poser des problèmes de sécurité si ces données ne sont pas correctement protégées. C'est comme si vous aviez une boîte à secrets, mais vous devez vous assurer que personne d'autre ne puisse l'ouvrir.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio3
},
{
  id: 4,
  backgroundColor: "#F7941E",
  backgroundIcon: "rgba(247, 148, 30, 0.49)",
  icon: burpsuite,
  text: "ProtonMail est une boîte aux lettres électronique super sécurisée. Lorsque vous envoyez un e-mail via ProtonMail, il est verrouillé dans une boîte à secrets virtuelle, et seul le destinataire peut l'ouvrir. Cela signifie que même si quelqu'un d'autre intercepte votre e-mail en cours de route, il ne pourra pas le lire. C'est un peu comme envoyer une lettre dans un coffre-fort. C'est une excellente façon de protéger vos messages personnels.",
  msg: "Cliquez sur la notification pour découvrir les applications que nous utilisons ",
  audio: audio4
},
{
  id: 5,
  backgroundColor: "#00AAE2",
  backgroundIcon: "rgba(0, 170, 226, 0.49)",
  icon: metasploit,
  text: "Telegram est une application de messagerie qui garde vos conversations privées. Lorsque vous envoyez un message, il est enveloppé dans un coffre-fort virtuel, de sorte que seuls vous et votre ami pouvez le voir. Vous pouvez même programmer vos messages pour qu'ils disparaissent après un certain temps. C'est comme avoir une conversation dans une pièce secrète qui s'efface automatiquement après un certain temps.",
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
          <p>TOR</p>
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
            <button onClick={onBack}>Pas encore</button>
          </div>

        </div>
      </div>


    </div>


  )
}



export default App






