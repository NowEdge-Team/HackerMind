import styles from "./profile.module.scss";
import playIcon from "../../../assets/images/pv-challenge/video.png";
import {useSelector} from "react-redux";
import { useTranslation } from 'react-i18next';

export default function  ShowTuto({onClick = ()=>null}){
    const {center} = useSelector((state) => state.PvChallenge);
    const {t} =useTranslation();

    return <div className={styles.container}>
                <button className={styles.btn} onClick={onClick}>
                    <img alt={""} src={playIcon} width={30} height={20}  />
                    <span>{center?.type_contrat === 1 ? t("revoir") : t("rappels")}</span>
                </button>
          </div>
}
