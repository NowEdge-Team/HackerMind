

import { mModalConfirm } from "@/components/ModalConfirm";
import ch2 from "../../../../assets/images/charachters/ch-7.png";
import bg3 from "../../../../assets/images/levels/level1/confirm/bg.png";



const data = [
    {
        backgrand: bg3,
        messages: [
            {
                title: "CHARACTER X",
                content: "Are you sure of your choice?",
                className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
            }
        ],
        charachters: [
            {
                url: ch2,
                style: "h-[432px] bottom-0"
            }
        ]
    },
    {
        backgrand: bg3,
        messages: [
            {
                title: "CHARACTER X 2",
                content: "Are you sure of your choice?",
                className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
            }
        ],
        charachters: [
            {
                url: ch2,
                style: "h-[432px] bottom-0"
            }
        ]
    }
]






const useConfirm = (props) => {
    const showConfirm = () =>
        mModalConfirm({
            ...[
                {
                    backgrand: bg3,
                    messages: [
                        {
                            title: "CHARACTER X",
                            content: "Are you sure of your choice?",
                            className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
                        }
                    ],
                    charachters: [
                        {
                            url: ch2,
                            style: "h-[432px] bottom-0"
                        }
                    ]
                },
                {
                    backgrand: bg3,
                    messages: [
                        {
                            title: "CHARACTER X 2",
                            content: "Are you sure of your choice?",
                            className: "bg-white rounded-md p-3 w-[65%] absolute top-[20%] right-[10%]"
                        }
                    ],
                    charachters: [
                        {
                            url: ch2,
                            style: "h-[432px] bottom-0"
                        }
                    ]
                }
            ][props.currentStep],
            onFin: props.onFin,
            currentStep: props.currentStep,
            length: props.length
        })



    return {
        showConfirm,
    };
}

export default useConfirm;
