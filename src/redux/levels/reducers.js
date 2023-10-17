import { REHYDRATE } from "redux-persist";
import {
    DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO, VALIDATE_ACTIVITY
} from "../../constants/actionTypes";

const INIT_STATE = {
    day1: {
        part1: {
            categories: [
                {
                    id: 1,
                    block: 1,
                },
                {
                    id: 2,
                    block: 1,
                },
                {
                    id: 3,
                    block: 1,
                },
                {
                    id: 4,
                    block: 1,
                },
                {
                    id: 5,
                    block: 1,
                }
            ],
            decisions: [
                {
                    id: 1,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 2,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 3,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 4,
                    category: "block",
                    v_category: 4
                },
                {
                    id: 5,
                    category: "block",
                    v_category: 5
                }
            ],
        },
        part2: {
            decisions:[
                {id:6,correct:false},
                {id:7,correct:false},
                {id:8,correct:false},
                {id:9,correct:false},
                {id:10,correct:false},
            ]
        }
    },
    loading: false,
};

const Levels = (state = INIT_STATE, action) => {
    switch (action.type) {
        case VALIDATE_ACTIVITY:
            const {day,part,decisions} = action.payload;
            return  {
                ...state,
                [day]:{
                    ...state[day],
                    [part]: {...state[day][part],decisions}
                }
            }
        case DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO:
            return {
                ...state,
                day4: { ...state.day4, part2: { ...state.day4.part2, decisions: action.payload } },
                loading: false,
            };
        case REHYDRATE:
            return action.payload
                ? {
                    ...state,
                    ...action.payload.Levels,
                }
                : {
                    ...state,
                };
        default:
            return { ...state };
    }
};

export default Levels;
