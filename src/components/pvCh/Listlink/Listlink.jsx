import React from 'react'
import link from "../../../assets/link.png"
import arrow from "../../../assets/arrow2.png"
import styles from "./list.module.scss"


function Listlink() {
  return (
    <div className={styles.container}>
        <div className={styles.row1}>
          <h3>Exemples des cyberattaques</h3>
          <Itemlink />
          <Itemlink />
          <Itemlink />
          <Itemlink />
          <Itemlink />
          



        </div>
        <div className={styles.row2}>
          <h3>Profil</h3>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>


          



        </div>
        <div className={styles.row3}>
          <h3>Motivation</h3>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>
          <ItemSelect/>


        </div>
      
    </div>
  )
}


function Itemlink() {
    
  return (
        <div className={styles.row4}>
            <img src={link} alt=""
            width={20}
            height={20}
            style={{
                marginLeft: "10px" ,
            }}
            />
            <a href="#">Link</a>
            
            <div className={styles.arrow}>
                <img src={arrow} 
                alt="" 
                width={17}
                height={15}
                />
            </div>
        </div>
  )
}



function ItemSelect() {
    
  return (
        <div className={styles.row5}>
          <select>
            <option value="0"><p>choisir</p></option>
            
          </select>

        </div>
      
  )
}

export default Listlink
