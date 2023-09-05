import ItemTable from "../itemTable/ItemTable.jsx"
import styles from "./tablesec.module.scss"



function TableSec() {
  return (
    <>
    <div className={styles.container}>

      <div className={styles.row1}>
        <div className={styles.col1}>Motivations</div>
        <div className={styles.col2}>Exemples de motivations</div>
        </div>

          <ItemTable 
          Title="ESPIONNAGE"
          Description="Opération de renseignement (étatique, économique)"
          />
          <ItemTable 
          Title="PRÉPOSITIONNEMENT STRATÉGIQUE"
          Description="Prépositionnement visant généralement une attaque sur le long terme, sans que la finalité poursuivie soit clairement établie (exemples: compromission de réseaux d’opérateurs de télécommunication, infiltration de sites Internet d’information de masse pour lancer une opération d’influence politique ou économique à fort écho)."
          />
          <ItemTable 
          Title="INFLUENCE"
          Description="Opération visant à diffuser de fausses informations ou à les altérer, mobiliser les leaders d’opinion sur les réseaux sociaux, détruire des réputations, divulguer des informations confidentielles, dégrader l’image d’une organisation ou d’un État."
          />
          <ItemTable 
          Title="ENTRAVE AU FONCTIONNEMENT" 
          Description="Opération de sabotage visant par exemple à rendre indisponible un site Internet, à provoquer une saturation informationnelle, à empêcher l’usage d’une ressource numérique, à rendre indisponible une installation physique"
          />
           <ItemTable 
          Title="LUCRATIF"
          Description="Opération visant un gain financier, de façon directe ou indirecte. Généralement liée au crime organisé, on peut citer: escroquerie sur Internet, blanchiment d’argent, extorsion ou détournement d’argent, manipulation de marchés financiers, falsification de documents administratifs, usurpation d’identité, etc."
          />
          <ItemTable 
          Title="DÉFI, AMUSEMENT"
          Description="Opération visant à réaliser un exploit à des fins de reconnaissance sociale, de défi ou de simple amusement"
          />
         
      </div>


      
    </>
  )
}



export default TableSec