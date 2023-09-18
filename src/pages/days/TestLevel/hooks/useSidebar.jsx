import lv1_chr3 from "@/assets/images/charachters/ch-3.png";
import lv1_chr7 from "@/assets/images/charachters/ch-7.png";
import style from "../style.module.scss"
import {useMemo} from "react";



const initData = [
    {
        backgrnad: `bg-[#C60F1F] ${style.sidebar_1}`,
        personage: [
            {
                src: lv1_chr7,
                class: "h-[400px] "
            },
            {
                src: lv1_chr3,
                class: "h-[400px] "
            },

        ],
        message: {
            title: "CHARACTER X",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit ",
            className: "absolute bg-white w-2/3 text-left rounded-sm left-[25%] top-[30%] p-3 pb-6 text-white text-sm after:content-[''] after:absolute after:left-[28%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white"
        },

    },
    {
        backgrnad: `bg-[#C60F1F] ${style.sidebar_1}`,
        personage: [
            {
                src: lv1_chr7,
                class: "h-[400px] "
            },
            {
                src: lv1_chr3,
                class: "h-[400px] "
            },

        ],
        message: {
            title: "CHARACTER X",
            text: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium, Sed ut perspiciatis, unde omnis iste natus error sit ",
            className: "absolute bg-white w-2/3 text-left rounded-sm left-[25%] top-[30%] p-3 pb-6 text-white text-sm after:content-[''] after:absolute after:left-[28%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white"
        },

    }

]






const useSidebar = ({currentStep,hideOnSteps=[]}) => {

    const data =  initData[currentStep];
    const showSidebar = useMemo(() =>  !hideOnSteps.includes(currentStep), [currentStep, hideOnSteps]);
    return {
        data,
        showSidebar
    }
}

export default useSidebar;
