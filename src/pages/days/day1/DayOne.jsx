import {useState} from "react"
import styles from "./day.module.scss"
import ing from "../../../assets/Ingénieur social.png"
import bell from "../../../assets/bell.png"
import tor from "../../../assets/image1.png"
import hidden from "../../../assets/image2.png"
import project from "../../../assets/image3.png"
import proton from "../../../assets/image4.png"
import telegram from "../../../assets/telegram.png"
import nulled from "../../../assets/image5.png"
import poly from "../../../assets/Polygone 7.svg"
import arrow from "../../../assets/images/pv-challenge/images/arrow-right-solid (1).svg"
import Profile from "../../../components/pvCh/profile/profile.jsx";
import Audio from "../../../components/pvCh/day2/AudioPlayer/Audio.jsx"
import runningSolid from "../../../assets/images/pv-challenge/running-solid2.svg";
import {useHistory} from "react-router-dom";
import audio1 from "../../../assets/audio/Niv1/fr/Tor.m4a"
import audio2 from "../../../assets/audio/Niv1/fr/The_Hidden_Wiki.m4a"
import audio3 from "../../../assets/audio/Niv1/fr/Project_Haystack.m4a"
import audio4 from "../../../assets/audio/Niv1/fr/ProtonMail.m4a"
import audio5 from "../../../assets/audio/Niv1/fr/Telegram.m4a"
import audio6 from "../../../assets/audio/Niv1/fr/Nulled.m4a"
import violet from "../../../assets/Book/Violet.png"
import red from "../../../assets/Book/Red.png"
import orange from "../../../assets/Book/Orange.png"
import azure from "../../../assets/Book/Azure.png"
import bleu from "../../../assets/Book/Bleu.png"
import indigo from "../../../assets/Book/Indigo.png"






  const dataList = [{
      backgroundColor:"#602F80",
      backgroundIcon:"rgba(96, 47, 128, 0.49)",
      icon:tor,
      text:"TOR est comme un tunnel secret sur Internet. Imaginez que lorsque vous surfez sur le Web, vous laissez derrière vous des empreintes de pas. TOR vous aide à cacher ces empreintes en vous permettant de naviguer anonymement. Lorsque vous utilisez TOR, votre trafic Internet rebondit à travers différents ordinateurs dans le monde, masquant ainsi votre adresse IP. Cela signifie que personne ne peut facilement savoir qui vous êtes ou ce que vous faites en ligne. C'est utile pour protéger votre vie privée, mais cela peut également être utilisé par des personnes malveillantes, il faut donc l'utiliser avec précaution.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons ",
      audio:audio1
      
    },{
      backgroundColor:"#FF001C",
      backgroundIcon:"rgba(255, 0, 28, 0.47)",
      icon:hidden,
      text:"The Hidden Wiki est un peu comme un catalogue secret d'Internet. Il contient des liens vers des sites Web qui ne sont pas visibles sur Internet ordinaire. Certains de ces sites peuvent être utiles, mais beaucoup d'entre eux sont illégaux ou dangereux. Il est essentiel d'être très prudent lorsque vous explorez le contenu du darknet, car vous pourriez vous retrouver sur des sites malveillants ou illégaux sans le vouloir.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons  ",
      audio:audio2
    },{
      backgroundColor:"#F7941E",
      backgroundIcon:"rgba(247, 148, 30, 0.49)",
      icon:project,
      text:"Project Haystack se concentre sur l'organisation des données provenant d'appareils connectés, tels que des thermostats intelligents ou des capteurs de température. L'idée est de rendre ces données plus faciles à gérer et à utiliser. Cependant, il est important de noter que la collecte de données provenant d'appareils IoT peut poser des problèmes de sécurité si ces données ne sont pas correctement protégées. C'est comme si vous aviez une boîte à secrets, mais vous devez vous assurer que personne d'autre ne puisse l'ouvrir.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons " ,
      audio:audio3
    },{
      backgroundColor:"#CBBAFF",
      backgroundIcon:"rgba(203, 186, 255, 0.49)",
      icon:proton,
      text:"ProtonMail est une boîte aux lettres électronique super sécurisée. Lorsque vous envoyez un e-mail via ProtonMail, il est verrouillé dans une boîte à secrets virtuelle, et seul le destinataire peut l'ouvrir. Cela signifie que même si quelqu'un d'autre intercepte votre e-mail en cours de route, il ne pourra pas le lire. C'est un peu comme envoyer une lettre dans un coffre-fort. C'est une excellente façon de protéger vos messages personnels.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons " ,
      audio:audio4
    },{
      backgroundColor:"#00AAE2",
      backgroundIcon:"rgba(0, 170, 226, 0.49)",
      icon:telegram,
      text:"Telegram est une application de messagerie qui garde vos conversations privées. Lorsque vous envoyez un message, il est enveloppé dans un coffre-fort virtuel, de sorte que seuls vous et votre ami pouvez le voir. Vous pouvez même programmer vos messages pour qu'ils disparaissent après un certain temps. C'est comme avoir une conversation dans une pièce secrète qui s'efface automatiquement après un certain temps.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons " ,
      audio:audio5
    },{
      backgroundColor:"#527D9A",
      backgroundIcon:"rgba(82, 125, 154, 0.49)",
      icon:nulled,
      text:"Nulled est un endroit dangereux sur Internet. C'est comme une rue sombre où des personnes malveillantes vendent des choses illégales, comme des copies piratées de logiciels et des virus informatiques. Si vous visitez Nulled, vous pourriez être infecté par des logiciels malveillants ou vous mettre en danger juridiquement. Il est important de rester loin de ces endroits sombres en ligne.",
      msg:"Cliquez sur la notification pour découvrir les applications que nous utilisons " ,
      audio:audio6
    }
  ]

function App({onNext}) {


      const [modal, setModal] = useState(false);
      const [currentIndex, setCurrentIndex] = useState(0);



      const onCloseModal = () => {
        setCurrentIndex(()=> currentIndex + 1 )
        setModal(!modal);
      };

      const onBackModal = () => {
        setModal(!modal);
      };


      if(modal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

      const toggleModal = () => {
        setModal(!modal);
      };

      let history = useHistory();

      let currentIndex_ = currentIndex <= 5 ? currentIndex : 5;

  return (
    <>
      <Modal data={dataList[currentIndex_]} modal={modal} close={onCloseModal} onBack={onBackModal} />
      
      <div className={styles.container}>

        <div className={styles.profile}>
          <Profile/>
        </div>
        <div className={styles.backBtn}>
          <button onClick={() => history.push("/")}>Accueil
            <img src={runningSolid}  />
          </button>

        </div>
           

            <img src={violet} alt="" width={56} style={{position: "absolute", top: "20%", left: "6%"}}/>
             <img src={red} alt="" width={56} style={{position: "absolute", top: "30%",left: "6%"}} />
            <img src={orange} alt="" width={56} style={{position: "absolute", top: "40%",left: "6%"}}  />
            <img src={azure} alt="" width={56} style={{position: "absolute", top: "50%",left: "6%"}} />
            <img src={bleu} alt="" width={56} style={{position: "absolute", top: "30%",left: "16%"}} />
            <img src={indigo} alt="" width={56} style={{position: "absolute", top: "40%", left: "16%",}}/> 


          <div className={styles.Msg}>
              <img src={ing} alt="" style={{position: "absolute", top: "65%", left: "0%"}}/>
          </div>

          <div className={styles.bell}>

              {currentIndex===0 && 
              <img src={bell} alt="" width={25} className={styles.bell1} style={{position: "absolute", top: "24%", left: "9%",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===1 && 
              <img src={bell} alt="" width={25} className={styles.bell2} style={{position: "absolute", top: "34%", left: "9%",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===2 && 
              <img src={bell} alt="" width={25} className={styles.bell3} style={{position: "absolute", top: "44%", left: "8%",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===3 && 
              <img src={bell} alt="" width={25} className={styles.bell4} style={{position: "absolute", top: "54%", left: "8%",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===4 && 
              <img src={bell} alt="" width={25} className={styles.bell5} style={{position: "absolute", top: "34%", left: "19%",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===5 && 
              <img src={bell} alt="" width={25} className={styles.bell6} style={{position: "absolute", top: "44%", left: "19%",}} onClick={()=>{
                toggleModal();
                }} />}
          </div>

          <div className={styles.message}>
                <h2>Ingénieur social</h2>
                <p className={styles.msg_text} >  {dataList[currentIndex_].msg}</p>
                <img src={poly} alt="" />
          </div>
          {/* <div className={styles.audio}>
            <Audio/>
          </div> */}

          <buttom className={`${currentIndex === 6  ? styles.btnNextEnble :styles.btnNextDesable }`} onClick={ currentIndex === 6 ? onNext : onNext}  >
          Etape suivante <img src={arrow} />
          </buttom>
    </div>
      </>
    
  )
}





 function Modal({modal=false,data,close,onBack}) {

    if (!modal) return null;

  return (

    
    
      <div className={styles.modal}>
        <div className={styles.overlay}></div>
          <div className={styles.modal_content} style={{backgroundColor:data.backgroundColor}}>
                <div className={styles.bg} >
                        <div className={styles.bg_media} style={{backgroundColor:data.backgroundIcon}}>
                          <img 
                          src={data.icon} 
                          alt=""
                          width={200}
                          height={59}
                          />
                        </div>
            
                </div>
                
            <div className={styles.desc}>
              <p>{data.text}</p>
              <span style={{backgroundColor:data.backgroundColor}}></span>
              <div className={styles.ModalAudio}>
                  <Audio  src={data.audio}/>
              </div>
              <div className={styles.close}>
                <button onClick={close}>Terminé<img src={arrow} /></button>
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


