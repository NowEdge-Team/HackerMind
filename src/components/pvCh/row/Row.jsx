import styles from './row.module.scss';
import ItemRow from "../../../components/pvCh/itemRow/ItemRow.jsx"
import { useState } from "react";
import { useEffect } from 'react';




function Row({showNextBtn}){

  const[listLinks,setListLinks] = useState([
    {id:"1",title:"1",link:"http://google.com",show:false},
    {id:"2",title:"2",link:"http://google.com",show:false},
    {id:"3",title:"3",link:"http://google.com",show:false},
    {id:"4",title:"4",link:"http://google.com",show:false},
    {id:"5",title:"6",link:"http://google.com",show:false},
    {id:"6",title:"5",link:"http://google.com",show:false}
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