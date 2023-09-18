import LayoutLevels from "@/layouts/LayoutLevels/index.jsx";
import Stepper from "@/components/pvCh/Stepper/Stepper.jsx";
import {StepperProvider} from "@/components/pvCh/Stepper/context/index.jsx";
import BackButton from "@/components/pvCh/BackButton/index.jsx";
import NextButton from "@/components/pvCh/NextButton/index.jsx";
import React from "react";
import { useStepper } from "@/components/pvCh/Stepper/hook.js";
import useSidebar from "@/pages/days/TestLevel/hooks/useSidebar.jsx";
import style from './style.module.scss'
function StepperHeader({ title, ListMsg = [] }) {

    return (
        <div className="">
            <h1 className="text-lg text-white font-normal mb-[14px]" >{title}</h1>
            <div className="flex flex-col gap-2" >
                {ListMsg.map(item => <p key={item} className="text-[15px] font-bold text-white" >
                    {item}
                </p>)
                }
            </div>
        </div>
    )
}

function TestLevel(props) {
    const { incrementCurrentStep, decrementCurrentStep, currentStep } = useStepper();
    const {data:dataSidebar,showSidebar} = useSidebar({ currentStep,hideOnSteps:[0] });


    const onBackStep = () => {
        decrementCurrentStep()
    }

    const nextStep = () => {
         incrementCurrentStep();
    }

    return (
        <LayoutLevels >
            <LayoutLevels.Sidebar show={showSidebar} sidebarLevelsStyle={dataSidebar} className={style.sidebar} />
            <LayoutLevels.BodyLayout >
                    {/*<Header type="step" onClickMsg={() => alert("sos")} />*/}
                    <Stepper >
                        <Stepper.Steps>
                            <Stepper.Step id="1" name="Step 1" classContainer="bg-red"  >
                                <div>
                                    {/*<StepperHeader*/}
                                    {/*    title={"LEVEL 1 : GET TO KNOW ECCBC"}*/}
                                    {/*    // ListMsg={[*/}
                                    {/*    //     "Mini Quizz about the above. You should get 100% and if not, you cannot pass to the next level.",*/}
                                    {/*    //     "Answers may be shown if you fail."*/}
                                    {/*    // ]}*/}
                                    {/*/>*/}
                                    <h1>1</h1>
                                </div>
                            </Stepper.Step>
                            <Stepper.Step id="2" name="Step 2">
                                <div>
                                    <StepperHeader
                                        title={"LEVEL 1 : GET TO KNOW ECCBC"}
                                        ListMsg={[
                                            "Mini Quizz about the above. You should get 100% and if not, you cannot pass to the next level.",
                                            "Answers may be shown if you fail."
                                        ]}
                                    />
                                    <h1>2</h1>
                                </div>
                            </Stepper.Step>
                            <Stepper.Step id="2" name="Step 2">
                                <div>
                                    <StepperHeader
                                        title={"LEVEL 1 : GET TO KNOW ECCBC"}
                                        ListMsg={[
                                            "Mini Quizz about the above. You should get 100% and if not, you cannot pass to the next level.",
                                            "Answers may be shown if you fail."
                                        ]}
                                    />
                                    <h1>2</h1>
                                </div>
                            </Stepper.Step>
                        </Stepper.Steps>
                    </Stepper>
                    <div className="mt-auto mb-[35px] flex flex-row justify-between ">
                        <BackButton className={"step_quiz_btn_next2"}
                                    onClick={onBackStep}
                        />
                        <NextButton className={"step_quiz_btn_next2"}
                                    onClick={nextStep}
                        />
                    </div>
            </LayoutLevels.BodyLayout>

        </LayoutLevels>
    );
}

export default () => <StepperProvider> <TestLevel /> </StepperProvider>;
