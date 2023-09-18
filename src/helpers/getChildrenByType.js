import React from "react";
import { typeOfComponent } from "./typeOfComponent";

export const getChildrenByType = (children, types) =>
    React.Children.toArray(children).filter(child => types.indexOf(typeOfComponent(child)) !== -1);
