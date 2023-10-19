import { httpClient_get, httpClient_post } from "../../helpers/api";

const path = "hackermind";

const saveDetailsService = (day_id, mission_id, details) => {
  return httpClient_post(`/participant/${path}/savedecisiondetails`, {
    mission_id,
    day_id,
    details,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};
const saveDecisionsService = (day_id, decisions, mission_id) => {
  decisions = decisions.filter(function (el) {
    return el != null;
  });
  return httpClient_post(`/participant/${path}/savedecisions`, {
    mission_id,
    decisions,
    day_id,
  })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const closeDayService = (day_id, mission_id) => {
  return httpClient_get(
    `/participant/${path}/closeday?mission_id=${mission_id}&day_id=${day_id}`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
};

const getHistoricScoresPvCh = (mission_id) => {

  return httpClient_get(
    `/participant/${path}/gethistoricscores?mission_id=${mission_id}`
  )
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

const updateAvatar = (game_session_id, avatar_id) => {

  return httpClient_post(
    `/participant/${path}/updateavatar`
    , {
      game_session_id,
      avatar_id,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      throw error;
    });
}

export {
  updateAvatar,
  saveDetailsService,
  saveDecisionsService,
  closeDayService,
  getHistoricScoresPvCh,
};
