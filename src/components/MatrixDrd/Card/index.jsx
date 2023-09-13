import { useDrag } from "react-dnd"
import { mModalArticel } from "../../modal/ModalArticle"
import { twMerge } from 'tailwind-merge'


export default function CardDrd({ isDragging, id, description, title, idCell, correctCellId, className, showExpand = true }) {
    const [{ opacity }, dragRef] = useDrag(
        () => ({
            type: "CARD",
            item: { id, description, title, idCell, correctCellId },
            collect: (monitor) => ({
                opacity: monitor.isDragging() ? 0.5 : 1
            })
        }),
        []
    )

    const onShowDetails = () => {
        mModalArticel({ description, title })
    }


    return (
        <div ref={dragRef} style={{ opacity }} className={twMerge("w-full h-full bg-white shadow-sm rounded-sm  flex flex-row items-center ", className)} >
            <div className="group/item p-2 relative flex  items-center w-11/12">
                <p className="text-[14px]  truncate text-left text-[#000000] overflow-hidden" >{title}</p>
                <span className="group-hover/item:block  w-[200px]  z-10  transition-opacity bg-gray-800 px-1 text-sm text-[#ffffff] rounded-md absolute left-1/2 
    -translate-x-1/2  hidden  p-1 text-left">{title}</span>
            </div>
            {showExpand && <div onClick={onShowDetails} className="flex-1 p-2 h-full  w-1/12 bg-[#6C757D] flex justify-center items-center cursor-pointer">
                <i class="fas fa-expand-alt text-[12px]"></i>
            </div>}
        </div>
    )
}