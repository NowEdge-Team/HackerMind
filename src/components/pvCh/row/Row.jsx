import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";
import { useEffect } from 'react';




function Row({showNextBtn}){

  const[listLinks,setListLinks] = useState([
    {id:"1",
    title:"1.L'incroyable cyber-braquage de la Banque centrale du Bangladesh Le 5 février 2016. Le 5 février 2016, la Banque centrale du Bangladesh a été victime d'un cyber-braquage massif. Les pirates informatiques ont réussi à transférer plus de 81 millions de dollars sur des comptes bancaires situés en Malaisie, aux Philippines et en Sri Lanka.L'attaque a été menée à l'aide d'une faille dans le système SWIFT, un réseau mondial de messagerie sécurisée utilisé par les banques pour transférer des fonds. Les pirates ont réussi à se faire passer pour des employés de la Banque centrale et ont envoyé des instructions frauduleuses à des banques étrangères.Le gouvernement du Bangladesh a mis en place une commission d'enquête pour déterminer les circonstances de l'attaque. En 2018, la commission a conclu que les pirates informatiques étaient originaires de Corée du Nord.",
    link:"https://www.lesechos.fr/2016/03/lincroyable-cyber-braquage-de-la-banque-centrale-du-bangladesh-203921",show:false},
    {id:"2",title:"2.L'opération Opera",link:"https://www.group-ib.com/resources/research-hub/opera1er-fr/",show:false},
    {id:"3",title:"3. L'attaque par ransomware Petya",link:"https://www.futura-sciences.com/tech/actualites/securite-ransomware-petya-cyberattaque-deguisee-ukraine-67792/",show:false},
    {id:"4",title:"4. L'affaire des appels téléphoniques frauduleux",link:"https://www.zdnet.fr/actualites/dix-mois-de-prison-avec-sursis-pour-avoir-sature-des-milliers-de-bo-tes-electroniques-39132284.htm",show:false},
    {id:"5",title:"5. Les attaques DDoS menées par des concurrents",link:"https://www.silicon.fr/12-des-attaques-ddos-menees-par-des-concurrents-133929.html",show:false},
    {id:"6",title:"6. La cyberattaque contre TV5Monde",link:"https://information.tv5monde.com/info/tv5monde-une-cyberattaque-inquietante-27502",show:false}
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