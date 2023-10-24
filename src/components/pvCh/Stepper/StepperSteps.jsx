import React, { useEffect } from 'react';
import { useStepper } from "./hook";
import PropTypes from "prop-types";

export const StepperSteps = function ({ children, style, className }) {
    const { currentStep, steps, setSteps } = useStepper();

    useEffect(() => {
        const stepperSteps = React.Children.toArray(children)
            .filter(step => {
                return step.props.__TYPE === 'StepperStep';
            })
            .map(step => step.props);
        setSteps(stepperSteps);
    }, [setSteps]);

    return (
        <>
            {children &&
                React.Children.map(children, child => {
                    if (steps.length) {
                        return child.props.id === steps[currentStep].id
                            ? child
                            : null;
                    }
                })}
        </>
    );
};

export const StepperStep = function ({ children, classContainer }) {
    return <div className={`${classContainer} bg-red `} >{children}</div>;
};

StepperStep.propTypes = {
    children: PropTypes.node,
    __TYPE: PropTypes.string,
};

StepperStep.defaultProps = {
    __TYPE: 'StepperStep',
};

