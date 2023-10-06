import { httpClient_get, httpClient_post } from "../../helpers/api";


const path = "hackermind";

const getCenterInfoService = (game_session_id) => {
    return httpClient_get(
        `/participant/${path}/getmission?game_session_id=${game_session_id}`
    )
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export { getCenterInfoService };

const updateCenterInfoService = (
    game_session_id,
    name,
    avatar_id,
    fonction
) => {
    return httpClient_post(`/participant/${path}/updatemission`, {
        game_session_id,
        name,
        avatar_id,
        fonction,
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreService = (mission_id) => {
    // if (mission_id === false || mission_id === undefined) {
    //     return {}
    // }
    return httpClient_get(`/participant/${path}/getscore?mission_id=${mission_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreGlobalService = (game_session_id) => {
    return httpClient_get(`/participant/${path}/getscores?game_session_id=${game_session_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreGlobalModeratorService = (game_session_id) => {
    return httpClient_get(`/moderator/${path}/getscores?game_session_id=${game_session_id}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export { updateCenterInfoService, getScoreService, getScoreGlobalService, getScoreGlobalModeratorService };
