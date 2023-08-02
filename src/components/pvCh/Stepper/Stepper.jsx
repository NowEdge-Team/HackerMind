import React from 'react';
import {StepperStep, StepperSteps} from './StepperSteps.jsx';
import {useStepper} from "./hook";

const Stepper = ({children , style,className=""}) => {
    const {
    } = useStepper();
    return (
            <div style={style} className={className} >
                {children}
            </div>
        )
};

Stepper.Step = StepperStep;
Stepper.Steps = StepperSteps;
export default Stepper;
