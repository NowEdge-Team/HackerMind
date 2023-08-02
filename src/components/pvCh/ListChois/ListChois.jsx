import {useDispatch} from "react-redux";
import React from "react";
import styles from "./style.module.scss"

const CheckBox = ({text, index, decision, onChange, modeEdit}) => {
    return (
        <div className={`custom-control custom-checkbox ${styles.custom_checkbox}`}>
            <input
                type="checkbox"
                className="custom-control-input"
                id={`autoSizingCheck${index}`}
                checked={decision?.isSelected}
                disabled={!modeEdit}
                onChange={() => {
                    onChange(decision)
                }}
            />
            <label
                className={`custom-control-label ${styles.label}`}
                htmlFor={`autoSizingCheck${index}`}
            >
                {text}
            </label>
        </div>
    );
};


const RadioBox = ({text, index, decision, onChange, modeEdit}) => {

    console.log("---decision?---", decision)
    return (
        <label className={`${styles.container}`}>
            {text}
            <input
                type="radio"
                id={`autoSizingCheck${index}`}
                name="radio"
                checked={decision?.isSelected}
                disabled={!modeEdit}
                onClick={() => {
                    console.log("---decision---->>", decision)
                    onChange(decision)
                }}
            />
            <span className={styles.checkmark}></span>
        </label>
    )
}

const ListChois = ({
                       t,
                       modeEdit,
                       title,
                       s_title,
                       listQuestions = [],
                       limit = 1,
                       decisions,
                       changeIsSelected = () => {
                       },
                       changeIsSelectedRadio = () => null,
                       day = "",
                       part = ""
                   }) => {

    const dispatch = useDispatch();


    const onCheck = (decision) => {

        let sum = 0;

        listQuestions.map(element => {
            const item_find = decisions.find((d) => d.id === element?.id);
            if (item_find)
                sum += item_find.isSelected ? 1 : 0;
        });
        if (sum < limit || decision.isSelected) {
            dispatch(changeIsSelected(decision , day, part));
        }
    }

    const onCheckRadio = (decision) => {

        const decisions_ = decisions.filter((item) => listQuestions.find((elem) => item.id === elem.id))
            .map((item) => item.id === decision.id ? {...decision, isSelected: true} : {...item, isSelected: false});

        dispatch(changeIsSelected(decisions_, day, part));
    }


    return (
        <div className={styles.content_notif}>
            <div className={styles.content_notif_moy_nt}>
                <i className="fas fa-capsules"></i>
                <div className={styles.text_notf}>
                    <h3 className="p-0 m-0">
                        {title}
                    </h3>
                    <h4 className="p-0 m-0">
                        {s_title}
                    </h4>
                </div>
            </div>
            <div className={styles.list_chois}>
                {listQuestions.map((item, index) => {

                        return (limit === 1 ?
                                <RadioBox
                                    key={item.id}
                                    index={index}
                                    // text={t(`pvPharma5game.day1.part1.151`)}
                                    text={item.text}
                                    decision={decisions.find((d) => d.id === item?.id)}
                                    onChange={onCheckRadio}
                                    modeEdit={modeEdit}
                                />
                                :
                                <CheckBox
                                    key={item.id}
                                    index={index}
                                    // text={t(`pvPharma5game.day1.part1.151`)}
                                    text={item.text}
                                    decision={decisions.find((d) => d.id === item?.id)}
                                    onChange={onCheck}
                                    modeEdit={modeEdit}
                                />
                        )
                    }
                )}
            </div>
        </div>
    );
};

export default ListChois;
