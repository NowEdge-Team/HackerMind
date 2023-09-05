import ItemTable from "../itemTable/ItemTable.jsx"
import styles from "./table.module.scss"



function Table() {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.row1}>
        <div className={styles.col1}>Profils d’attaquants</div>
        <div className={styles.col2}>Exemples et mode opératoirs</div>
        </div>

          <ItemTable 
          Title="Etatique"
          Description="États, agences de renseignement. Ce profil d’attaquant secaractérise par sa capacité à réaliser 
          une opération offensive sur un temps long (ressources stables, procédures) et à adapter ses outils
          et méthodes à la topologie de la cible"
          />
          <ItemTable 
          Title="CRIME ORGANISE"
          Description="Mafias, gangs, officines. Arnaque en ligne ou au président, demande de rançon ou attaque par rançongiciel,
           exploitation de réseaux de « machines robots » (botnet), etc."
          />
          <ItemTable 
          Title="TERRORISTE"
          Description="Cyberterroristes, cybermilices. Attaques habituellement peu sophistiquées, déni de service et défiguration"
          />
          <ItemTable 
          Title="ACTIVISTE IDIOLOGIQUE" 
          Description="Cyber-hacktivistes, groupements d’intérêt, sectes."
          />
           <ItemTable 
          Title="OFFICINE SPÉCIALISÉE"
          Description="Ce type de hacker chevronné est souvent à l’origine de la conception et de la création d’outils et kits d’attaques 3 accessibles en ligne (éventuellement monnayés) qui sont ensuite utilisables « clés en main »"
          />
          <ItemTable 
          Title="AMATEUR"
          Description="Profil du hacker « script-kiddies » ou doté de bonnes connaissances informatiques, et motivé par une quête de reconnaissance sociale, d’amusement, de défi"
          />
          <ItemTable 
          Title="VENGEUR"
          Description="Ce profil d’attaquant se caractérise par sa détermination et sa connaissance interne des systèmes et processus organisationnels"
          />
          <ItemTable 
          Title="MALVEILLANT PATHOLOGIQUE" 
          Description="Les motivations de ce profil d’attaquant sont d’ordre pathologique ou opportuniste et parfois guidées par l’appât du gain (exemples: concurrent déloyal, client malhonnête, escroc, fraudeur)"
          />

      </div>


      
    </>
  )
}



export default Table
