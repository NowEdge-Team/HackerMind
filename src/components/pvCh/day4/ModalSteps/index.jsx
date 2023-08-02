import React, {useEffect} from "react";
import ReactDOM from "react-dom";
import styles from "./style.module.scss";
import PropTypes from "prop-types";
import img1 from '../../../../assets/images/pv-challenge/images/research-center.png'
import img2 from '../../../../assets/images/pv-challenge/images/group_8048.svg'
import CustomizedSelect from "../CustomizedSelect/CustomizedSelect";
import {useTranslation} from "react-i18next";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faServer} from "@fortawesome/free-solid-svg-icons";

const ModalSteps = props => {

    const {day,part} = props;

    const {t} =  useTranslation();
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
        options: t(`day${day}.part${part}.options`,{returnObjects:true}),
    }

    return ReactDOM.createPortal(
        <div className={styles.modal}>
            <div className={styles.modal_content}>

                <div className={styles.block1}>
                    <img src={img2} alt=""/>
                    <h3>{t(`day${day}.part${part}.options_title`)}</h3>
                </div>
                <p className={styles.paragraph}>
                    {t(`day${day}.part${part}.options_desc`)}
                </p>
                <div className={styles.block3}>
                    <FontAwesomeIcon style={{fontSize:40,color:'#ffff'}} icon={faServer} />
                    <h4>
                        {t(`day${day}.part${part}.options_s_title`)}
                    </h4>
                </div>
                <div className={styles.list}>
                    <CustomizedSelect item={{...item, title: "Etape 1"}} index={"1"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 2"}} index={"2"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 3"}} index={"3"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 4"}} index={"4"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 5"}} index={"5"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 6"}} index={"6"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 7"}} index={"7"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 8"}} index={"8"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 9"}} index={"9"} modeEdit={props.modeEdit}/>
                    <CustomizedSelect item={{...item, title: "Etape 10"}} index={"10"} modeEdit={props.modeEdit}/>
                </div>
                <div className={styles.modal_footer}>
                    <button className={styles.prv_btn} onClick={cancel}>
                        {t(`day${day}.part${part}.annuler`)}
                    </button>
                    <button className={styles.next_btn} onClick={next}>
                        {t(`day${day}.part${part}.valider`)}
                    </button>
                </div>

            </div>
        </div>,
        document.getElementById("root")
    );
};

ModalSteps.propTypes = {
    onClose: PropTypes.func.isRequired,
    onValidate: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
    day: PropTypes.number.isRequired,
    part: PropTypes.number.isRequired,

};


ModalSteps.defaultProps = {};

export default ModalSteps;
