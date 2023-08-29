import link from "../../../assets/link.png"
import arrow from "../../../assets/Arrow.png"
import boolean from "../../../assets/Boolean.png"
import styles from './item.module.scss';


  

function ItemRow({Title,show}) {
    
  return (
        <div className={styles.row}>
            <img src={link} alt=""
            width={30}
            height={30}
            style={{
                marginLeft: "12px" ,
            }}
            />
            <h6>{Title}</h6>
            <div className={styles.arrow}>
                <img src={arrow} 
                alt="" 
                width={22}
                height={22}
                />
            </div>
            <div className={styles.boolean}>
            {show && (
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
