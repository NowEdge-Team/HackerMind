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

      </div>

      



      
    </>
  )
}

export default Table
