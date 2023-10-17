import styles from "./profile.module.scss";
import playIcon from "../../../assets/images/pv-challenge/images/.svg";

export default function  BtnAudio({onClick=()=>null}){

    return <div className={styles.container}>
                <button className={styles.btn} onClick={onClick} >
                    <img alt={""} src={playIcon}  />
                    <span>Réécouter l'audio </span>
                </button>
          </div>
}
