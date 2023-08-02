import React, {useEffect, useState} from 'react';
import MaskGroup145 from "../../../assets/images/pv-challenge/ascending-arrow-symbol-with-three-circles.svg";
import {useDispatch, useSelector} from "react-redux";
import "./style.scss"
import {useTranslation} from "react-i18next";
import icon from "../../../assets/images/pv-challenge/images/equals-solid.svg"
import vraiIcon from "../../../assets/images/pv-challenge/check-small-svgrepo-com.svg"
import fauxIcon from "../../../assets/images/pv-challenge/close-svgrepo-com.svg"
import {dragDropUpdateDecisions} from "../../../redux/daysPvCh/actions.js";

const Drag = ({
                  listP,
                  item,
                  modeEdit,
                  onDrop = () => null,
                  onDragOver = () => null,
                  t,
                  index
              }) => {
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    };
    const titleIcon = index === 0 ? vraiIcon : fauxIcon;
    const color = index === 0 ? "green" : "red";
    return (
        <div
            className="drag-block_day1_pvch"
            onDrop={(ev, cat) => onDrop(ev, cat, item.id)}
            onDragOver={onDragOver}
        >
            <h3 className="title m-0"> {t(`day1.part4.categories.${item.id}`)} <img style={{marginLeft: '10px'}}
                                                                                    width={30} height={30} alt={""}
                                                                                    src={titleIcon}/></h3>
            <div className="body_day1_pv">
                {listP.map((elem, index) => {
                    if (elem.category === item.id) {
                        return (
                            <div
                                key={index}
                                className="item"
                                draggable={modeEdit}
                                onDragStart={(e) => onDragStart(e, elem.id)}
                            >
                                <img src={icon} alt={""}/>
                                <p title={t(`day1.part4.decisions.${elem.id}`)} style={{color: color}}>
                                    {t(`day1.part4.decisions.${elem.id}`)}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

const Step2 = ({modeEdit}) => {

    const {decisions, categories} = useSelector((state) => state.DaysPvCh.day1.part2);


    // const [modeEdit, setModeEdit] = useState(true);
    const {t} = useTranslation();
    const [tasks, setTasks] = useState(categories);

    const dispatch = useDispatch();
    const [listP, setListP] = useState(decisions);


    useEffect(() => {
        const d = decisions.sort(() => Math.random() - 0.5);
        setListP(d);
    }, []);

    const onDragStart = (ev, id) => {
        //console.log("dragstart:", id);
        ev.dataTransfer.setData("id", id);
    };

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    const onDrop = (ev, cat, idBlock) => {
        //console.log("idBlock", idBlock);

        if (idBlock) {
            let id = ev.dataTransfer.getData("id");

            let tasks_ = listP.map((task) => {
                if (task.id == id) {
                    task.category = idBlock;
                }
                return task;
            });
            //setListP(tasks_);
            dispatch(dragDropUpdateDecisions(tasks_));
        } else {
            let id = ev.dataTransfer.getData("id");

            //console.log("===id===", id);
            let tasks_ = listP.map((task) => {
                if (task.id == id) {
                    task.category = "block";
                }
                return task;
            });

            dispatch(dragDropUpdateDecisions(tasks_));
        }
    };


    return (
        <div className="box-2-3-step-2 ">
            <div className="block-1_day3_pvch">
                <div
                    className="list-dr"
                    onDrop={(ev) => onDrop(ev)}
                    onDragOver={onDragOver}
                >
                    {listP.map((item, index) => {
                        if (item.category === "block") {
                            return (
                                <div
                                    key={index}
                                    draggable={modeEdit}
                                    onDragStart={(e) => onDragStart(e, item.id)}
                                    className="list-dr-item"
                                >
                                    <img src={icon} alt={""}/>
                                    <span>
                                        {t(`day1.part4.decisions.${item.id}`)}
                                    </span>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className="block-2">
                <div className="block-2-1">
                    <img src={MaskGroup145}/>
                </div>
                <div className="block-2-2">
                    <div className="block-2-2row_day2_pv">
                        {tasks.map((item, index) => {
                            if (item.block === 1)
                                return (
                                    <Drag
                                        key={index}
                                        modeEdit={modeEdit}
                                        listP={listP}
                                        item={item}
                                        onDrop={onDrop}
                                        onDragOver={onDragOver}
                                        t={t}
                                        index={index}
                                    />
                                );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

Step2.propTypes = {};
Step2.defaultProps = {};

export default Step2;
