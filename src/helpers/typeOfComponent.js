import React from "react";


export const typeOfComponent = component =>
    component?.props?.__TYPE ||
    component?.type?.toString().replace('Symbol(react.fragment)', 'react.fragment') ||
    undefined;
