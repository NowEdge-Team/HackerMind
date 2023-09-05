import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";
import { useEffect } from 'react';




function Row({showNextBtn}){

  const[listLinks,setListLinks] = useState([
    {id:"1",title:"1",link:"https://www.lesechos.fr/2016/03/lincroyable-cyber-braquage-de-la-banque-centrale-du-bangladesh-203921",show:false},
    {id:"2",title:"2",link:"https://www.group-ib.com/resources/research-hub/opera1er-fr/",show:false},
    {id:"3",title:"3",link:"https://www.futura-sciences.com/tech/actualites/securite-ransomware-petya-cyberattaque-deguisee-ukraine-67792/",show:false},
    {id:"4",title:"4",link:"https://www.zdnet.fr/actualites/dix-mois-de-prison-avec-sursis-pour-avoir-sature-des-milliers-de-bo-tes-electroniques-39132284.htm",show:false},
    {id:"5",title:"6",link:"https://www.silicon.fr/12-des-attaques-ddos-menees-par-des-concurrents-133929.html",show:false},
    {id:"6",title:"5",link:"https://information.tv5monde.com/info/tv5monde-une-cyberattaque-inquietante-27502",show:false}
])
      
  const handleClick =(item)=> {
    const indexItem = listLinks.findIndex(elem=>elem.id===item.id)
    // const listLinks_=listLinks
    listLinks[indexItem].show=true;
    const everyLinks = listLinks.every(elem=> elem.show===true);
      if (everyLinks === true){
        showNextBtn(true)
      }
    setListLinks([...listLinks])
    
  }

    useEffect(()=>{
      showNextBtn(false)

    },[])
  

  return (

        <div className={styles.container}>
          

            {listLinks.map( item => <ItemRow data={item} onclick={handleClick} />)}


        </div>

  )
}

export default Row