
import styles from './style.module.scss'
import score1 from "../../../assets/images/pv-challenge/images/score1.svg"
import score2 from "../../../assets/images/pv-challenge/images/score2.svg"
import score3 from "../../../assets/images/pv-challenge/images/score3.svg"
import image1 from "../../../assets/images/pv-challenge/images/rectangle_2100.svg"
import {avatars, getLogoById} from "../../../helpers/missionDataPvC";
import React from "react";


export default function ClassementProfile ({name,score,classement, item}){


    return <div className={`${styles.container} `}>
                <picture className={`${styles.picture_container} ${classement=== 1 ? styles.first_class : classement=== 3 ? styles.last_class : ''}`}  >
                    {classement=== 1 && <div className={styles.crown}>
                        <img src={image1} alt={''}/>
                       </div>
                    }
                    <img src={getLogoById(item.insightsMission.avatarId, avatars)?.logo} alt={""} style={{height: classement=== 1 ? 122 :  106 ,"border-radius":"50%"}}/>

                    <div className={styles.score_icon}>
                        <img src={classement=== 1 ? score1 : classement=== 2 ? score2 :  score3} alt={''} />
                    </div>
                </picture>
                <h1 className={styles.name}>{name}</h1>
                <h4 className={styles.score}>{score}</h4>
                 <span  className={styles.state} style={{color:`${ item.insightsMission.finishDate ? "#10c469" : "#f9c851" }`}}>
                   {item.insightsMission.finishDate ? "Terminé" : "En cours"}
                </span>

                <div className={`sg-menu-item-btn-config-p ${styles.sg_menu_item_btn_config_p}`} onClick={() => null}>
                    <div className={styles.sg_menu_item}>
                        <i className=" fas fa-cubes "></i>
                        <span>
                            {item.score1} Points
                        </span>
                    </div>
                    <div className={styles.sg_menu_item}>
                        <i className="   fas fa-cogs"></i>
                        <span>
                            {item.score2} Points
                        </span>
                    </div>
                </div>
          </div>
}
