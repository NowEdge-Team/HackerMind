import GRoutes from "./GRoutes";
import Badges from '@/pages/Badges/badges';
import Menu from "@/pages/Menu/Menu.jsx";
import Classement from "@/pages/Classement/classement.jsx";
import Parcours from "@/pages/Parcours/Parcours.jsx";
import RapportActivite_pvPharma from "@/pages/RapportActivite";
import Day1 from "@/pages/days/day1";
import Day2 from "@/pages/days/day2";
import Day3 from "@/pages/days/day3";
import Day4 from "@/pages/days/day4";
import Day5 from "@/pages/days/day5";
import LoaderPage from "@/pages/LoaderPage.jsx";
import NotFound from "@/pages/NotFound.jsx";
import TestLevel from "@/pages/days/TestLevel/index.jsx";


const base_url = "";
const layout = 'strategicGameLayout';
const roles = ['Participant'];


const lisPaths = [
    {path: '/', name: 'hackermind', component: Menu},
    {path: '/activity-report', name: 'hackermind-activity-report',component: RapportActivite_pvPharma},
    {path: '/parcours', name: 'hackermind-activity-report', component: Parcours},
    {path: '/classement', name: 'hackermind-activity-report', component: Classement},
    {path: '/badges', name: 'hackermind-badges', component: Badges},
    {path: '/day/1', name: 'hackermind-day-1', component: Day1},
    {path: '/day/2', name: 'hackermind-day-2', component: Day2},
    {path: '/day/3', name: 'hackermind-day-3', component: Day3},
    {path: '/day/4', name: 'hackermind-day-4', component: Day4},
    {path: '/day/5', name: 'hackermind-day-5', component: Day5},
    {path: '/404', name: '404', component: NotFound},
    {path: '/loaderPage', name: 'hackermind', component: LoaderPage},
    {path: '/test', name: 'test', component: TestLevel},

]


const routes = GRoutes({lisPaths, base_url, layout, roles})

export {routes};

