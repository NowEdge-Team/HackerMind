
import { mModalTutorial } from "@/components/ModalTutorial"
import ch1 from "../../../../assets/images/charachters/ch-4.png"
import icon1 from "../../../../assets/images/levels/level1/modal/Group.svg"
import bg1 from "../../../../assets/images/levels/level1/modal/bg.png"
import bg2 from "../../../../assets/images/levels/level1/modal/bg2.png"




const data = [
    {
        type: "video",
        idVideo: "",
        title: "INTRODUCTORY VIDEO",
        backgrand: ""
    },
    {
        type: "text",
        idVideo: "",
        title: "INTRODUCTORY VIDEO",
        backgrand: bg1,
        messages: [
            {
                title: "CHARACTER X",
                content: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione ",
                className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
            },
        ],
        charachters: [
            {
                url: ch1,
                style: "h-[432px] bottom-0"
            },
        ]
    },
    {
        type: "text",
        idVideo: "",
        title: "INTRODUCTORY VIDEO",
        backgrand: bg2,
        messages: [
            {
                title: "CHARACTER X 2",
                content: "Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione ",
                className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
            },
            {
                title: "SUSTAINABILITY",
                content: icon1,
                className: "bg-white rounded-md p-3  absolute top-[48%] left-[25%]",
                type: "img"
            }
        ],
        charachters: [
            {
                url: ch1,
                style: " h-[600px] bottom-[-25%] left-0"
            }
        ]
    }
]






const useTutorial = (props) => {

    const show = () => {
        mModalTutorial({ data })
    }


    return {
        show,
    };
}

export default useTutorial;
