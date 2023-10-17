import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from "react-redux";
import "./style.scss"
import { day3Part2UpdateDecisions } from "../../../redux/levels/actions.js";

const RowDragSelected = ({
    list = [],
    title,
    type,
    onDrop,
    onDragStart,
    ValidTask,
    t,
}) => {
    const [ls, setLs] = useState([{}, {}, {}]);

    useEffect(() => {
        let ls_ = [{}, {}, {}];

        list.map((item, index) => {
            if (item.category === type) {
                ls_[item.blocIndex] = { ...item, isValid: ls.category_v === type };
            }
            //  item.category === type;
        });

        setLs(ls_);
    }, [list]);

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className="row-items">
            <div className="item-title_pv5">{title}</div>
            <div className="item-content">
                <div
                    className={[
                        "items-box_2 "
                    ].join(" ")}
                    draggable={!ValidTask}
                    onDragStart={(e) => {
                        if (ls.length > 0 && ls[0]) onDragStart(e, ls[0].id);
                    }}
                    onDragOver={(ev) => onDragOver(ev)}
                    onDrop={(e) => onDrop(e, type, 0)}
                >
                    {ls.length > 0 && ls[0].id && t(`day3.part2.${ls[0].id}`)}
                </div>
                <div
                    className={[
                        "items-box_2 ",
                    ].join(" ")}
                    draggable={!ValidTask}
                    onDragStart={(e) => {
                        if (ls.length > 0 && ls[1]) onDragStart(e, ls[1].id);
                    }}
                    onDragOver={(ev) => onDragOver(ev)}
                    onDrop={(e) => onDrop(e, type, 1)}
                >
                    {ls.length > 0 && ls[1].id && t(`day3.part2.${ls[1].id}`)}
                </div>
                <div
                    className={[
                        "items-box_2 ",
                    ].join(" ")}
                    draggable={!ValidTask}
                    onDragStart={(e) => {
                        if (ls.length > 0 && ls[2]) onDragStart(e, ls[2].id);
                    }}
                    onDragOver={(ev) => onDragOver(ev)}
                    onDrop={(e) => onDrop(e, type, 2)}
                >
                    {ls.length > 0 && ls[2].id && t(`day3.part2.${ls[2].id}`)}
                </div>
            </div>
        </div>
    );
};

const RowDrag = ({ List, onDragStart, onDrop, ValidTask, t }) => {
    const onDragOver = (ev) => {
        ev.preventDefault();
    };
    return (
        <div className={`row-items`}>
            {List.map((item, index) => {
                if (item.category === "block")
                    return (
                        <div
                            key={index}
                            className={[
                                "items-box_pv5_drg",
                            ].join(" ")}
                            draggable={!ValidTask}
                            onDragOver={(ev) => onDragOver(ev)}
                            onDragStart={(e) => {
                                onDragStart(e, item.id);
                            }}
                        >
                            {t(`day3.part2.${item.id}`)}
                        </div>
                    );
            })}
        </div>
    );
};


const Step2 = ({ ValidTask, t }) => {
    const [List, setList] = useState([]);
    const decisions = useSelector((state) => state.DaysPvCh.day3.part2.decisions);
    const dispatch = useDispatch();

    useEffect(() => {
        const d = decisions.sort(() => Math.random() - 0.5);
        setList(...[d]);
    }, []);
    const onDrop = (ev, cat, blocIndex) => {
        let id = ev.dataTransfer.getData("id");

        if (cat !== "non") {
            const found = List.find(
                (element) => element.blocIndex === blocIndex && element.category === cat
            );
            if (found) return;
        }

        let tasks = List.filter((elem) => {
            if (elem.id == id) {
                elem.category = cat;
                elem.blocIndex = blocIndex;
            }
            return elem;
        });
        dispatch(day3Part2UpdateDecisions(tasks));
        //dispatch edit redux List
        setList(tasks);
    };

    const onDragStart = (ev, id) => {
        //console.log("----onDragStart----", id);
        ev.dataTransfer.setData("id", id);
    };

    const onDragOver = (ev) => {
        ev.preventDefault();
    };

    return (
        <div className="box-2-3-4_ew">
            <div
                className="drag-block-1-bv5"
                onDrop={(e) => onDrop(e, "block", 0)}
                onDragOver={(ev) => onDragOver(ev)}
            >
                <RowDrag
                    List={List}
                    t={t}
                    onDragStart={onDragStart}
                    onDrop={onDrop}
                    ValidTask={ValidTask}
                />
            </div>
            <div className="drag-block-2">
                <RowDragSelected
                    ValidTask={ValidTask}
                    title={t(`day3.part2.patient`)}
                    list={List}
                    type="pat"
                    onDrop={onDrop}
                    onDragStart={onDragStart}
                    t={t}
                />
                <RowDragSelected
                    ValidTask={ValidTask}
                    title={t(`day3.part2.eventinde`)}
                    type="evi"
                    list={List}
                    onDrop={onDrop}
                    onDragStart={onDragStart}
                    t={t}
                />
                <RowDragSelected
                    ValidTask={ValidTask}
                    title={t(`day3.part2.produitsante`)}
                    type="prods"
                    list={List}
                    onDrop={onDrop}
                    onDragStart={onDragStart}
                    t={t}
                />
                <RowDragSelected
                    ValidTask={ValidTask}
                    title={t(`day3.part2.notificateur`)}
                    type="notif"
                    list={List}
                    onDrop={onDrop}
                    onDragStart={onDragStart}
                    t={t}
                />
            </div>
        </div>
    );
};

Step2.propTypes = {};
Step2.defaultProps = {};

export default Step2;
