import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";
import { useEffect } from 'react';




function Row({showNextBtn}){

  const[listLinks,setListLinks] = useState([
    {id:"1",
    title:"1.L'incroyable cyber-braquage de la Banque centrale du Bangladesh Le 5 février 2016. ",
    para:"Le 5 février 2016, la Banque centrale du Bangladesh a été victime d'un cyber-braquage massif. Les pirates informatiques ont réussi à transférer plus de 81 millions de dollars sur des comptes bancaires situés en Malaisie, aux Philippines et en Sri Lanka.L'attaque a été menée à l'aide d'une faille dans le système SWIFT, un réseau mondial de messagerie sécurisée utilisé par les banques pour transférer des fonds. Les pirates ont réussi à se faire passer pour des employés de la Banque centrale et ont envoyé des instructions frauduleuses à des banques étrangères.Le gouvernement du Bangladesh a mis en place une commission d'enquête pour déterminer les circonstances de l'attaque. En 2018, la commission a conclu que les pirates informatiques étaient originaires de Corée du Nord.",
    link:"https://www.lesechos.fr/2016/03/lincroyable-cyber-braquage-de-la-banque-centrale-du-bangladesh-203921",
    show:false},
    {id:"2",
    title:"2.L'opération Opera",
    para:"L'opération Opera est une enquête internationale menée par les forces de l'ordre de plusieurs pays, dont la France, l'Allemagne et les États-Unis. L'enquête a abouti à l'arrestation de plusieurs membres du groupe de pirates informatiques Lazarus, qui est accusé d'avoir mené des attaques contre des banques, des entreprises et des gouvernements.Lazarus est un groupe de pirates informatiques nord-coréens qui est actif depuis plusieurs années. Le groupe est accusé d'avoir mené des attaques contre des banques, des entreprises et des gouvernements, notamment la Corée du Sud, les États-Unis et le Royaume-Uni.Les membres de Lazarus sont connus pour leur utilisation de logiciels malveillants complexes et sophistiqués. Ils sont également connus pour leurs attaques ciblées et coordonnées.",
    link:"https://www.group-ib.com/resources/research-hub/opera1er-fr/",
    show:false},
    {id:"3",
    title:"3. L'attaque par ransomware Petya",
    para:"L'attaque par ransomware Petya est une attaque informatique qui a touché des milliers d'organisations dans le monde entier en juin 2017. L'attaque a paralysé les systèmes informatiques des victimes, les empêchant d'accéder à leurs données.Petya est un ransomware qui chiffre les données des victimes et demande une rançon pour les déverrouiller. L'attaque a été très coûteuse pour les victimes, qui ont dû payer des millions de dollars en rançon pour récupérer leurs données. L'attaque Petya a été attribuée à un groupe de pirates informatiques appelé NotPetya. Le groupe NotPetya est un groupe de pirates informatiques russes qui est actif depuis plusieurs années.",
    link:"https://www.futura-sciences.com/tech/actualites/securite-ransomware-petya-cyberattaque-deguisee-ukraine-67792/",
    show:false},
    {id:"4",
    title:"4. L'affaire des appels téléphoniques frauduleux",
    para:"En 2022, un homme a été condamné à dix mois de prison avec sursis pour avoir inondé des milliers de boîtes aux lettres électroniques de messages frauduleux. Les messages frauduleux prétendaient provenir de sociétés de téléphonie et demandaient aux destinataires de payer des frais de retard fictifs. Les messages frauduleux étaient envoyés à partir d'un réseau de serveurs situés dans différents pays. L'homme a été arrêté après une enquête menée par les autorités françaises.",
    link:"https://www.zdnet.fr/actualites/dix-mois-de-prison-avec-sursis-pour-avoir-sature-des-milliers-de-bo-tes-electroniques-39132284.htm",
    show:false},
    {id:"5",
    title:"5. Les attaques DDoS menées par des concurrents",
    para:"Les attaques DDoS (déni de service distribué) sont des attaques informatiques qui visent à rendre un site Web ou un service indisponible. Les attaques DDoS peuvent être menées à l'aide de différentes techniques, notamment l'envoi d'une quantité massive de trafic Internet à la cible.Les attaques DDoS peuvent être menées par des pirates informatiques ou par des concurrents. Les concurrents peuvent utiliser les attaques DDoS pour nuire à la réputation ou aux activités d'une entreprise.",
    link:"https://www.silicon.fr/12-des-attaques-ddos-menees-par-des-concurrents-133929.html",
    show:false},
    {id:"6",
    title:"6. La cyberattaque contre TV5Monde",
    para:"Les attaques DDoS (déni de service distribué) sont des attaques informatiques qui visent à rendre un site Web ou un service indisponible. Les attaques DDoS peuvent être menées à l'aide de différentes techniques, notamment l'envoi d'une quantité massive de trafic Internet à la cible.Les attaques DDoS peuvent être menées par des pirates informatiques ou par des concurrents. Les concurrents peuvent utiliser les attaques DDoS pour nuire à la réputation ou aux activités d'une entreprise.",
    link:"https://information.tv5monde.com/info/tv5monde-une-cyberattaque-inquietante-27502",
    show:false}
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