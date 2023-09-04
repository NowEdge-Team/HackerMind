import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";




function Row(){

  const[show,setShow] = useState(true)
      

  return (

        <div className={styles.container}>
          
            <ItemRow title="L’incroyable cyber-braquage de la banque centrale du Bangladesh" link="http://google.com" show={true} />
            <ItemRow title="OPERA1ER: Ceux qui jouent à Dieu sans y avoir été autorisés" link="http://google.com" show={false}/>
            <ItemRow title="Ransomware Petya : une cyberattaque déguisée contre l’Ukraine ?" link="http://google.com" show={true}/>
            <ItemRow title="L’incroyable cyber-braquage de la banque centrale du Bangladesh" link="http://google.com" show={false}/>
            <ItemRow title="OPERA1ER: Ceux qui jouent à Dieu sans y avoir été autorisés" link="http://google.com"  show={false}/>
            <ItemRow title="Ransomware Petya : une cyberattaque déguisée contre l’Ukraine ?" link="http://google.com" show={true}/>

        </div>

  )
}

export default Row