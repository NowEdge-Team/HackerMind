import {useState} from "react"
import styles from "./day.module.scss"
import violet from "../../../assets/Book/Violet.png"
import azure from "../../../assets/Book/Azure.png"
import bleu from "../../../assets/Book/Bleu.png"
import indigo from "../../../assets/Book/Indigo.png"
import red from "../../../assets/Book/Red.png"
import orange from "../../../assets/Book/Orange.png"
import Policier from "../../../assets/Policier.png"
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







  const dataList = [{
      backgroundColor:"#602F80",
      backgroundIcon:"rgba(96, 47, 128, 0.49)",
      icon:tor,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit "
    },{
      backgroundColor:"#FF001C",
      backgroundIcon:"rgba(255, 0, 28, 0.47)",
      icon:hidden,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit "
    },{
      backgroundColor:"#F7941E",
      backgroundIcon:"rgba(247, 148, 30, 0.49)",
      icon:project,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore..",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit "  
    },{
      backgroundColor:"#CBBAFF",
      backgroundIcon:"rgba(203, 186, 255, 0.49)",
      icon:proton,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit "  
    },{
      backgroundColor:"#00AAE2",
      backgroundIcon:"rgba(0, 170, 226, 0.49)",
      icon:telegram,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit " 
    },{
      backgroundColor:"#527D9A",
      backgroundIcon:"rgba(82, 125, 154, 0.49)",
      icon:nulled,
      text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore...",
      msg:"Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit " 
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
          <button onClick={() => history.push("/")}>quitter
            <img src={runningSolid}  />
          </button>

        </div>
           

      

            {/* <img src={violet} alt="" style={{position: "absolute", top: "13rem", left: "20rem"}}/>
            <img src={red} alt="" style={{position: "absolute", top: "24rem",left: "25rem"}} />
            <img src={orange} alt="" style={{position: "absolute", top: "25rem",left: "38rem"}}  />
            <img src={azure} alt="" style={{position: "absolute", top: "25rem",right: "38rem"}} />
            <img src={bleu} alt="" style={{position: "absolute", top: "24rem",right: "24rem"}} />
            <img src={indigo} alt="" style={{position: "absolute", top: "13rem", right: "20rem",}}/> */}


          <div className={styles.Msg}>
              <img src={Policier} alt="" style={{position: "absolute", bottom: "0rem", left: "0rem",}}/>
          </div>

          <div className={styles.bell}>

              {currentIndex===0 && 
              <img src={bell} alt="" style={{position: "absolute", top: "16rem", left: "26rem",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===1 && 
              <img src={bell} alt="" style={{position: "absolute", top: "27rem", left: "31rem",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===2 && 
              <img src={bell} alt="" style={{position: "absolute", top: "29rem", left: "43rem",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===3 && 
              <img src={bell} alt="" style={{position: "absolute", top: "29rem", left: "56rem",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===4 && 
              <img src={bell} alt="" style={{position: "absolute", top: "27rem", left: "70rem",}} onClick={()=>{
                toggleModal();
                }} />}
              {currentIndex===5 && 
              <img src={bell} alt="" style={{position: "absolute", top: "16rem", left: "74rem",}} onClick={()=>{
                toggleModal();
                }} />}
          </div>

          <div className={styles.message}>
                <h2>President</h2>
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
                  <Audio/>
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


