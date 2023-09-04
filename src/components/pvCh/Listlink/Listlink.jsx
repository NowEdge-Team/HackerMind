import React from 'react'
import link from "../../../assets/link.png"
import arrow from "../../../assets/arrow2.png"
import styles from "./list.module.scss"


function Listlink({data}) {

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
          <ItemSelect options={data[0].options} />
          <ItemSelect options={data[1].options}/>
          <ItemSelect options={data[2].options}/>
          <ItemSelect options={data[3].options}/>
          <ItemSelect options={data[4].options}/>


          


        </div>
        <div className={styles.row3}>
          <h3>Motivation</h3>
          <ItemSelect options={data[5].options} />
          <ItemSelect options={data[6].options}/>
          <ItemSelect options={data[7].options}/>
          <ItemSelect options={data[8].options}/>
          <ItemSelect options={data[9].options}/>

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



function ItemSelect({options}) {
  const [option, setOption] = React.useState("");

  const handleChange_ = (e) => {
     setOption(e.target.value);
  }


  return (
        <div className={styles.row5}>
          <select      value={option}           onChange={handleChange_}
          >
             <option value={""}><p>Select Option</p></option>
           { options.map(item=> <option key={item.value} value={item.value}><p>{item.label}</p></option>)
           }
            
          </select>

        </div>
      
  )
}

export default Listlink
