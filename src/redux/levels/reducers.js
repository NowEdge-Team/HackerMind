import { REHYDRATE } from "redux-persist";
import {
    DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO, MOVE_MATRIX_DRD, VALIDATE_ACTIVITY, SET_MATRIX_STEP, SET_CURRENT_AVATAR, DAY_GET_DETAIL, DAY_GET_DETAIL_SUCCESS, DAY_GET_DETAIL_FAILED, CLEAR_DAY
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
            lastUpdate: +new Date(),
            isValid: false,
            decisions: [
                {
                    id: 6,
                    idCell: -1,
                    correctCellId: 4,
                    isCorrect: false
                },
                {
                    id: 7,
                    idCell: -1,
                    correctCellId: 11,
                    isCorrect: false
                },
                {
                    id: 8,
                    idCell: -1,
                    correctCellId: 21,
                    isCorrect: false
                },
                {
                    id: 9,
                    idCell: -1,
                    correctCellId: 27,
                    isCorrect: false
                },
                {
                    id: 10,
                    idCell: -1,
                    correctCellId: 36,
                    isCorrect: false
                }
            ]
        },
        currentAvatar: {
            activeitem: 1,
            isUpdate: false
        },
        config_matrix: {
            activeItem: 1,
            step: 0
        },


    },
    loading: false,
};

const Levels = (state = INIT_STATE, action) => {
    switch (action.type) {
        case CLEAR_DAY:
            return {
                ...INIT_STATE,
            }
        case SET_CURRENT_AVATAR:
            return {
                ...state,
                day1: {
                    ...state.day1,
                    currentAvatar: {
                        activeitem: action.payload.activeitem ?? state.day1.currentAvatar.activeitem,
                        isUpdate: action.payload.isUpdate ?? state.day1.currentAvatar.isUpdate,
                    }
                }
            }
        case SET_MATRIX_STEP:
            return {
                ...state,
                day1: {
                    ...state.day1,
                    config_matrix: { ...state.day1.config_matrix, [action.payload.name]: action.payload.value }
                }
            }
        case MOVE_MATRIX_DRD:
            const { id, idCell } = action.payload;
            return {
                ...state,
                day1: {
                    ...state.day1,
                    part2: { ...state.day1.part2, lastUpdate: +new Date(), decisions: state.day1.part2.decisions.map(item => item.id === id ? { ...item, idCell } : item) }
                }
            }
        case VALIDATE_ACTIVITY:
            const { day, part, decisions } = action.payload;
            return {
                ...state,
                [day]: {
                    ...state[day],
                    [part]:
                    {
                        ...state[day][part],
                        decisions: state[day][part].decisions.map((item, index) => ({ ...item, ...decisions[index] })),
                        isValid: true
                    }
                }
            }
        case DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO:
            return {
                ...state,
                day4: { ...state.day4, part2: { ...state.day4.part2, decisions: action.payload } },
                loading: false,
            };
        case DAY_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case DAY_GET_DETAIL_SUCCESS:

            console.log("---action.payload.data--->>>", action.payload.data);
            return {
                ...state,
                loading: false,
                [`day${action.payload.dayId}`]: action.payload.data,
            };
        case DAY_GET_DETAIL_FAILED:
            return { ...state, error: action.payload.error, loading: false };
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
