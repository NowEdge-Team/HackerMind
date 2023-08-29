import React from 'react'
import styles from "./itemtable.module.scss"
import { Description } from '@mui/icons-material'



function ItemTable({Title,Description}) {
  return (
    
    <div className={styles.container}>
        <div className={styles.box1}>
            <p>{Title}</p>
        </div>
        <div className={styles.box2}>
            <p>{Description}</p>
        </div>
    </div> 
  
  )
}

export default ItemTable
