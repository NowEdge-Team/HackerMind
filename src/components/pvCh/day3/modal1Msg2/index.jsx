import React, { useEffect, useRef, useState } from "react";
import { Modal } from "react-bootstrap";
import img1 from "../../../../assets/images/pv-challenge/Component 49 – 1@2x.png";
import img2 from "../../../../assets/images/pv-challenge/s77auimage_33.png";
import img3 from "../../../../assets/images/pv-challenge/image_31-900.png";
import img4 from "../../../../assets/images/pv-challenge/image_31-901.png";
import img5 from "../../../../assets/images/pv-challenge/image_31-902.png";
import img6 from "../../../../assets/images/pv-challenge/image_31-903.png";

import "./style.scss";
import { useDispatch, useSelector } from "react-redux";
import { onChangePvChCat3Day4 } from "../../../../redux/levels/actions";
import { useTranslation } from "react-i18next";

const Content2Item = ({
    img,
    yesId,
    noId,
    heightImg = 162,
    width,
    index,
    onSelect,
    defaultValue,
    dispatch,
    modeEdit,
    t
}) => {
    const [btn, setBtn] = useState(null);

    useEffect(() => {
        setBtn(defaultValue);
    }, [defaultValue]);

    return (
        <div className="carousel_item" style={{ width: width }}>
            <section className="sub-item-2">
                <img src={img} alt="" style={{ objectFit: "contain", height: `${heightImg}px` }} />
            </section>
            <div className="mt-2">
                <button
                    onClick={() => {
                        if (modeEdit) {
                            dispatch(onChangePvChCat3Day4(index, noId));
                            setBtn(noId);
                            onSelect();
                        }
                    }}
                    type="button"
                    className={`btn waves-danger-cost waves-effect  width-md  mr-2 ${btn === noId ? "waves-danger-cost-valid" : ""
                        }`}
                >
                    {t("day4.supprimer")}
                </button>
                <button
                    onClick={() => {
                        if (modeEdit) {
                            dispatch(onChangePvChCat3Day4(index, yesId));
                            setBtn(yesId);
                            onSelect();
                        }
                    }}
                    type="button"
                    className={`btn waves-effect  width-md waves-success-cost ${btn === yesId ? "waves-success-cost-valid" : ""
                        }`}
                    style={{ backgroundColor: "transparent !important" }}
                >
                    {t("day4.valide")}
                </button>
            </div>
        </div>
    );
};

const Content2 = ({ containerWidth, left = 0, onSelect, modeEdit, t }) => {
    const [total, setTotal] = useState(0);
    const dispatch = useDispatch();
    const category = useSelector((state) => state.DaysPvCh.day4.categories[2]);
    useEffect(() => {
        setTotal(6 * containerWidth);
    }, [containerWidth]);
    return (
        <div
            className="carousel js-carousel"
            onClick={(e) => {
                e.stopPropagation();
            }}
        >
            <div
                className="carousel__container js-carousel-container"
                onClick={(e) => {
                    e.stopPropagation();
                }}
            >
                <div
                    className="carousel__list js-carousel-list"
                    style={{
                        transition: "left 0.5s",
                        left: `${left}px`,
                        width: `${total}px`,
                        height: "100%",
                    }}
                >
                    <Content2Item
                        modeEdit={modeEdit}
                        img={img2}
                        heightImg={200}
                        width={containerWidth}
                        yesId={143}
                        noId={144}
                        index={1}
                        onSelect={onSelect}
                        dispatch={dispatch}
                        defaultValue={category.selectedDecision1}
                        t={t}
                    />
                    <Content2Item
                        modeEdit={modeEdit}
                        img={img3}
                        heightImg={400}
                        yesId={145}
                        noId={146}
                        width={containerWidth}
                        index={2}
                        onSelect={onSelect}
                        dispatch={dispatch}
                        defaultValue={category.selectedDecision2}
                        t={t}
                    />
                    <Content2Item
                        modeEdit={modeEdit}
                        img={img4}
                        heightImg={400}
                        yesId={147}
                        noId={148}
                        width={containerWidth}
                        index={3}
                        onSelect={onSelect}
                        dispatch={dispatch}
                        defaultValue={category.selectedDecision3}
                        t={t}
                    />
                    <Content2Item
                        modeEdit={modeEdit}
                        img={img5}
                        heightImg={400}
                        yesId={149}
                        noId={150}
                        width={containerWidth}
                        index={4}
                        onSelect={onSelect}
                        dispatch={dispatch}
                        defaultValue={category.selectedDecision4}
                        t={t}
                    />
                    <Content2Item
                        modeEdit={modeEdit}
                        img={img6}
                        heightImg={400}
                        yesId={151}
                        noId={152}
                        width={containerWidth}
                        index={5}
                        onSelect={onSelect}
                        dispatch={dispatch}
                        defaultValue={category.selectedDecision5}
                        t={t}
                    />
                </div>
            </div>
        </div>
    );
};

const Modal1Msg2 = ({
    show,
    close = () => null,
    onHide = () => null,
    modeEdit
}) => {
    const { t } = useTranslation();

    const [containerWidth, setContainerWidth] = useState(0);
    const [left, setLeft] = useState(0);
    const [index, setIndex] = useState(1);

    const category = useSelector((state) => state.DaysPvCh.day4.categories[2]);
    const ref_ = useRef(null);
    const [TotalSelect, setTotalSelect] = useState(0);
    const onSelect = () => {
        setTotalSelect((prv) => prv + 1);
    };

    useEffect(() => {
        if (ref_.current !== null) setContainerWidth(ref_.current.offsetWidth);
    });

    const prev = () => {
        if (index !== 1) {
            setLeft((prev) => prev + containerWidth);
            setIndex((prev) => prev - 1);
        }
    };
    const next = () => {
        if (index !== 5) {
            setLeft((prev) => prev - containerWidth);
            setIndex((prev) => prev + 1);
        }
    };

    const checkIfAllSelected = () => {
        return (
            category.selectedDecision1 === null ||
            category.selectedDecision2 === null ||
            category.selectedDecision3 === null ||
            category.selectedDecision4 === null ||
            category.selectedDecision5 === null
        );
    };
    return (
        <Modal
            show={show}
            dialogClassName={"daysModal"}
            onClick={onHide}
            onHide={onHide}
        >
            <Modal.Body style={{ minWidth: "100%", backgroundColor: "transparent" }}>
                <div className={"dayOneModal-modal1Msg2"}>
                    <img src={img1} alt="" />
                    <div className="black-msg" ref={ref_}>
                        <Content2
                            left={left}
                            containerWidth={containerWidth}
                            onSelect={onSelect}
                            modeEdit={modeEdit}
                            t={t}
                        />
                    </div>
                    <div className="carousel_nav">
                        <div>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    prev();
                                }}
                                type="button"
                                className="btn btn-secondary waves-effect width-md"
                                style={{ visibility: `${index === 1 ? "hidden" : ""}` }}
                            >
                                {t("day4.previous")}
                            </button>
                        </div>
                        <h4>{index}/5</h4>
                        {index !== 5 ? (
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    next();
                                }}
                                type="button"
                                className="btn btn-primary waves-effect width-md waves-light-pvc"
                            >
                                {t("day4.suivant")}
                                <i className="fas fa-arrow-right ml-1"></i>
                            </button>
                        ) : (
                            <button
                                onClick={(e) => {
                                    onHide();
                                }}
                                type="button"
                                style={{ visibility: checkIfAllSelected() ? "hidden" : "" }}
                                className="btn btn-success waves-effect width-md waves-light-pvc"
                            >
                                {t("day4.valide")}
                            </button>
                        )}
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    );
};

export default Modal1Msg2;
