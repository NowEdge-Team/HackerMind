import React,{useState} from 'react'
// import map from '../../../assets/vector2.png'
import styles from "./card.module.scss"


const backbg = [{
  id:1,
  background:styles.row1
},
{
  id:2,
  background:styles.row2
},
{
  id:3,
  background:styles.row3
},
{
  id:4,
  background:styles.row4
},
{
  id:5,
  background:styles.row5
},
{
  id:6,
  background:styles.row6
}
]



function Card() {

  const [activeitemId,setActiveItemId] = useState()

  const onClick =(id)=>{
    setActiveItemId(id)
  }

  return (
    <div className={styles.container}>
      
      {backbg.map(item=><div key={item.id} onClick={()=> onClick(item.id)} className={`${item.background} ${item.id==activeitemId ? styles.active : ""}`}/>) }

    </div>
  )
}

export default Card
