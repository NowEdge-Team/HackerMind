import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";




function Row(){

  const[show,setShow] = useState(true)
      

  return (

        <div className={styles.container}>
            <ItemRow Title="L’incroyable cyber-braquage de la banque centrale du Bangladesh" show={true} />
            <ItemRow Title="OPERA1ER: Ceux qui jouent à Dieu sans y avoir été autorisés" show={false}/>
            <ItemRow Title="Ransomware Petya : une cyberattaque déguisée contre l’Ukraine ?" show={true}/>
            <ItemRow Title="L’incroyable cyber-braquage de la banque centrale du Bangladesh" show={false}/>
            <ItemRow Title="OPERA1ER: Ceux qui jouent à Dieu sans y avoir été autorisés"  show={false}/>
        </div>

  )
}

export default Row