import React from 'react';
import style from "./style.module.scss";
import startD from "@/assets/images/pv-challenge/starD.svg"
import startE from "@/assets/images/pv-challenge/starE.svg"
import { twMerge } from 'tailwind-merge';
import { useTranslation } from 'react-i18next';

export const StartBlock = ({ numberOfStart, className }) => {
    return (
        <div className={twMerge('flex flex-row gap-1   ', className)}>
            {[...Array(numberOfStart).keys()].map(item => <img key={item} src={startE} className='w-[25px] h-[25px]' />)}
            {[...Array(3 - numberOfStart).keys()].map(item => <img key={item} src={startD} className='w-[25px] h-[25px]' />)}
        </div>
    );
};



function LevelCard({ title, icon, index, state = -1, numberOfStart = 1, directions = "left" }) {
    const { t } = useTranslation();
    return (
        <div className={twMerge(style.container, 'group z-0 hover:z-20 cursor-pointer')}>
            <StartBlock numberOfStart={numberOfStart} className={`group-hover:opacity-0 ml-[16px] mb-2`} />
            <div className={twMerge(style.card, directions === "left" ? 'float-left' : 'float-right')}>
                <div className={style.image}>
                    <img className={state === -1 ? 'grayscale' : ''} href="#" src={icon} />
                </div>
                <div className={twMerge(style.content, "gap-1 flex flex-col items-start")}>
                    <h3 className='text-[#9f9f9f] text-sm' >NIVEAU {index}</h3>
                    <p className='text-[#3f4351] text-sm font-bold' >{title}</p>
                    <p className={twMerge('text-[#9f9f9f] text-sm', state === 1 ? 'text-[#10C469]' : state === 0 ? 'text-[#F9C851]' : '')}>
                        {state === 1
                            ? t(`parcours.termine`)
                            : state === 0
                                ? t(`parcours.encour`)
                                : t(`parcours.verouille`)}
                    </p>
                    <StartBlock numberOfStart={numberOfStart} />
                </div>
            </div>
        </div >
    );
}

export default LevelCard;