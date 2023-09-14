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




function Card(){

    const [title,setTitle] = useState("avatar 1")
    const [text,setText] = useState('Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.')
    const [color,setColor] = useState('')
    const [activeitem,setActiveItem] = useState()


    const [radar,setRadar] = useState({
            color:'green',
            bgColor:'#82E0AA',
            dimension:[9,0,0,9,10]
    })


    const handlechange = (id,title,text,color) => {
        setActiveItem(id)
        // setImgsrc(imgSrc) ;
        setText(text)
        setTitle(title)
        setColor(color)
        let dataRadar
        switch (id) {
                case 1:
                dataRadar = {
                    color:'green',
                    bgColor:'#82E0AA',
                    dimension:[9,0,0,9,10]
                }
                break;

                case 2:
                dataRadar = {
                    color:'blue',
                    bgColor:'#AED6F1',
                    dimension:[9,0,9,10,10]
                }
                break

                case 3:
                dataRadar = {
                    color:'red',
                    bgColor:'#F5B7B1',
                    dimension:[0,0,9,10,9]
                }
                break

                case 4:
                dataRadar = {
                    color:'#4D0AC3',
                    bgColor:'#A372F8',
                    dimension:[10,10,10,0,0]
                }
                break

                case 5:
                dataRadar = {
                    color:'#E717A4',
                    bgColor:'#F1AADB',
                    dimension:[9,6,8,8,6]
                }
                break

                case 6:
                dataRadar = {
                    color:'green',
                    bgColor:'LightGrey',
                    dimension:[1,2,2,2,2]
                }
                break

                case 7:
                dataRadar = {
                    color:'green',
                    bgColor:'LightGrey',
                    dimension:[1,2,2,2,2]
                }
                break
                
                case 8:
                dataRadar = {
                    color:'green',
                    bgColor:'LightGrey',
                    dimension:[1,2,2,2,2]
                }
                break
        }
        setRadar({...dataRadar})
    }


  return (
    <div className={styles.container} style={{backgroundColor:color}}>
        <div className={styles.profil}>

            <img src={avatar} alt="" className={`${activeitem=== 1 ? styles.active : "" }`} style={{position:"absolute",left:"6%",top:"5%"}} onClick={()=>handlechange(1,"ÉTATIQUE","États, agences de renseignement. Ce profil d’attaquant se caractérise par sa capacité à réaliser une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils et méthodes à la topologie de la cible.",'white')} />
            <img src={avatar2} alt="" className={`${activeitem=== 2 ? styles.active : "" }`} style={{position:"absolute",left:"17%",top:"5%"}} onClick={()=>handlechange(2,"CRIME ORGANISÉ","Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel, exploitation de réseaux de « machines robots » (botnet), etc.",'white')}/>
            <img src={avatar3} alt="" className={`${activeitem=== 3 ? styles.active : "" }`} style={{position:"absolute",left:"28%",top:"5%"}} onClick={()=>handlechange(3,"TERRORISTE","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.",'white')} />
            <img src={avatar4} alt="" className={`${activeitem=== 4 ? styles.active : "" }`} style={{position:"absolute",left:"39%",top:"5%"}} onClick={()=>handlechange(4,"ACTIVISTE IDÉOLOGIQUE","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.",'white')} />
            <img src={avatar5} alt="" className={`${activeitem=== 5 ? styles.active : "" }`} style={{position:"absolute",left:"50%",top:"5%"}} onClick={()=>handlechange(5,"OFFICINE SPÉCIALISÉE","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.",'white')}  />
            <img src={avatar6} alt="" className={`${activeitem=== 6 ? styles.active : "" }`} style={{position:"absolute",left:"61%",top:"5%"}} onClick={()=>handlechange(6,"AMATEUR","Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi",'white')} />
            <img src={avatar7} alt="" className={`${activeitem=== 7 ? styles.active : "" }`} style={{position:"absolute",left:"72%",top:"5%"}} onClick={()=>handlechange(7,"VENGEUR","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.",'white')}/>
            <img src={avatar8} alt="" className={`${activeitem=== 8 ? styles.active : "" }`} style={{position:"absolute",left:"83%",top:"5%"}} onClick={()=>handlechange(8,"MALVEILLANT PATHOLOGIQUE","Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quas dolores doloribus voluptatem.",'white')}/>
            
        </div>
        <div className={styles.desc}>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>

        <div className={styles.radar} style={{position:"absolute",right:"5%",top:"33%"}}>
            {/* <img src={imgSrc} alt="" style={{position:"absolute",right:"8%",top:"36%"}} /> */}

            <ChartRd color={radar.color} bgColor={radar.bgColor} dimension={radar.dimension} />

            
        </div>
        <div className={styles.btn}>
            {/* <button style={{position:"absolute",right:"9%",bottom:"4%"}} >valider</button> */}
        </div>
    </div>
  )
}

export default Card
