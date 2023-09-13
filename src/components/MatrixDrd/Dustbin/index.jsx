import { useDrop } from "react-dnd"
import CardDrd from "../Card"



export default function Dustbin({ item, onDrop }) {
    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "CARD",
        drop: (elem) => onDrop(elem, item),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }))
    const isActive = canDrop && isOver
    let backgroundColor = ''
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }
    return (
        <div ref={drop} style={{ backgroundColor }} className="text-[10px] h-full" data-testid="dustbin">
            {item?.droppedItem && (
                <div className="max-w-[149px] h-full">  <CardDrd {...item.droppedItem} showExpand={false} /></div>
            )}

        </div>
    )
}