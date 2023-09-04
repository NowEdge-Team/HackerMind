import {
    DAY1_GET_DETAIL,
    DAY1_GET_DETAIL_FAILED,
    DAY1_GET_DETAIL_SUCCESS,
    DAY1_PART1_ONCHANGE_IS_SELECTED,
    ONCHANGE_RADIO,
    DAY1_PART2_ONDRAG,
    DAY1_PART3_ONCHANGE_PV_CH,
    DGD_DECISIONS,
    DAY1_STEP_2_VALIDATIONS,
    DAY1_STEP_2_VALIDATIONS_FAILED,
    DAY1_STEP_2_VALIDATIONS_SUCCESS,
    DAY1_VALIDATION,
    DAY1_VALIDATION_FAILED,
    DAY1_VALIDATION_SUCCESS,
    DAY2_GET_PV_CH_DETAIL_FAILED,
    DAY2_GET_PV_CH_DETAIL_SUCCESS,
    DAY2_PART1_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED,
    DAY2_PART4_PV_CH_ONCHANGE_IS_SELECTED,
    DAY3_GET_PV_CH_DETAIL_FAILED,
    DAY3_GET_PV_CH_DETAIL_SUCCESS,
    DAY3_PART1_ONCHANGE_PV_CH,
    DAY3_PART2_PV_CH_ONDRAG,
    DAY3_PART3_PV_CH_ONCHANGE_IS_SELECTED,
    DAY3_PART4_ONCHANGE_PV_CH,
    DAY3_PART5_PV_CH_ONCHANGE_IS_SELECTED,
    DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO,
    DAY4_PV_CH_GET_DETAIL,
    DAY4_PV_CH_GET_DETAIL_FAILED,
    DAY4_PV_CH_GET_DETAIL_SUCCESS,
    DAY4_PV_CH_ONCHANGE_CAT1,
    DAY4_PV_CH_ONCHANGE_CAT2,
    DAY4_PV_CH_ONCHANGE_CAT3,
    DAY5_ONCHANGE_CAT0_RANK1,
    DAY5_ONCHANGE_CAT0_RANK2,
    DAY5_ONCHANGE_CAT0_RANK3,
    DAY5_ONCHANGE_CAT0_RANK4,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS1,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS2,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS3,
    DAY5_ONCHANGE_CAT1_LEFT_DECISIONS4,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS1,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS2,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS3,
    DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS4,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS1,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS2,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS3,
    DAY5_ONCHANGE_CAT2_LEFT_DECISIONS4,
    DAY5_ONCHANGE_CAT2_RANK1,
    DAY5_ONCHANGE_CAT2_RANK2,
    DAY5_ONCHANGE_CAT2_RANK3,
    DAY5_ONCHANGE_CAT2_RANK4,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS1,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS2,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS3,
    DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS4,
    DAY5_ONSELECT_CAT,
    DAY5_PV_CH_GET_DETAIL,
    DAY5_PV_CH_GET_DETAIL_FAILED,
    DAY5_PV_CH_GET_DETAIL_SUCCESS,
    DAY5_VALIDATION,
    DAY5_VALIDATION_FAILED,
    DAY5_VALIDATION_SUCCESS,
    PH5_DAY2_GET_DETAIL,
    PH5_DAY2_Part1_ONCHANGE,
    PH5_DAY2_PART2_ONDRAG,
    PH5_DAY2_PART3_ONCHANGE_IS_SELECTED,
    PH5_DAY2_VALID_DAY,
    PH5_DAY2_VALID_DAY_FAILED,
    PH5_DAY2_VALID_DAY_SUCCESS,
    PH5_DAY3_PART2_ONCHANGE_IS_SELECTED,
    PH5_DAY4_PART1_ONCHANGE_IS_SELECTED,
    PH5_DAY4_PART2_ONCHANGE_IS_SELECTED,
    PH5_DAY4_PART3_ONCHANGE_IS_SELECTED,
    PH5_DAY4_STEP_4_UPDATE_DECISIONS,
    PH5_DAY4_VALIDATION,
    PH5_DAY4_VALIDATION_FAILED,
    PH5_DAY4_VALIDATION_SUCCESS,
    PVPHA_Day3_GET_DETAIL,
    PVPHA_Day3_ONCHANGE_CAT3,
    PVPHA_Day3_VALIDATION,
    PVPHA_Day3_VALIDATION_FAILED,
    PVPHA_Day3_VALIDATION_SUCCESS,
    VALIDATION_DAY,
    VALIDATION_DAY_SUCCESS,
    CHANGE_SELECT_DECISIONS_FOLDER,
    CLEAR_DAY,
    CLEAR_ALL_DAY_DATA
} from "../../constants/actionTypes";
import {REHYDRATE} from "redux-persist";

const INIT_STATE = {
    day1: {
        part1: {

        },
        part2: {
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
                    block: 2,
                }
            ],
            decisions: [
                {
                    id: 4,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 5,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 6,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 7,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 8,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 9,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 10,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 11,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 12,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 13,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 14,
                    category: "block",
                    v_category: 3
                }
            ],
        },
        part3: {
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
                    block: 2,
                },
                {
                    id: 5,
                    block: 2,
                }
            ],
            decisions: [
                {
                    id: 14,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 10,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 11,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 12,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 13,
                    category: "block",
                    v_category: 3
                }   
            ],
        },
        part7: {
            decisions: [
                {
                    id: 449,
                    isSelected: false,
                },
                {
                    id: 450,
                    isSelected: false,
                },
                {
                    id: 451,
                    isSelected: false,
                },
                {
                    id: 452,
                    isSelected: false,
                },
                {
                    id: 453,
                    isSelected: false,
                },
                {
                    id: 454,
                    isSelected: false,
                },
                {
                    id: 455,
                    isSelected: false,
                },
                {
                    id: 456,
                    isSelected: false,
                },
                {
                    id: 457,
                    isSelected: false,
                },
                {
                    id: 458,
                    isSelected: false,
                },
                {
                    id: 459,
                    isSelected: false,
                },
                {
                    id: 460,
                    isSelected: false,
                },
                {
                    id: 461,
                    isSelected: false,
                },
                {
                    id: 462,
                    isSelected: false,
                },
                {
                    id: 463,
                    isSelected: false,
                },
                {
                    id: 464,
                    isSelected: false,
                },
                {
                    id: 465,
                    isSelected: false,
                },
                {
                    id: 466,
                    isSelected: false,
                },
                {
                    id: 467,
                    isSelected: false,
                },
                {
                    id: 468,
                    isSelected: false,
                }
            ]
        },
    },
    day2: {
        part1: {

        },
        part2: {
                1:-1,
                2:-1,
                3:-1,
                4:-1,
                5:-1,
                6:-1,
                7:-1,
                8:-1,
                9:-1,
                10:-1
        },
        part3: {
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
                    block: 2,
                },
                {
                    id: 4,
                    block: 2,
                }
            ],
            decisions: [
                {
                    id: 25,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 26,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 27,
                    category: "block",
                    v_category: 1
                },
                {
                    id: 28,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 29,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 30,
                    category: "block",
                    v_category: 2
                },
                {
                    id: 31,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 32,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 33,
                    category: "block",
                    v_category: 3
                },
                {
                    id: 34,
                    category: "block",
                    v_category: 4
                },
                {
                    id: 35,
                    category: "block",
                    v_category: 4
                },
                {
                    id: 36,
                    category: "block",
                    v_category: 4
                }
              
            ],
        },
        part4: {
            decisions: [
                {
                    id: 37,
                    isSelected: false,
                },
                {
                    id: 38,
                    isSelected: false,
                },
                {
                    id: 39,
                    isSelected: false,
                },
                {
                    id: 40,
                    isSelected: false,
                }
            ],
        },
        part5: {
            decisions: [
                {
                    id: 41,
                    isSelected: false,
                },
                {
                    id: 42,
                    isSelected: false,
                },
                {
                    id: 43,
                    isSelected: false,
                },
                {
                    id: 44,
                    isSelected: false,
                }
            ],
        }
        ,
        part6: {
            decisions: [
                {
                    id: 45,
                    isSelected: false,
                },
                {
                    id: 46,
                    isSelected: false,
                },
                {
                    id: 47,
                    isSelected: false,
                },
                {
                    id: 48,
                    isSelected: false,
                }
            ],
        }
    },
    day3: {
        part1: {
            decisions: [
                {
                    id: 49,
                    isSelected: false,
                },
                {
                    id: 50,
                    isSelected: false,
                },
                {
                    id: 51,
                    isSelected: false,
                },
                {
                    id: 52,
                    isSelected: false,
                },
                {
                    id: 53,
                    isSelected: false,
                },
                {
                    id: 54,
                    isSelected: false,
                },
                {
                    id: 55,
                    isSelected: false,
                },
                {
                    id: 56,
                    isSelected: false,
                },
                {
                    id: 57,
                    isSelected: false,
                },
                {
                    id: 58,
                    isSelected: false,
                },
                {
                    id: 59,
                    isSelected: false,
                },
                {
                    id: 60,
                    isSelected: false,
                },
                {
                    id: 61,
                    isSelected: false,
                },
                {
                    id: 62,
                    isSelected: false,
                },
                {
                    id: 63,
                    isSelected: false,
                }
            ]
        },
        part2: {
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
                    block: 2,
                },
                {
                    id: 4,
                    block: 2,
                },
            ],
            decisions: [
                {
                    id: 64,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 65,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 66,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 67,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 68,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 69,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 70,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 71,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 72,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 73,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 74,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 75,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 76,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 77,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 78,
                    category: "block",
                    v_category: "4",
                },{
                    id: 79,
                    category: "block",
                    v_category: "4",
                }
            ],
        },
    },
    day4: {
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
                    block: 2,
                },
                {
                    id: 5,
                    block: 2,
                },
            ],
            decisions: [
                {
                    id: 80,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 81,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 82,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 83,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 84,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 85,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 86,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 87,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 88,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 89,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 90,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 91,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 92,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 93,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 94,
                    category: "block",
                    v_category: "3",
                },
                {
                    id: 95,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 96,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 97,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 98,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 99,
                    category: "block",
                    v_category: "4",
                },
                {
                    id: 100,
                    category: "block",
                    v_category: "5",
                },
                {
                    id: 101,
                    category: "block",
                    v_category: "5",
                },
                {
                    id: 102,
                    category: "block",
                    v_category: "5",
                },
                {
                    id: 103,
                    category: "block",
                    v_category: "5",
                },
                {
                    id: 104,
                    category: "block",
                    v_category: "5",
                }

            ],
        },
        part2: {
            decisions: [
                {
                    id: 105,
                    isSelected: false,
                },
                {
                    id: 106,
                    isSelected: false,
                },
                {
                    id: 107,
                    isSelected: false,
                }
            ],
        },
        part3: {
            decisions: [
                {
                    id: 108,
                    isSelected: false,
                },
                {
                    id: 109,
                    isSelected: false,
                },
                {
                    id: 110,
                    isSelected: false,
                }
            ],
        },
        part4: {
            decisions: [
                {
                    id: 111,
                    isSelected: false,
                },
                {
                    id: 112,
                    isSelected: false,
                },
                {
                    id: 113,
                    isSelected: false,
                }
            ],
        },
    },
    day5: {
        part1: {
            categories: [
                {
                    id: 1,
                    block: 1,
                },
                {
                    id: 2,
                    block: 1,
                }
            ],
            decisions: [
                {
                    id: 114,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 115,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 116,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 117,
                    category: "block",
                    v_category: "1",
                },
                {
                    id: 118,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 119,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 120,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 121,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 122,
                    category: "block",
                    v_category: "2",
                },
                {
                    id: 123,
                    category: "block",
                    v_category: "2",
                }
            ],
        },
        part2: {
            decisions: [
                {
                    id: 124,
                    isSelected: false,
                },
                {
                    id: 125,
                    isSelected: false,
                },
                {
                    id: 126,
                    isSelected: false,
                }
            ],
        },
        dayData: {
            total: 5,
            list: [
                {
                    _id: 1,
                    title: "MedecinTitle",
                    s_title: "MedecinSTitle",
                    total: 4,
                    unit: "",
                    options: [
                        {
                            id_decision: 127,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 128,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 129,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 130,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 131,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 132,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 133,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        },
                        {
                            id_decision: 134,
                            Decision: "gestionDesDonnees",
                            budget: 1,
                        }
                    ],
                },
                {
                    _id: 2,
                    title: "DelegueMedicalTitle",
                    s_title: "DelegueMedicalSTitle",
                    limit: 4,
                    unit: "",
                    options: [
                        {
                            id_decision: 135,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 136,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 137,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 138,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 139,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 140,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 141,
                            Decision: "processusDeProduction",
                            budget: 1,
                        },
                        {
                            id_decision: 142,
                            Decision: "processusDeProduction",
                            budget: 1,
                        }
                    ],
                    total: 4,
                },
                {
                    _id: 3,
                    title: "UnitePHVInterneTitle",
                    s_title: "UnitePHVInterneSTitle",
                    unit: "",
                    options: [
                        {
                            id_decision: 143,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 144,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 145,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 146,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 147,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 148,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 149,
                            Decision: "marketing",
                            budget: 1,
                        },
                        {
                            id_decision: 150,
                            Decision: "marketing",
                            budget: 1,
                        }
                    ],
                    total: 3,
                    limit: 3,
                },
                {
                    _id: 4,
                    title: "CNPVTitle",
                    s_title: "CNPVSTitle",
                    limit: 4,
                    total: 4,
                    unit: "",
                    options: [
                        {
                            id_decision: 151,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 152,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 153,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 154,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 155,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 156,
                            Decision: "analytics",
                            budget: 1,
                        },
                        {
                            id_decision: 157,
                            Decision: "analytics",
                            budget: 1,
                        }
                    ],
                },
            ],
            savedecisions: {
                dayId: 5,
                decisions: [],
            },
        }
    },
    loading: false,
};

const DaysPvCh = (state = INIT_STATE, action) => {
    let categoriesday5 = state.day5.categories;
    let decisionsDay3 = state.day3.decisions;
    let day2Temp;

    let decisionsDay1Part1 = state.day1.part1.decisions;
    let decisionsDay2Part3 = state.day2?.part3?.decisions;
    let decisionsDay3Part2 = state.day3?.part2?.decisions;
    let decisionsDay4Part1 = state.day4.part1;

    switch (action.type) {

        case CHANGE_SELECT_DECISIONS_FOLDER :
            let decisions_list = state.day5.dayData.savedecisions.decisions;
            const is_exist = decisions_list.findIndex(elm=> elm === action.payload );

            if  (is_exist !== -1){
                decisions_list =  decisions_list.filter(elm=> elm !== action.payload);
            }else{
                decisions_list.push(action.payload);
            }

            return {
                ...state,
                day5:{
                    ...state.day5,
                    dayData:{
                        ...state.day5.dayData,
                        savedecisions:{
                            ...state.day5.dayData.savedecisions,
                            decisions:decisions_list
                        }
                    }
                }
            }

        case PH5_DAY2_VALID_DAY:
            return {...state, loading: true};


        case PH5_DAY2_VALID_DAY_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case PH5_DAY2_Part1_ONCHANGE:
            day2Temp = state.day2.part1;
            console.log("____", day2Temp, action.payload);
            day2Temp[action.payload.title] = action.payload.value
            return {...state, day2: {...state.day2, part1: {...day2Temp}}};
        case PH5_DAY2_VALID_DAY_SUCCESS:
            return {...state, loading: false, day2: INIT_STATE.day2};


        case PH5_DAY2_PART2_ONDRAG:
            return {
                ...state,
                day2: {
                    ...state.day2,
                    part2: {
                        decisions: action.payload,
                    },
                },
                loading: false,
            };

        case PH5_DAY4_PART1_ONCHANGE_IS_SELECTED:
            decisionsDay4Part1 = state.day4.part1;
            decisionsDay4Part1[action.payload.index] = action.payload.value
            return {
                ...state,
                day4: {
                    ...state.day4,
                    part1: {
                        ...decisionsDay4Part1,
                    },
                },
                loading: false,
            };
        case PH5_DAY4_STEP_4_UPDATE_DECISIONS:
            return {
                ...state,
                day4: {...state.day4, part4: {...state.day4.part4, decisions: [...action.payload.decisions]}},
            };

        case PH5_DAY4_PART2_ONCHANGE_IS_SELECTED:
            decisionsDay4Part1 = state.day4.part2;
            decisionsDay4Part1[action.payload.index] = action.payload.value
            return {
                ...state,
                day4: {
                    ...state.day4,
                    part2: {
                        ...decisionsDay4Part1,
                    },
                },
                loading: false,
            };
        case PH5_DAY4_PART3_ONCHANGE_IS_SELECTED:
            decisionsDay4Part1 = state.day4.part3;
            decisionsDay4Part1[action.payload.index] = action.payload.value
            return {
                ...state,
                day4: {
                    ...state.day4,
                    part3: {
                        ...decisionsDay4Part1,
                    },
                },
                loading: false,
            };
        case PH5_DAY4_VALIDATION:
            return {
                ...state,
                loading: true,
            };

        case PH5_DAY4_VALIDATION_SUCCESS:
            return {
                ...state,
                day4: INIT_STATE.day4,
                loading: false,
            };

        case DAY5_ONSELECT_CAT:
            return {
                ...state,
                day5: {...state.day5, selectedCategory: action.payload},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT0_RANK1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 0) {
                    category.rank1 = action.payload;
                }
                return category;
            });
            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT0_RANK2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 0) {
                    category.rank2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT0_RANK3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 0) {
                    category.rank3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT0_RANK4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 0) {
                    category.rank4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_LEFT_DECISIONS1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.leftDecisions1 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_LEFT_DECISIONS2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.leftDecisions2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_LEFT_DECISIONS3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.leftDecisions3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_LEFT_DECISIONS4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.leftDecisions4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.rightDecisions1 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.rightDecisions2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.rightDecisions3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT1_RIGHT_DECISIONS4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 1) {
                    category.rightDecisions4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };

        case DAY5_ONCHANGE_CAT2_LEFT_DECISIONS1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.leftDecisions1 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_LEFT_DECISIONS2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.leftDecisions2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_LEFT_DECISIONS3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.leftDecisions3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_LEFT_DECISIONS4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.leftDecisions4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rightDecisions1 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rightDecisions2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rightDecisions3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RIGHT_DECISIONS4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rightDecisions4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };

        case DAY5_ONCHANGE_CAT2_RANK1:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rank1 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RANK2:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rank2 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RANK3:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rank3 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };
        case DAY5_ONCHANGE_CAT2_RANK4:
            categoriesday5 = state.day5.categories;
            categoriesday5 = categoriesday5.map((category) => {
                if (category.id === 2) {
                    category.rank4 = action.payload;
                }
                return category;
            });

            return {
                ...state,
                day5: {...state.day5, categories: categoriesday5},
                loading: false,
            };

        case PH5_DAY4_VALIDATION_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case DAY5_VALIDATION:
            return {
                ...state,
                loading: true,
            };

        case DAY5_VALIDATION_SUCCESS:
            return {
                ...state,
                loading: false,
                day5: INIT_STATE.day5
            };

        case DAY5_VALIDATION_FAILED:
            return {...state, error: action.payload.error, loading: false};


        case PVPHA_Day3_ONCHANGE_CAT3:
            decisionsDay3 = state.day3.categories;
            decisionsDay3 = decisionsDay3.map((category) => {
                if (category.id === 3) {
                    switch (action.payload.id) {
                        case 1:
                            category.selectedDecision1 = action.payload.value;
                            break;
                        case 2:
                            category.selectedDecision2 = action.payload.value;
                            break;
                        case 3:
                            category.selectedDecision3 = action.payload.value;
                            break;
                        case 4:
                            category.selectedDecision4 = action.payload.value;
                            break;
                        case 5:
                            category.selectedDecision5 = action.payload.value;
                            break;
                        case 6:
                            category.selectedDecision6 = action.payload.value;
                            break;

                        default:
                            break;
                    }
                }
                return category;
            });

            return {
                ...state,
                day3: {...state.day3, categories: decisionsDay3},
                loading: false,
            };


        case PVPHA_Day3_VALIDATION:
            return {
                ...state,
                loading: true,
            };

        case PVPHA_Day3_VALIDATION_SUCCESS:
            return {
                ...state,
                loading: false,
                day3: INIT_STATE.day3,
            };

        case PVPHA_Day3_VALIDATION_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case PH5_DAY2_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };

        case DAY2_GET_PV_CH_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                day2: action.payload,
            };

        case DAY2_GET_PV_CH_DETAIL_FAILED:
            return {...state, error: action.payload.error, loading: false};


        case DAY4_PV_CH_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };

        case DAY4_PV_CH_GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                day4: action.payload,
            };

        case DAY4_PV_CH_GET_DETAIL_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case DAY5_PV_CH_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };

        case DAY5_PV_CH_GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                day5: action.payload,
            };

        case DAY5_PV_CH_GET_DETAIL_FAILED:
            return {...state, error: action.payload.error, loading: false};


        case PVPHA_Day3_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };

        case DAY3_GET_PV_CH_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                day3: action.payload,
            };

        case DAY3_GET_PV_CH_DETAIL_FAILED:
            return {...state, error: action.payload.error, loading: false};


        case DAY1_PART2_ONDRAG:
            return {
                ...state,
                day1: {
                    ...state.day1,
                    part2: {
                        decisions: action.payload,
                    },
                },
                loading: false,
            };
        case DAY1_PART1_ONCHANGE_IS_SELECTED:
            decisionsDay1Part1 = decisionsDay1Part1.map((decision) => {
                if (decision.id === action.payload.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day1: {
                    ...state.day1,
                    part1: {
                        decisions: [...decisionsDay1Part1],
                    },
                },
                loading: false,
            };

        case CLEAR_ALL_DAY_DATA:
            return {...INIT_STATE};

        case CLEAR_DAY:
            const day_index = 'day'+action.payload;
            return {
                ...state,
                [day_index]: INIT_STATE[day_index],
                loading: false,
            };
        case ONCHANGE_RADIO:

            const {day, part} = action.payload

            return {
                ...state,
                [day]: {
                    ...state[day],
                    [part]: {
                        decisions: state[day][part].decisions.map(elm=> {
                            const desc =  action.payload.decisions.find(el => el.id === elm.id )
                            if (desc){
                              return desc ;
                            }
                            return elm;
                        }),
                    },
                },
                loading: false,
            };
        case VALIDATION_DAY:
            return {
                ...state,
                loading: true,
            };

        case VALIDATION_DAY_SUCCESS:
            return {
                ...state,
                loading: false,
            };



        case PH5_DAY2_PART3_ONCHANGE_IS_SELECTED:
            decisionsDay2Part3 = decisionsDay2Part3.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day2: {
                    ...state.day2,
                    part3: {
                        decisions: [...decisionsDay2Part3],
                    },
                },
                loading: false,
            };

        case PH5_DAY3_PART2_ONCHANGE_IS_SELECTED:
            decisionsDay3Part2 = decisionsDay3Part2.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day3: {
                    ...state.day3,
                    part2: {
                        decisions: [...decisionsDay3Part2],
                    },
                },
                loading: false,
            };
        case DAY1_VALIDATION:
            return {
                ...state,
                loading: false,
            };
        case DAY1_VALIDATION_SUCCESS:
            return {
                ...state,
                loading: false,
            };
        case DAY1_GET_DETAIL:
            return {
                ...state,
                loading: true,
            };
        case DAY1_GET_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                day1: action.payload,
            };
        case DAY1_GET_DETAIL_FAILED:
            return {...state, error: action.payload.error, loading: false};
        case DAY1_VALIDATION_FAILED:
            return {...state, error: action.payload.error, loading: false};

        case DGD_DECISIONS:

            const {day:day_drag, part:part_drag , decisions:decisions_drag} = action.payload
            console.log("----part_drag----",part_drag,day_drag)
            return {
                ...state,
                [day_drag]: {
                    ...state[day_drag],
                    [part_drag]: {
                        ...state[day_drag][part_drag],
                        decisions: [...decisions_drag],
                    },
                },
                loading: false,
            };

        case DAY1_STEP_2_VALIDATIONS:
            return {...state, loading: true};
        case DAY1_STEP_2_VALIDATIONS_SUCCESS:
            return {
                ...state,
                day1: {
                    part1: {
                        decisions: [
                            {
                                id: 1,
                                isSelected: false,
                            },
                            {
                                id: 2,
                                isSelected: false,
                            },
                            {
                                id: 3,
                                isSelected: false,
                            },
                            {
                                id: 4,
                                isSelected: false,
                            },
                            {
                                id: 5,
                                isSelected: false,
                            },
                            {
                                id: 6,
                                isSelected: false,
                            },
                            {
                                id: 7,
                                isSelected: false,
                            },
                            {
                                id: 8,
                                isSelected: false,
                            },
                            {
                                id: 9,
                                isSelected: false,
                            },
                            {
                                id: 10,
                                isSelected: false,
                            },
                            {
                                id: 11,
                                isSelected: false,
                            },
                            {
                                id: 12,
                                isSelected: false,
                            },
                            {
                                id: 13,
                                isSelected: false,
                            },
                            {
                                id: 14,
                                isSelected: false,
                            },
                            {
                                id: 15,
                                isSelected: false,
                            },
                            {
                                id: 16,
                                isSelected: false,
                            },
                            {
                                id: 17,
                                isSelected: false,
                            },
                            {
                                id: 18,
                                isSelected: false,
                            },
                            {
                                id: 19,
                                isSelected: false,
                            },
                            {
                                id: 20,
                                isSelected: false,
                            },
                            {
                                id: 21,
                                isSelected: false,
                            },
                            {
                                id: 22,
                                isSelected: false,
                            },
                            {
                                id: 23,
                                isSelected: false,
                            },
                            {
                                id: 24,
                                isSelected: false,
                            },
                            {
                                id: 25,
                                isSelected: false,
                            },
                            {
                                id: 26,
                                isSelected: false,
                            },
                            {
                                id: 27,
                                isSelected: false,
                            },
                        ],
                    },
                    part2: {
                        categories: [
                            {
                                id: 1,
                                // text: "Centre National de Pharmacovigilance",
                                block: 1,
                            },
                            {
                                id: 2,
                                // text: "Organisation Mondiale de la Santé",
                                block: 1,
                            },
                            {
                                id: 3,
                                // text: "Direction du Médicament",

                                block: 1,
                            },
                            {
                                id: 4,
                                // text: "Industrie Pharmaceutique",

                                block: 2,
                            },
                            {
                                id: 5,
                                // text: "Professionels de la santé",

                                block: 2,
                            },
                            {
                                id: 6,
                                // text: "Patients",

                                block: 2,
                            },
                        ],
                        decisions: [
                            {
                                id: 13,
                                category: "block",
                            },
                            {
                                id: 14,
                                category: "block",
                            },
                            {
                                id: 15,
                                category: "block",
                            },
                            {
                                id: 16,
                                category: "block",
                            },
                            {
                                id: 17,
                                category: "block",
                            },
                            {
                                id: 18,
                                category: "block",
                            },
                            {
                                id: 19,
                                category: "block",
                            },
                            {
                                id: 20,
                                category: "block",
                            },
                            {
                                id: 21,
                                category: "block",
                            },
                            {
                                id: 22,
                                category: "block",
                            },

                            {
                                id: 23,
                                category: "block",
                            },
                            {
                                id: 24,
                                category: "block",
                            },
                            {
                                id: 25,
                                category: "block",
                            },
                            {
                                id: 26,
                                category: "block",
                            },
                            {
                                id: 27,
                                category: "block",
                            }


                        ],
                    },
                },
                loading: false
            };
        case DAY1_STEP_2_VALIDATIONS_FAILED:
            return {...state, loading: false};

        case DAY1_PART3_ONCHANGE_PV_CH:


            const decisions_options = state.day1.part1.decisions.map((elem) => {
                const finder = action.payload.find(el => el.id === elem.id);
                if (finder) return finder;
                return elem
            })

            return {...state, day1: {...state.day1, part1: {decisions: decisions_options}}};

        case DAY2_PART2_PV_CH_ONCHANGE_IS_SELECTED:
            const decisionsDay2Part2 = state.day2.part2;
            decisionsDay2Part2[action.payload.index] = action.payload.value
            return {
                ...state,
                day2: {
                    ...state.day2,
                    part2: {
                        ...decisionsDay2Part2,
                    },
                },
                loading: false,
            };
        case DAY2_PART1_PV_CH_ONCHANGE_IS_SELECTED:
            const decisionsDay2Part4 = state.day2.part4.decisions.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day2: {
                    ...state.day2,
                    part4: {
                        decisions: [...decisionsDay2Part4],
                    },
                },
                loading: false,
            };
        case DAY2_PART4_PV_CH_ONCHANGE_IS_SELECTED:
            const decisionsDay2Part3_ = state.day2.part3.decisions.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day2: {
                    ...state.day2,
                    part3: {
                        decisions: [...decisionsDay2Part3_],
                    },
                },
                loading: false,
            };
        case DAY3_PART1_ONCHANGE_PV_CH:
            const decisions_options1 = state.day3.part1.decisions.map((elem) => {
                const finder = action.payload.find(el => el.id === elem.id);
                if (finder) return finder;
                return elem
            })
            return {...state, day3: {...state.day3, part1: {decisions: decisions_options1}}};
        case DAY3_PART2_PV_CH_ONDRAG:
            return {...state, day3: {...state.day3, part2: {decisions: action.payload}}};
        case DAY3_PART3_PV_CH_ONCHANGE_IS_SELECTED:
            const decisionsDay2Part33_ = state.day3.part3.decisions.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day3: {
                    ...state.day3,
                    part3: {
                        decisions: [...decisionsDay2Part33_],
                    },
                },
                loading: false,
            };
        case DAY3_PART4_ONCHANGE_PV_CH:
            const decisionsOptions4 = state.day3.part4.decisions.map((elem) => {
                const finder = action.payload.find(el => el.id === elem.id);
                if (finder) return finder;
                return elem
            });

            return {...state, day3: {...state.day3, part4: {decisions: decisionsOptions4}}};
        case DAY3_PART5_PV_CH_ONCHANGE_IS_SELECTED:
            const decisionsDay3Part5_ = state.day3.part5.decisions.map((decision) => {
                if (decision.id === action?.payload?.id) {
                    decision.isSelected = !decision.isSelected;
                }
                return decision;
            });
            return {
                ...state,
                day3: {
                    ...state.day3,
                    part5: {
                        decisions: [...decisionsDay3Part5_],
                    },
                },
                loading: false,
            };

        case DAY4_PV_CH_ONCHANGE_CAT2:
            let decisionsDay4_1 = state.day4.categories;
            decisionsDay4_1 = decisionsDay4_1.map((category) => {
                if (category.id === 2) {
                    //console.log("category", category);
                    switch (action.payload.id) {
                        case 1:
                            category.selectedDecision1 = action.payload.value;
                            break;
                        case 2:
                            category.selectedDecision2 = action.payload.value;
                            break;
                        case 3:
                            category.selectedDecision3 = action.payload.value;
                            break;
                        case 4:
                            category.selectedDecision4 = action.payload.value;
                            break;
                        case 5:
                            category.selectedDecision5 = action.payload.value;
                            break;
                        case 6:
                            category.selectedDecision6 = action.payload.value;
                            break;
                        case 7:
                            category.selectedDecision7 = action.payload.value;
                            break;
                        default:
                            break;
                    }
                }
                return category;
            });

            return {
                ...state,
                day4: {...state.day4, categories: decisionsDay4_1},
                loading: false,
            };

        case DAY4_PV_CH_ONCHANGE_CAT1:
            let decisionsDay4_2 = state.day4.categories;
            decisionsDay4_2 = decisionsDay4_2.map((category) => {
                if (category.id === 1) {
                    //console.log("category", category);
                    switch (action.payload.id) {
                        case 1:
                            category.selectedDecision1 = action.payload.value;
                            break;
                        case 2:
                            category.selectedDecision2 = action.payload.value;
                            break;
                        case 3:
                            category.selectedDecision3 = action.payload.value;
                            break;
                        case 4:
                            category.selectedDecision4 = action.payload.value;
                            break;
                        case 5:
                            category.selectedDecision5 = action.payload.value;
                            break;
                        case 6:
                            category.selectedDecision6 = action.payload.value;
                            break;

                        default:
                            break;
                    }
                }
                return category;
            });

            return {
                ...state,
                day4: {...state.day4, categories: decisionsDay4_2},
                loading: false,
            };

        case DAY4_PV_CH_ONCHANGE_CAT3:
            let decisionsDay4_3 = state.day4.categories;
            decisionsDay4_3 = decisionsDay4_3.map((category) => {
                if (category.id === 3) {
                    //console.log("category", category);
                    switch (action.payload.id) {
                        case 1:
                            category.selectedDecision1 = action.payload.value;
                            break;
                        case 2:
                            category.selectedDecision2 = action.payload.value;
                            break;
                        case 3:
                            category.selectedDecision3 = action.payload.value;
                            break;
                        case 4:
                            category.selectedDecision4 = action.payload.value;
                            break;
                        case 5:
                            category.selectedDecision5 = action.payload.value;
                            break;

                        default:
                            break;
                    }
                }
                return category;
            });

            return {
                ...state,
                day4: {...state.day4, categories: decisionsDay4_3},
                loading: false,
            };

        case DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO:

            console.log("---DAY4_PART2_PV_CH_CHANGE_IS_SELECTED_RADIO---->>>", action.payload);
            return {
                ...state,
                day4: {...state.day4, part2: {...state.day4.part2, decisions: action.payload}},
                loading: false,
            };


        case REHYDRATE:
            return action.payload
                ? {
                    ...state,
                    ...action.payload.DaysPvCh,
                }
                : {
                    ...state,
                };
        default:
            return {...state};
    }
};

export default DaysPvCh;
