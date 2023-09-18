import React, { Fragment, useRef, useState } from "react";
import ReactDOM from "react-dom";
import { Dialog, Transition } from '@headlessui/react';

const confirmAction = {
    current: () => Promise.resolve(true),
};

export function mModalArticel(props) {
    return confirmAction.current(props);
}


function DialogBody({ description, title, closeModal, img }) {


    return (
        <div className="bg-white rounded-lg  relative">
            <div className="absolute right-3 top-3 p-1 cursor-pointer" onClick={closeModal} >
                <i class="fas fa-times text-[20px]"></i>
            </div>
            <div className="flex flex-row">

                <div className="p-3 flex flex-col gap-3">

                    <h3 className="font-bold text-[22px] text-black" >{title}</h3>
                    <div>
                        <img className="float-left w-[20%] mr-4" src={img} />
                        <p className="text-left text-black">
                            {description}
                        </p>
                    </div>


                </div>
            </div>
        </div>
    )


}

const ModalArticel = ({ }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [props, setProps] = useState([]);
    const resolveRef = useRef(() => null);


    confirmAction.current = (props) =>
        new Promise((resolve) => {
            setProps(props)
            setIsOpen(true);
            resolveRef.current = resolve;
        });

    const closeModal = (resolve = true) => {
        resolveRef?.current(resolve);
        setIsOpen(false);
    };


    return ReactDOM.createPortal(
        <Transition appear show={isOpen} as={Fragment}>
            <Dialog as="div" className="relative z-10" onClose={() => null}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed inset-0 bg-black bg-opacity-25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-y-auto" onClick={closeModal}>
                    <div className="flex min-h-full items-center justify-center p-4 text-center ">
                        <Transition.Child
                            as={Fragment}
                            enter="ease-out duration-300"
                            enterFrom="opacity-0 scale-95"
                            enterTo="opacity-100 scale-100"
                            leave="ease-in duration-200"
                            leaveFrom="opacity-100 scale-100"
                            leaveTo="opacity-0 scale-95"
                        >
                            <Dialog.Panel className={"flex flex-col justify-center w-full  max-w-[974px] "} >
                                <DialogBody
                                    currentIndex={currentIndex}
                                    setCurrentIndex={setCurrentIndex}
                                    closeModal={closeModal}
                                    {...props} />
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>,
        document.getElementById("root")
    );
};

export default ModalArticel;