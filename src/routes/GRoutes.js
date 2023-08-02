import {Route} from "react-router-dom";
// import {PrivateRoute} from "./routes.jsx";

export default function GRoutes ({lisPaths, base_url, layout = "",roles}){
    return lisPaths.map((elem)=> ({...elem,route: Route,path:`${base_url}${elem.path}`,layout,roles}));
}
