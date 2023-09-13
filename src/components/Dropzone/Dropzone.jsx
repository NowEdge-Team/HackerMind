import React, {useEffect, useMemo, useState} from 'react';
import MaskGroup145 from "../../assets/images/pv-challenge/ascending-arrow-symbol-with-three-circles.svg";
import {useDispatch, useSelector} from "react-redux";
import Style from "./style.module.scss"
import {useTranslation} from "react-i18next";
import icon from "../../assets/images/pv-challenge/images/equals-solid.svg"
// import {day1Step2UpdateDecisions} from "../../../redux/daysPvCh/actions.js";
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

const Drag = ({
                  listP,
                  item,
                  modeEdit,
                  onDrop = () => null,
                  onDragOver = () => null,
                  t,
                  day,
                 part,
                  hasTowBlock=true,
                  icons =[],
                  index,
                  flex_siz=0,
                  logoBlock
              }) => {
    const onDragStart = (ev, id) => {
        ev.dataTransfer.setData("id", id);
    };

    if (!item.id) return  null;
    return (
        <div
            className={Style.drag_block}
            onDrop={(ev, cat) => onDrop(ev, cat, item.id)}
            onDragOver={onDragOver}
        >
           <div className={Style.title_block} style={{flex:flex_siz}}>
                <img src={logoBlock} alt="" width={42} />
               <h3 className={`${Style.title} m-0`}> {t(`day${day}.part${part}.categories.${item.id}`)} </h3>
               {icons.length > 0 && <FontAwesomeIcon width={25} icon={icons[index].icon} color={icons[index].color}/>}
           </div>

            <div className={`${hasTowBlock ?  Style.body_2 :Style.body } mt-1`}>
                {listP.map((elem, index) => {
                    if (elem.category === item.id) {
                        return (
                            <div
                                key={index}
                                className={Style.item_pvch}
                                draggable={modeEdit}
                                onDragStart={(e) => onDragStart(e, elem.id)}
                            >
                                <img draggable={modeEdit} src={icon} alt={""}/>
                                <p title={t(`day${day}.part${part}.decisions.${elem.id}`)}>
                                    {t(`day${day}.part${part}.decisions.${elem.id}`)}
                                </p>
                            </div>
                        );
                    }
                })}
            </div>
        </div>
    );
};

const Dropzone = ({modeEdit = true, decisions , categories , callback , day=1,part=2,icons,flex_siz=0,imgBib}) => {
    // const {decisions, categories} = useSelector((state) => state.DaysPvCh.day2.part1);

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
        if (idBlock) {
            let id = ev.dataTransfer.getData("id");

            let tasks_ = listP.map((task) => {
                if (task.id == id) {
                    task.category = idBlock;
                }
                return task;
            });
            dispatch(callback(tasks_ ,`day${day}`,`part${part}`));
        } else {
            let id = ev.dataTransfer.getData("id");
            let tasks_ = listP.map((task) => {
                if (task.id == id) {
                    task.category = "block";
                }
                return task;
            });

            dispatch(callback(tasks_,  `day${day}`,`part${part}`));
        }
    };

    const hasTowBlock = useMemo(() => {

        return tasks.find(elm=> elm.block === 2)
    }, [tasks.length]);

    return (
        <div className={Style.box_2_3_step_2}>
            <div className={Style.block_1_day_3}>
                <div
                    className={Style.list_dr}
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
                                    className={Style.list_dr_item}
                                >
                                    <img src={icon} alt={""}/>
                                    <span>
                                        {t(`day${day}.part${part}.decisions.${item.id}`)}
                                    </span>
                                </div>
                            );
                        }
                    })}
                </div>
            </div>
            <div className={Style.block_2}>
                <div className={Style.block_2_1}>
                    <img alt={""} src={MaskGroup145}/>
                </div>
                <div className={Style.block_2_2}>
                    <div className={Style.block_2_2_row}>
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
                                        day={day}
                                        part={part}
                                        hasTowBlock={hasTowBlock}
                                        index={index}
                                        icons={icons}
                                        flex_siz={flex_siz}
                                        logoBlock={imgBib[index]}
                                    />
                                );
                        })}
                    </div>

                    {hasTowBlock &&
                        <div className={`${Style.block_2_2_row} mt-2`}>
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
                                            day={day}
                                            part={part}
                                            index={index}
                                            flex_siz={flex_siz}
                                            logoBlock={imgBib[index]}


                                        />
                                    );
                            })}
                        </div>
                  }
                </div>
            </div>
        </div>
    );
};

Dropzone.propTypes = {};
Dropzone.defaultProps = {};

export default Dropzone;
