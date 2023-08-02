import React, {useEffect, useState} from 'react';
import MaskGroup145 from "../../../assets/images/pv-challenge/ascending-arrow-symbol-with-three-circles.svg";
import {useDispatch, useSelector} from "react-redux";
import "./style.scss"
import {useTranslation} from "react-i18next";
import icon from "../../../assets/images/pv-challenge/images/equals-solid.svg"
import {dragDropUpdateDecisions} from "../../../redux/daysPvCh/actions.js";

const Drag = ({
                  listP,
                  item,
                  modeEdit,
                  onDrop = () => null,
                  onDragOver = () => null,
                  t,
              }) => {
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    };

    return (
        <div
            className="drag-block"
            onDrop={(ev, cat) => onDrop(ev, cat, item.id)}
            onDragOver={onDragOver}
        >
            <h3 className="title m-0"> {t(`day2.part2.categories.${item.id}`)} </h3>
            <div className="body mt-1">
                {listP.map((elem, index) => {
                    if (elem.category === item.id) {
                        return (
                            <div
                                key={index}
                                className="item_pvch"
                                draggable={modeEdit}
                                onDragStart={(e) => onDragStart(e, elem.id)}
                            >
                                <img draggable={modeEdit} src={icon} alt={""}/>
                                <p title={t(`day2.part2.decisions.${elem.id}`)}>
                                    {t(`day2.part2.decisions.${elem.id}`)}
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
    const {decisions, categories} = useSelector((state) => state.DaysPvCh.day2.part1);

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
            <div className="block-1_day3">
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
                                        {t(`day2.part2.decisions.${item.id}`)}
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
                    <div className="block-2-2row">
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
                                    />
                                );
                        })}
                    </div>

                    <div className="block-2-2row mt-2">
                        {tasks.map((item, index) => {
                            if (item.block === 2)
                                return (
                                    <Drag
                                        key={index}
                                        modeEdit={modeEdit}
                                        listP={listP}
                                        item={item}
                                        onDrop={onDrop}
                                        onDragOver={onDragOver}
                                        t={t}
                                    ></Drag>
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
