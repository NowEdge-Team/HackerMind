import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import img1 from '../../../../assets/images/pv-challenge/images/research-center.png'
import img2 from '../../../../assets/images/pv-challenge/images/group_8048.svg'
import img3 from "../../../../assets/images/pv-challenge/images/path_12988.svg";

import arrow1 from "../../../../assets/images/pv-challenge/images/path_12995.svg";
import arrow2 from "../../../../assets/images/pv-challenge/images/path_r_12998.svg";
import arrow3 from "../../../../assets/images/pv-challenge/images/path_r_13003.svg";
import CustomizedSelectPart2 from "../CustomizedSelect/CustomizedSelectPart2";

const ModalTest2 = props => {

    const closeOnEscapeKeyDown = e => {
        if ((e.charCode || e.keyCode) === 27) {
            props.onClose();
        }
    };

    useEffect(() => {
        document.body.addEventListener("keydown", closeOnEscapeKeyDown);
        return function cleanup() {
            document.body.removeEventListener("keydown", closeOnEscapeKeyDown);
        };
    }, []);


    if (!props.show) return null;

    const next = () => {
        props.onValidate()
    }

    const cancel = () => {
        props.onClose()

    }

    const item = {
        options: [
            , {
                value: 127,
                label: "Commission Nationale de PV"
            },
            {
                value: 123,
                label: "Professionels de la Santé"
            },

            {
                value: 125,
                label: "Comité Technique"
            },

            {
                value: 122,
                label: "Patient"
            },
            {
                value: 126,
                label: "PHARMA5"
            },
            {
                value: 124,
                label: "CNPV"
            },
            {
                value: 129,
                label: "DMP"
            },

            {
                value: 128,
                label: "Ministère de la Santé"
            },
        ]
    }

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modal_content}>


                <div className={styles.block1}>
                    <img src={img2} alt=""/>
                    <h3>Flux d'information au sein du triangle AFN</h3>
                </div>
                <p className={styles.paragraph}>
                    L'activité de pharmacovigilance tourne autour de 3 piliers ou ce que l'on appelle le triangle AFN
                    (Autorité, Fabricant, Notificateur).
                    Attribuez à chaque acteur son rôle dans le cadre du flux d'information au sein du triangle AFN.

                </p>


                <div className={styles.container}>
                    <div className={styles.block3}>
                        <img src={img1} alt=""/>
                        <h4>
                            Centre international
                            de PV d'Uppsala
                        </h4>
                    </div>

                    <div className={styles.arrow1}>
                        <img src={arrow1} alt=""/>
                    </div>

                    <div className={styles.list}>
                        <img className={styles.arrow3} src={arrow3} alt=""/>
                        <img className={styles.arrow2} src={arrow2} alt=""/>

                        <span className={styles.cercle1}>
                                <h3 className={styles.title1}>Notificateur</h3>
                                <h3 className={styles.title2}>Effets indésirables</h3>
                            </span>
                        <span className={styles.cercle2}>
                                <h5 className={styles.title1}>Notification</h5>
                                <h5 className={styles.title2}>Informations surveillance</h5>
                                <h5 className={styles.title3}>Evaluation du risque</h5>
                                <h5 className={styles.title4}>Avis technique</h5>
                                <h5 className={styles.title5}>Propositions actions reglementaies</h5>
                                <h5 className={styles.title6}>Autorités</h5>
                            </span>

                        <CustomizedSelectPart2 item={item} index={"first"} modeEdit={props.modeEdit}/>
                        <img className={styles.img} src={img3} alt={""}/>
                        <CustomizedSelectPart2 item={item} index={"second"} modeEdit={props.modeEdit}/>
                        <img className={styles.img} src={img3} alt={""}/>
                        <CustomizedSelectPart2 item={item} index={"third"} modeEdit={props.modeEdit}/>
                        <img className={styles.img} src={img3} alt={""}/>
                        <CustomizedSelectPart2 item={item} index={"fourth"} modeEdit={props.modeEdit}/>
                        <img className={styles.img} src={img3} alt={""}/>
                        <CustomizedSelectPart2 item={item} index={"fifth"} modeEdit={props.modeEdit}/>
                        <img className={styles.img} src={img3} alt={""}/>
                        <CustomizedSelectPart2 item={item} index={"sixth"} modeEdit={props.modeEdit}/>
                    </div>
                    <div className={styles.select1}>
                        <CustomizedSelectPart2 item={item} index={"seventh"}  modeEdit={props.modeEdit}/>
                    </div>
                    <div className={styles.arrow2}>
                        <img height={10} src={arrow1} alt=""/>
                    </div>
                    <div className={styles.select2}>

                            <span className={styles.cercle}>
                                <h3>Fabricant</h3>
                            </span>

                        <CustomizedSelectPart2 item={item} index={"eighth"}  modeEdit={props.modeEdit}/>
                    </div>
                </div>

                <div className={styles.modal_footer}>
                    <button className={styles.prv_btn} onClick={cancel}>
                        Annuler
                    </button>
                    <button className={styles.next_btn} onClick={next}>
                        Valider
                    </button>
                </div>

            </div>
        </div>,
        document.getElementById("root")
    );
};

ModalTest2.propTypes = {
    onClose: PropTypes.func.isRequired,
    onValidate: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,

};


ModalTest2.defaultProps = {};

export default ModalTest2;
