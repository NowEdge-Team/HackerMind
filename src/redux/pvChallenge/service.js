import { httpClient_get, httpClient_post } from "../../helpers/api";


const path = "digital_ambassadors";

const getCenterInfoService = (gameSessionId) => {
    return httpClient_get(
        `/participant/${path}/getmission?gameSessionId=${gameSessionId}`
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
    gameSessionId,
    name,
    avatarId,
    fonction
) => {
    return httpClient_post(`/participant/${path}/updatemission`, {
        gameSessionId,
        name,
        avatarId,
        fonction,
    })
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreService = (missionId) => {
    // if (missionId === false || missionId === undefined) {
    //     return {}
    // }
    return httpClient_get(`/participant/${path}/getscore?missionId=${missionId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreGlobalService = (gameSessionId) => {
    return httpClient_get(`/participant/${path}/getscores?gameSessionId=${gameSessionId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

const getScoreGlobalModeratorService = (gameSessionId) => {
    return httpClient_get(`/moderator/${path}/getscores?gameSessionId=${gameSessionId}`)
        .then((response) => {
            return response.data;
        })
        .catch((error) => {
            throw error;
        });
};

export { updateCenterInfoService, getScoreService, getScoreGlobalService, getScoreGlobalModeratorService };
