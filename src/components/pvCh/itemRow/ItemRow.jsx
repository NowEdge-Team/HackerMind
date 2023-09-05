import linkImg from "../../../assets/link.png"
import arrow from "../../../assets/Arrow.png"
import boolean from "../../../assets/Boolean.png"
import styles from './item.module.scss';


  

function ItemRow({data,onclick}) {
    
  return (
        <div className={styles.row}>
            <img src={linkImg} alt=""
            width={30}
            height={30}
            style={{
                marginLeft: "12px" ,
            }}
            />
            <h4>{data.title}</h4>
            <p></p>
            <div className={styles.arrow}>
                <a href={data.link} target="_blank" rel="noopener noreferrer" onClick={()=>onclick(data)}>
                    <img  
                       src={arrow} 
                       alt="" 
                       width={22}
                       height={22}
                        />
                </a>
            </div>
            <div className={styles.boolean}>
            {data.show && (
                <img src={boolean} 
                alt=""
                width={29}
                height={29}
                />)}
            </div>
        </div>   
  )
}

export default ItemRow
