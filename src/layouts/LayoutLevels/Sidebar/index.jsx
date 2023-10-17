// import lv1_chr1 from "@/assets/images/charachters/ch-3.png";
// import lv1_chr2 from "@/assets/images/charachters/ch-7.png";
// import { TextLevel, TextLevelWithIcons } from "@/components/TextLevel";

import PropTypes from 'prop-types';

const Sidebar = ({ levelIndex, stepIndex, show, sidebarLevelsStyle, data }) => {

    const styleElements = sidebarLevelsStyle;
    const backgrnad = styleElements?.backgrnad;

    if (!show) return null;
    return <div className={`bge-red-600 basis-6/12 relative  ${backgrnad}`} >
        {/*{styleElements?.titles?.map(item => {*/}
        {/*    if (item.type === "text") return <TextLevel text={item.text} className={item.className} />*/}
        {/*    return <TextLevelWithIcons {...item} />*/}

        {/*})}*/}
        <div className={styleElements?.message?.className} >
            <h5 className=' text-base text-left font-bold text-[#C60F1F] mb-3'>{styleElements.message.title}</h5>
            <p className='text-sm text-[#343A40]' >{styleElements.message.text}</p>
        </div>
        <div className='absolute flex flex-row  items-end bottom-0 left-3 scale-x-[-1]'>
            {styleElements?.personage.map(item => <img key={item.src} className={item.class} src={item.src} />)}
        </div>
    </div>
}


Sidebar.propTypes = {
    children: PropTypes.node,
    __TYPE: PropTypes.string,
};

Sidebar.defaultProps = {
    __TYPE: 'SidebarLayout',
    className: "",
    show: true,
    sidebarLevelsStyle: {
        backgrnad: "bg-[#FF0009]",
        personage: [
            {
                // src: lv1_chr1,
                class: "h-[419px]"
            },
            {
                // src: lv1_chr2,
                class: "h-[392px]"
            }
        ],
        message: {
            className: "absolute bg-white w-2/3 text-left rounded-sm left-[25%] top-[30%] p-3 pb-6 text-white text-sm after:content-[''] after:absolute after:left-[28%] after:top-[100%] after:-translate-x-1/2 after:border-8 after:border-x-transparent after:border-b-transparent after:border-t-white"
        }
    }
};

export default Sidebar;
