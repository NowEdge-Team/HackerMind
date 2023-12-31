import { useDrop } from "react-dnd"
import CardDrd from "../Card"



export default function ListArticle({ listArticle, onDrop, locked = false }) {

    const [{ canDrop, isOver }, drop] = useDrop(() => ({
        accept: "CARD",
        drop: !locked ? (elem) => onDrop(elem) : null,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    }));

    const isActive = canDrop && isOver
    let backgroundColor = '#222'
    if (isActive) {
        backgroundColor = 'darkgreen'
    } else if (canDrop) {
        backgroundColor = 'darkkhaki'
    }

    return <div ref={drop} className="border grid grid-cols-1 grid-rows-[repeat(auto-fill,_50px)] gap-1 h-full  overflow-scroll w-1/3 flex-wrap py-2 px-2 mr-2">
        {listArticle.filter(item => item?.idCell === -1).map((item) => <div key={item.id} className="w-full h-full"><CardDrd {...item} /> </div>)}
    </div>
}