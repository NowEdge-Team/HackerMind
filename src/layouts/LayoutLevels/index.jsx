import style from "./style.module.scss";

import {getChildrenByType} from "@/helpers/getChildrenByType.js";
import Sidebar from "@/layouts/LayoutLevels/Sidebar/index.jsx";
import BodyLayout from "@/layouts/LayoutLevels/BodyLayout/index.jsx";



const LayoutLevels = ({ children, showSidebar = true, levelIndex = 0, stepIndex }) => {
    return (
        <div className="flex flex-row w-screen  h-screen ">
            {getChildrenByType(children, ['SidebarLayout','BodyLayout'])}
        </div>
    );
}


LayoutLevels.Sidebar = Sidebar;
LayoutLevels.BodyLayout = BodyLayout;

export default LayoutLevels;
